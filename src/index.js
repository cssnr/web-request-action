const core = require('@actions/core')
const axios = require('axios')
const FormData = require('form-data')
const fs = require('fs')
const https = require('https')
const yaml = require('js-yaml')

async function main() {
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
    core.endGroup() // Inputs

    // Options
    const auth = username && password ? { username, password } : {}
    console.log('auth:', auth)
    const httpsAgent = insecure
        ? new https.Agent({
              rejectUnauthorized: false,
          })
        : null
    console.log('httpsAgent:', httpsAgent)

    // File
    if (file) {
        const form = new FormData()
        for (const [key, value] of Object.entries(data)) {
            form.append(key, value)
        }
        form.append(name, fs.createReadStream(file))
        Object.assign(headers, form.getHeaders())
        data = form
    }

    // Request
    const config = {
        url,
        method,
        headers,
        params,
        data,
        auth,
        httpsAgent,
    }
    console.log('config:', config)
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
    core.setOutput('status', response.status)
    core.setOutput('headers', response.headers)
    core.setOutput('data', response.data)

    core.info(`\u001b[32;1mFinished Success`)
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
