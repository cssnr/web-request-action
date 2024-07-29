[![Tags](https://img.shields.io/github/actions/workflow/status/cssnr/web-request-action/tags.yaml?logo=github&logoColor=white&label=tags)](https://github.com/cssnr/web-request-action/actions/workflows/tags.yaml)
[![Test](https://img.shields.io/github/actions/workflow/status/cssnr/web-request-action/test.yaml?logo=github&logoColor=white&label=test)](https://github.com/cssnr/web-request-action/actions/workflows/test.yaml)
[![GitHub Release Version](https://img.shields.io/github/v/release/cssnr/web-request-action?logo=github)](https://github.com/cssnr/web-request-action/releases/latest)
[![GitHub Last Commit](https://img.shields.io/github/last-commit/cssnr/web-request-action?logo=github&logoColor=white&label=updated)](https://github.com/cssnr/web-request-action/graphs/commit-activity)
[![GitHub Top Language](https://img.shields.io/github/languages/top/cssnr/web-request-action?logo=htmx&logoColor=white)](https://github.com/cssnr/web-request-action)
[![GitHub Org Stars](https://img.shields.io/github/stars/cssnr?style=flat&logo=github&logoColor=white)](https://cssnr.github.io/)
[![Discord](https://img.shields.io/discord/899171661457293343?logo=discord&logoColor=white&label=discord&color=7289da)](https://discord.gg/wXy6m2X8wY)

# Web Request Action

* [Inputs](#Inputs)
* [Outputs](#Outputs)
* [Examples](#Examples)
* [Support](#Support)
* [Contributing](#Contributing)
* [Development](#Development)

> [!NOTE]  
> Please submit a [Feature Request](https://github.com/cssnr/web-request-action/discussions/categories/feature-requests)
> for new features or [Open an Issue](https://github.com/cssnr/web-request-action/issues) if you find any bugs.

## Inputs

| input    | required | default | description               |
|----------|----------|---------|---------------------------|
| url      | **Yes**  | -       | URL for Request           |
| method   | No       | `POST`  | Request Method            |
| data     | No       | -       | Request Data JSON *       |
| headers  | No       | -       | Request Headers JSON      |
| params   | No       | -       | Request Parameters JSON * |
| username | No       | -       | Basic Auth Username       |
| password | No       | -       | Basic Auth Password       |
| insecure | No       | `false` | Ignore SSL Errors         |
| file     | No       | -       | File Path to Send *       |
| name     | No       | `file`  | File Form Key Name        |

**data** - Only used for `PUT`, `POST`, `DELETE`, and `PATCH`. Data is parsed with `JSON.parse`.

**params** - These can be specified in the URL or added here as JSON key/value pairs.

**file** - When sending a file, `multipart/form-data` wil be used and `data` will be added to the form data with the
key `name`. The file path is relative to the workspace/working directory.

For more information on inputs, see: https://axios-http.com/docs/req_config

```yaml
  - name: "Web Request"
    uses: cssnr/web-request-action@master
    with:
      url: https://httpbin.org/post
```

## Outputs

| output | description     |
|--------|-----------------|
| status | Response Status |
| data   | Response Data   |

```yaml
  - name: "Web Request"
    id: test
    uses: cssnr/web-request-action@master
    with:
      url: https://httpbin.org/post

  - name: "Echo Output"
    run: |
      echo '${{ steps.test.outputs.status }}'
      echo '${{ steps.test.outputs.data }}'
```

## Examples

Make a GET Request:

```yaml
  - name: "Web Request"
    uses: cssnr/web-request-action@master
    with:
      url: https://httpbin.org/get
      method: 'GET''
```

Send Data:

```yaml
  - name: "Web Request"
    uses: cssnr/web-request-action@master
    with:
      url: https://httpbin.org/post
      data: '{"key": "value"}'
```

Send File:

```yaml
  - name: "Web Request"
    uses: cssnr/web-request-action@master
    with:
      url: https://httpbin.org/post
      file: path/to/file.txt
```

All Inputs:

```yaml
  - name: "Web Request"
    uses: cssnr/web-request-action@master
    with:
      url: https://httpbin.org/post
      method: "POST"
      data: '{"key": "value"}'
      headers: '{"header": "value"}'
      params: '{"parameter": "value"}'
      username: ${{ secrets.USERNAME }}
      password: ${{ secrets.PASSWORD }}
      insecure: false
      file: path/to/file.txt
      name: file
```

More Examples Coming Soon...

# Support

For general help or to request a feature, see:

- Q&A Discussion: https://github.com/cssnr/web-request-action/discussions/categories/q-a
- Request a Feature: https://github.com/cssnr/web-request-action/discussions/categories/feature-requests

If you are experiencing an issue/bug or getting unexpected results, you can:

- Report an Issue: https://github.com/cssnr/web-request-action/issues
- Chat with us on Discord: https://discord.gg/wXy6m2X8wY
- Provide General
  Feedback: [https://cssnr.github.io/feedback/](https://cssnr.github.io/feedback/?app=Web%20Request%20Action)

# Contributing

Currently, the best way to contribute to this project is to star this project on GitHub.

Additionally, you can support other GitHub Actions I have published:

- [VirusTotal Action](https://github.com/cssnr/virustotal-action)
- [Update Version Tags Action](https://github.com/cssnr/update-version-tags-action)
- [Update JSON Value Action](https://github.com/cssnr/update-json-value-action)
- [Parse Issue Form Action](https://github.com/cssnr/parse-issue-form-action)
- [Portainer Stack Deploy](https://github.com/cssnr/portainer-stack-deploy-action)
- [Mozilla Addon Update Action](https://github.com/cssnr/mozilla-addon-update-action)

For a full list of current projects to support visit: [https://cssnr.github.io/](https://cssnr.github.io/)

# Development

1. Install `act`: https://nektosact.com/installation/index.html
2. Run `npm run build:watch`
3. In another terminal, run `act -j test`

Alternatively, to run from source, change `main` in [action.yml](action.yml) to `src/index.js` and
run: `act -j test --use-gitignore=false`

For advanced using with things like secrets, variables and context see: https://nektosact.com/usage/index.html  
You should also review the options from `act --help`

Note, the `.env`, `.secrets` and `.vars` files are automatically sourced with no extra options.  
To source `event.json` you need to run act with `act -e event.json`
