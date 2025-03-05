[![Release](https://img.shields.io/github/actions/workflow/status/cssnr/web-request-action/release.yaml?logo=github&logoColor=white&label=release)](https://github.com/cssnr/web-request-action/actions/workflows/release.yaml)
[![Test](https://img.shields.io/github/actions/workflow/status/cssnr/web-request-action/test.yaml?logo=github&logoColor=white&label=test)](https://github.com/cssnr/web-request-action/actions/workflows/test.yaml)
[![Lint](https://img.shields.io/github/actions/workflow/status/cssnr/web-request-action/lint.yaml?logo=github&logoColor=white&label=lint)](https://github.com/cssnr/web-request-action/actions/workflows/lint.yaml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=cssnr_web-request-action&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=cssnr_web-request-action)
[![GitHub Release Version](https://img.shields.io/github/v/release/cssnr/web-request-action?logo=github)](https://github.com/cssnr/web-request-action/releases/latest)
[![GitHub Last Commit](https://img.shields.io/github/last-commit/cssnr/web-request-action?logo=github&logoColor=white&label=updated)](https://github.com/cssnr/web-request-action/graphs/commit-activity)
[![Codeberg Last Commit](https://img.shields.io/gitea/last-commit/cssnr/web-request-action/master?gitea_url=https%3A%2F%2Fcodeberg.org%2F&logo=codeberg&logoColor=white&label=updated)](https://codeberg.org/cssnr/web-request-action)
[![GitHub Top Language](https://img.shields.io/github/languages/top/cssnr/web-request-action?logo=htmx&logoColor=white)](https://github.com/cssnr/web-request-action)
[![GitHub Org Stars](https://img.shields.io/github/stars/cssnr?style=flat&logo=github&logoColor=white)](https://cssnr.github.io/)
[![Discord](https://img.shields.io/discord/899171661457293343?logo=discord&logoColor=white&label=discord&color=7289da)](https://discord.gg/wXy6m2X8wY)

# Web Request Action

- [Inputs](#Inputs)
- [Outputs](#Outputs)
- [Examples](#Examples)
- [Support](#Support)
- [Contributing](#Contributing)

> [!NOTE]  
> Please submit a [Feature Request](https://github.com/cssnr/web-request-action/discussions/categories/feature-requests)
> for new features or [Open an Issue](https://github.com/cssnr/web-request-action/issues) if you find any bugs.

## Inputs

| input    | required | default | description                |
| -------- | :------: | ------- | -------------------------- |
| url      | **Yes**  | -       | URL for Request            |
| method   |    -     | `POST`  | Request Method             |
| data     |    -     | -       | Request Data JSON \*       |
| headers  |    -     | -       | Request Headers JSON       |
| params   |    -     | -       | Request Parameters JSON \* |
| username |    -     | -       | Basic Auth Username        |
| password |    -     | -       | Basic Auth Password        |
| insecure |    -     | `false` | Ignore SSL Errors          |
| file     |    -     | -       | File Path to Send \*       |
| name     |    -     | `file`  | File Form Key Name         |

**data** - Only used for `PUT`, `POST`, `DELETE`, and `PATCH`. Data is parsed with `JSON.parse`.

**params** - These can be specified in the URL or added here as JSON key/value pairs.

**file** - When sending a file, `multipart/form-data` wil be used and `data` will be added to the form data with the
key `name`. The file path is relative to the workspace/working directory.

For more information on inputs, see: https://axios-http.com/docs/req_config

```yaml
- name: 'Web Request'
  uses: cssnr/web-request-action@v1
  with:
    url: https://httpbin.org/post
```

## Outputs

| output | description     |
| ------ | --------------- |
| status | Response Status |
| data   | Response Data   |

```yaml
- name: 'Web Request'
  id: test
  uses: cssnr/web-request-action@v1
  with:
    url: https://httpbin.org/post

- name: 'Echo Output'
  run: |
    echo '${{ steps.test.outputs.status }}'
    echo '${{ steps.test.outputs.data }}'
```

## Examples

Make a GET Request:

```yaml
- name: 'Web Request'
  uses: cssnr/web-request-action@v1
  with:
    url: https://httpbin.org/get
    method: 'GET'
```

Send Data:

```yaml
- name: 'Web Request'
  uses: cssnr/web-request-action@v1
  with:
    url: https://httpbin.org/post
    data: '{"key": "value"}'
```

Send File:

```yaml
- name: 'Web Request'
  uses: cssnr/web-request-action@v1
  with:
    url: https://httpbin.org/post
    file: path/to/file.txt
```

All Inputs:

```yaml
- name: 'Web Request'
  uses: cssnr/web-request-action@v1
  with:
    url: https://httpbin.org/post
    method: 'POST'
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
- Provide General Feedback: [https://cssnr.github.io/feedback/](https://cssnr.github.io/feedback/?app=Web%20Request%20Action)

# Contributing

Currently, the best way to contribute to this project is to star this project on GitHub.

Additionally, you can support other GitHub Actions I have published:

- [Stack Deploy Action](https://github.com/cssnr/stack-deploy-action?tab=readme-ov-file#readme)
- [Portainer Stack Deploy](https://github.com/cssnr/portainer-stack-deploy-action?tab=readme-ov-file#readme)
- [VirusTotal Action](https://github.com/cssnr/virustotal-action?tab=readme-ov-file#readme)
- [Mirror Repository Action](https://github.com/cssnr/mirror-repository-action?tab=readme-ov-file#readme)
- [Update Version Tags Action](https://github.com/cssnr/update-version-tags-action?tab=readme-ov-file#readme)
- [Update JSON Value Action](https://github.com/cssnr/update-json-value-action?tab=readme-ov-file#readme)
- [Parse Issue Form Action](https://github.com/cssnr/parse-issue-form-action?tab=readme-ov-file#readme)
- [Cloudflare Purge Cache Action](https://github.com/cssnr/cloudflare-purge-cache-action?tab=readme-ov-file#readme)
- [Mozilla Addon Update Action](https://github.com/cssnr/mozilla-addon-update-action?tab=readme-ov-file#readme)
- [Docker Tags Action](https://github.com/cssnr/docker-tags-action?tab=readme-ov-file#readme)

For a full list of current projects to support visit: [https://cssnr.github.io/](https://cssnr.github.io/)
