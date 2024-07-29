const core = require('@actions/core')
const axios = require('axios')
const FormData = require('form-data')
const fs = require('fs')
const https = require('https')

;(async () => {
    try {
        // Inputs
        const url = core.getInput('url', { required: true })
        console.log('url:', url)
        const method = core.getInput('method', { required: true })
        console.log('method:', method)
        let data = JSON.parse(core.getInput('data'))
        console.log('data:', data)
        const headers = JSON.parse(core.getInput('headers'))
        console.log('headers:', headers)
        const params = JSON.parse(core.getInput('params'))
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
        // console.log('response:', response)
        // console.log('response.request._headers:', response.request._headers)
        // console.log('response.headers:', response.headers)
        console.log('response.status:', response.status)
        console.log('response.data:', response.data)

        // Outputs
        core.setOutput('status', response.status)
        core.setOutput('data', response.data)

        core.info(`\u001b[32;1mFinished Success`)
    } catch (e) {
        core.debug(e)
        core.info(e.message)
        core.setFailed(e.message)
    }
})()
