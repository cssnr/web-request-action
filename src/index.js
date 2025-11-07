const fs = require('node:fs')
const https = require('node:https')

const core = require('@actions/core')

const axios = require('axios')
const FormData = require('form-data')
const yaml = require('js-yaml')

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
    core.endGroup() // Inputs

    // Options
    core.startGroup('Options')
    const httpsAgent = insecure
        ? new https.Agent({
              rejectUnauthorized: false,
          })
        : null
    console.log('httpsAgent:', httpsAgent)
    const auth = username && password ? { username, password } : {}
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
        form.append(name, fs.createReadStream(file), options)
        Object.assign(headers, form.getHeaders())
        data = form
    }

    // Config
    const config = {
        url: new URL(url),
        method,
        headers,
        params,
        data,
        auth,
        httpsAgent,
    }
    core.startGroup('Config')
    console.log('config:', config)
    core.endGroup() // Config

    // Request
    core.info('⌛ Processing Request')
    const response = await axios.request(config)
    console.log('response.status:', response.status)
    // console.log('response:', response)
    // console.log('response.request._headers:', response.request._headers)

    core.startGroup('Headers')
    console.log('response.headers:', response.headers)
    core.endGroup() // Headers

    core.startGroup('Data')
    console.log('response.data:', response.data)
    core.endGroup() // Data

    // Outputs
    core.info('📩 Setting Outputs')
    core.setOutput('status', response.status)
    core.setOutput('headers', response.headers)
    core.setOutput('data', response.data)

    core.info(`✅ \u001b[32;1mFinished Success`)
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
    // console.log(`Parsing input "${input}" with value:\n${data}`)
    try {
        return JSON.parse(data)
    } catch (e) {
        core.debug(`${input} - JSON.parse failed: ${e.message}`)
        // console.log(`${input} - JSON.parse failed:`, e.message)
    }
    try {
        return yaml.load(data)
    } catch (e) {
        core.debug(`${input} - yaml.load failed: ${e.message}`)
        // console.log(`${input} - yaml.load failed:`, e.message)
    }
    throw new Error(`Unable to parse "${input}" with value: ${data}`)
}

main().catch((e) => {
    core.debug(e)
    core.info(e.message)
    core.setFailed(e.message)
})
