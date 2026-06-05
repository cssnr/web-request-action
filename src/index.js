import * as core from '@actions/core'
import * as yaml from 'js-yaml'
import fs from 'node:fs'
import https from 'node:https'
import axios from 'axios'
import FormData from 'form-data'
import { JSONPath } from 'jsonpath-plus'

async function main() {
  const version = process.env.GITHUB_ACTION_REF
    ? `${process.env.GITHUB_ACTION_REF}`
    : 'Source'
  core.info(`🏳️ Starting Web Request Action - \u001b[35;1m${version}`)

  // Inputs
  core.startGroup('Inputs')
  const url = core.getInput('url', { required: true })
  console.log('url:', url)
  const method = core.getInput('method', { required: true })
  console.log('method:', method)
  let data = parseData('data')
  console.log('data:', data)
  const headers = parseData('headers')
  console.log('headers:', headers)
  const params = parseData('params')
  console.log('params:', params)
  let config = parseData('config')
  console.log('config:', config)
  const username = core.getInput('username')
  console.log('username:', username)
  const password = core.getInput('password')
  console.log('password:', password)
  const insecure = core.getBooleanInput('insecure')
  console.log('insecure:', insecure)
  const file = core.getInput('file')
  console.log('file:', file)
  const name = core.getInput('name')
  console.log('name:', name)
  const filename = core.getInput('filename')
  console.log('filename:', filename)
  const path = core.getInput('path')
  console.log('path:', path)
  core.endGroup() // Inputs

  // Options
  core.startGroup('Options')
  const httpsAgent = insecure
    ? new https.Agent({
        rejectUnauthorized: false,
      })
    : null
  console.log('httpsAgent:', httpsAgent)
  const auth = username || password ? { username, password } : {}
  console.log('auth:', auth)
  const options = filename ? { filename } : {}
  console.log('options:', options)
  core.endGroup() // Options

  // File
  if (file) {
    core.info('🔁 Converting Data to FormData')
    const form = new FormData()
    for (const [key, value] of Object.entries(data)) {
      form.append(key, value)
    }
    core.debug(`Adding file: ${file}`)
    form.append(name, fs.createReadStream(file), options)
    Object.assign(headers, form.getHeaders())
    data = form
  }

  // Config
  config = { url, method, headers, params, data, auth, httpsAgent, ...config }
  core.startGroup('Config')
  console.log('config:', config)
  core.endGroup() // Config

  // Request
  core.info('⌛ Processing Request')
  const response = await axios.request(config)
  console.log('response.status:', response.status)
  // console.log('response:', response)
  // console.log('responseUrl:', response.request?.res?.responseUrl)
  // console.log('response.request._headers:', response.request._headers)

  core.startGroup('Headers')
  console.log(response.headers) // NOSONAR
  core.endGroup() // Headers

  core.startGroup('Data')
  console.log(response.data) // NOSONAR
  core.endGroup() // Data

  const result = parseJSONPath(path, response.data)
  core.startGroup('Result')
  console.log(result)
  core.endGroup() // Result

  // Outputs
  core.info('📩 Setting Outputs')
  core.setOutput('status', response.status)
  core.setOutput('headers', response.headers)
  core.setOutput('data', response.data)
  core.setOutput('result', result)
  // core.setOutput('url', response.request?.res?.responseUrl || '')

  core.info(`✅ \u001b[32;1mFinished Success`)
}

function parseJSONPath(value, data) {
  if (!value) return null
  const values = JSONPath({ path: value, json: data })
  core.debug(`JSONPath values: ${values}`)
  // if (!values.length) throw new Error(`No Values for Path: ${value}`)
  return values[0]
}

/**
 * Parse Data from Input
 * @param input
 * @return {Object}
 */
function parseData(input) {
  const data = core.getInput(input)
  if (!data) return {}
  core.debug(`Parsing input "${input}" with value:\n${data}`)
  try {
    return JSON.parse(data)
  } catch (e) {
    core.debug(`${input} - JSON.parse failed: ${e.message}`)
  }
  try {
    return yaml.load(data)
  } catch (e) {
    core.debug(`${input} - yaml.load failed: ${e.message}`)
  }
  throw new Error(`Unable to parse "${input}" with value: ${data}`)
}

try {
  await main()
} catch (e) {
  const message = e instanceof Error ? e.message : 'Unknown Error'
  core.setFailed(message)
}
