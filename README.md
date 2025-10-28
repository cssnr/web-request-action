[![GitHub Tag Major](https://img.shields.io/github/v/tag/cssnr/web-request-action?sort=semver&filter=!v*.*&logo=git&logoColor=white&labelColor=585858&label=%20)](https://github.com/cssnr/web-request-action/tags)
[![GitHub Tag Minor](https://img.shields.io/github/v/tag/cssnr/web-request-action?sort=semver&filter=!v*.*.*&logo=git&logoColor=white&labelColor=585858&label=%20)](https://github.com/cssnr/web-request-action/releases)
[![GitHub Release Version](https://img.shields.io/github/v/release/cssnr/web-request-action?logo=git&logoColor=white&labelColor=585858&label=%20)](https://github.com/cssnr/web-request-action/releases/latest)
[![GitHub Dist Size](https://img.shields.io/github/size/cssnr/web-request-action/dist%2Findex.js?logo=bookstack&logoColor=white&label=dist%20size)](https://github.com/cssnr/web-request-action/blob/master/src/index.js)
[![Workflow Release](https://img.shields.io/github/actions/workflow/status/cssnr/web-request-action/release.yaml?logo=cachet&label=release)](https://github.com/cssnr/web-request-action/actions/workflows/release.yaml)
[![Workflow Test](https://img.shields.io/github/actions/workflow/status/cssnr/web-request-action/test.yaml?logo=cachet&label=test)](https://github.com/cssnr/web-request-action/actions/workflows/test.yaml)
[![Workflow Lint](https://img.shields.io/github/actions/workflow/status/cssnr/web-request-action/lint.yaml?logo=cachet&label=lint)](https://github.com/cssnr/web-request-action/actions/workflows/lint.yaml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=cssnr_web-request-action&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=cssnr_web-request-action)
[![GitHub Last Commit](https://img.shields.io/github/last-commit/cssnr/web-request-action?logo=github&label=updated)](https://github.com/cssnr/web-request-action/pulse)
[![Codeberg Last Commit](https://img.shields.io/gitea/last-commit/cssnr/web-request-action/master?gitea_url=https%3A%2F%2Fcodeberg.org%2F&logo=codeberg&logoColor=white&label=updated)](https://codeberg.org/cssnr/web-request-action)
[![GitHub Contributors](https://img.shields.io/github/contributors-anon/cssnr/web-request-action?logo=github)](https://github.com/cssnr/web-request-action/graphs/contributors)
[![GitHub Repo Size](https://img.shields.io/github/repo-size/cssnr/web-request-action?logo=bookstack&logoColor=white&label=repo%20size)](https://github.com/cssnr/web-request-action?tab=readme-ov-file#readme)
[![GitHub Top Language](https://img.shields.io/github/languages/top/cssnr/web-request-action?logo=htmx)](https://github.com/cssnr/web-request-action)
[![GitHub Forks](https://img.shields.io/github/forks/cssnr/web-request-action?style=flat&logo=github)](https://github.com/cssnr/web-request-action/forks)
[![GitHub Discussions](https://img.shields.io/github/discussions/cssnr/web-request-action?logo=github)](https://github.com/cssnr/web-request-action/discussions)
[![GitHub Repo Stars](https://img.shields.io/github/stars/cssnr/web-request-action?style=flat&logo=github)](https://github.com/cssnr/web-request-action/stargazers)
[![GitHub Org Stars](https://img.shields.io/github/stars/cssnr?style=flat&logo=github&label=org%20stars)](https://cssnr.github.io/)
[![Discord](https://img.shields.io/discord/899171661457293343?logo=discord&logoColor=white&label=discord&color=7289da)](https://discord.gg/wXy6m2X8wY)
[![Ko-fi](https://img.shields.io/badge/Ko--fi-72a5f2?logo=kofi&label=support)](https://ko-fi.com/cssnr)

# Web Request Action

- [Inputs](#Inputs)
- [Outputs](#Outputs)
- [Examples](#Examples)
- [Tags](#Tags)
- [Support](#Support)
- [Contributing](#Contributing)

Easily make a web request from a workflow using Axios.
Supports all methods, uploading files, basic authentication and more.
Pass data/headers/params as JSON or YAML formatted strings.

```yaml
- name: 'Web Request'
  uses: cssnr/web-request-action@v1
  with:
    url: https://httpbin.org/post
    method: 'POST'
    data: '{"key": "value"}'
    headers: |
      key: value
    params: |
      {
        "key": "value"
      }
    username: ${{ secrets.USERNAME }}
    password: ${{ secrets.PASSWORD }}
    insecure: false
    file: path/to/file.txt
    name: file
```

> [!NOTE]  
> Please submit a [Feature Request](https://github.com/cssnr/web-request-action/discussions/categories/feature-requests)
> for new features or [Open an Issue](https://github.com/cssnr/web-request-action/issues) if you find any bugs.

## Inputs

| Input    | Default    | Description&nbsp;of&nbsp;the&nbsp;Input&nbsp;Value |
| :------- | :--------- | :------------------------------------------------- |
| url      | _Required_ | URL for Request [⤵️](#url)                         |
| method   | `POST`     | Request Method [⤵️](#method)                       |
| data     | -          | Request Data JSON/YAML [⤵️](#data)                 |
| headers  | -          | Request Headers JSON/YAML [⤵️](#headers)           |
| params   | -          | Request Parameters JSON/YAML [⤵️](#params)         |
| username | -          | Basic Auth Username                                |
| password | -          | Basic Auth Password                                |
| insecure | `false`    | Ignore SSL Errors                                  |
| file     | -          | File Path to Send [⤵️](#file)                      |
| name     | `file`     | File Form Key Name                                 |

### url

The URL to send the request too. You may include params here or in the [params](#params) key.

### method

The request method, including custom methods.

Default: `POST`

### data

Body JSON or YAML data. Only used for `PUT`, `POST`, `DELETE`, and `PATCH`.

Data is parsed with `JSON.parse` or `yaml.load`, [js-yaml](https://github.com/nodeca/js-yaml).

<details><summary>View Multi-Line JSON/YAML Example</summary>

```yaml
data: |
  key1: value1
  key2: value2
```

```yaml
data: |
  {
    "key1": "value1",
    "key2": "value2"
  }
```

</details>

### headers

Headers JSON or YAML data.

### params

Parameters, Query String, JSON or YAML data. These may also be provided in the [url](#url).

### file

When sending a file, `multipart/form-data` wil be used and `data` will be added to the form data with the
key `name`. The file path is relative to the workspace/working directory.

For more information on inputs, see: https://axios-http.com/docs/req_config

```yaml
- name: 'Web Request'
  uses: cssnr/web-request-action@v1
  with:
    url: https://httpbin.org/post
```

## Outputs

| Output  | Description      |
| :------ | :--------------- |
| status  | Response Status  |
| headers | Response Headers |
| data    | Response Data    |

```yaml
- name: 'Web Request'
  id: test
  uses: cssnr/web-request-action@v1
  with:
    url: https://httpbin.org/post

- name: 'Echo Output'
  run: |
    echo '${{ steps.test.outputs.status }}'
    echo '${{ steps.test.outputs.headers }}'
    echo '${{ steps.test.outputs.data }}'
```

## Examples

💡 _Click on an example heading to expand or collapse the example._

<details open><summary>Algolia Start Crawl</summary>

```yaml
- name: 'Algolia Start Crawl'
  uses: cssnr/web-request-action@v1
  with:
    url: https://crawler.algolia.com/api/1/crawlers/${{ secrets.CRAWLER_ID }}/reindex
    username: ${{ secrets.CRAWLER_USER_ID }}
    password: ${{ secrets.CRAWLER_API_KEY }}
```

</details>
<details open><summary>Deploy to Render</summary>

```yaml
- name: 'Render Deploy'
  uses: cssnr/web-request-action@v1
  with:
    url: ${{ secrets.RENDER_HOOK }}
    params: |
      imgURL: ghcr.io/${{ github.repository }}:${{ github.ref_name }}
```

</details>
<details><summary>Make a GET Request</summary>

```yaml
- name: 'Web Request'
  uses: cssnr/web-request-action@v1
  with:
    url: https://httpbin.org/get
    method: 'GET'
```

</details>
<details><summary>Send Data</summary>

```yaml
- name: 'Web Request'
  uses: cssnr/web-request-action@v1
  with:
    url: https://httpbin.org/post
    data: '{"key": "value"}'
```

</details>
<details><summary>Send File</summary>

```yaml
- name: 'Web Request'
  uses: cssnr/web-request-action@v1
  with:
    url: https://httpbin.org/post
    file: path/to/file.txt
    name: file # Default - name of file key
```

</details>
<details><summary>All Inputs</summary>

```yaml
- name: 'Web Request'
  uses: cssnr/web-request-action@v1
  with:
    url: https://httpbin.org/post
    method: 'POST'
    data: '{"key": "value"}'
    headers: |
      key: value
    params: |
      {
        "key": "value"
      }
    username: ${{ secrets.USERNAME }}
    password: ${{ secrets.PASSWORD }}
    insecure: false
    file: path/to/file.txt
    name: file
```

</details>

For more examples, you can check out other projects using this action:  
https://github.com/cssnr/web-request-action/network/dependents

## Tags

The following rolling [tags](https://github.com/cssnr/web-request-action/tags) are maintained.

| Tag                                                                                                                                                                                                                         | Example  | Target   | Bugs | Feat. | Description                                               |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- | :------- | :--: | :---: | :-------------------------------------------------------- |
| [![GitHub Tag Major](https://img.shields.io/github/v/tag/cssnr/web-request-action?sort=semver&filter=!v*.*&style=for-the-badge&label=%20&color=limegreen)](https://github.com/cssnr/web-request-action/releases/latest)     | `vN`     | `vN.x.x` |  ✅  |  ✅   | Includes new features but is always backwards compatible. |
| [![GitHub Tag Minor](https://img.shields.io/github/v/tag/cssnr/web-request-action?sort=semver&filter=!v*.*.*&style=for-the-badge&label=%20&color=yellowgreen)](https://github.com/cssnr/web-request-action/releases/latest) | `vN.N`   | `vN.N.x` |  ✅  |  ❌   | Only receives bug fixes. This is the most stable tag.     |
| [![GitHub Release](https://img.shields.io/github/v/release/cssnr/web-request-action?style=for-the-badge&label=%20&color=orange)](https://github.com/cssnr/web-request-action/releases/latest)                               | `vN.N.N` | `vN.N.N` |  ❌  |  ❌   | Not a rolling tag. **Not** recommended.                   |

You can view the release notes for each version on the [releases](https://github.com/cssnr/web-request-action/releases) page.

# Support

For general help or to request a feature, see:

- Q&A Discussion: https://github.com/cssnr/web-request-action/discussions/categories/q-a
- Request a Feature: https://github.com/cssnr/web-request-action/discussions/categories/feature-requests

If you are experiencing an issue/bug or getting unexpected results, you can:

- Report an Issue: https://github.com/cssnr/web-request-action/issues
- Chat with us on Discord: https://discord.gg/wXy6m2X8wY
- Provide General Feedback: [https://cssnr.github.io/feedback/](https://cssnr.github.io/feedback/?app=Web%20Request%20Action)

For more information, see the CSSNR [SUPPORT.md](https://github.com/cssnr/.github/blob/master/.github/SUPPORT.md#support).

# Contributing

If you would like to submit a PR, please review the [CONTRIBUTING.md](#contributing-ov-file).

Please consider making a donation to support the development of this project
and [additional](https://cssnr.com/) open source projects.

[![Ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/cssnr)

Additionally, you can support other GitHub Actions I have published:

- [Stack Deploy Action](https://github.com/cssnr/stack-deploy-action?tab=readme-ov-file#readme)
- [Portainer Stack Deploy Action](https://github.com/cssnr/portainer-stack-deploy-action?tab=readme-ov-file#readme)
- [Docker Context Action](https://github.com/cssnr/docker-context-action?tab=readme-ov-file#readme)
- [VirusTotal Action](https://github.com/cssnr/virustotal-action?tab=readme-ov-file#readme)
- [Mirror Repository Action](https://github.com/cssnr/mirror-repository-action?tab=readme-ov-file#readme)
- [Update Version Tags Action](https://github.com/cssnr/update-version-tags-action?tab=readme-ov-file#readme)
- [Docker Tags Action](https://github.com/cssnr/docker-tags-action?tab=readme-ov-file#readme)
- [Update JSON Value Action](https://github.com/cssnr/update-json-value-action?tab=readme-ov-file#readme)
- [JSON Key Value Check Action](https://github.com/cssnr/json-key-value-check-action?tab=readme-ov-file#readme)
- [Parse Issue Form Action](https://github.com/cssnr/parse-issue-form-action?tab=readme-ov-file#readme)
- [Cloudflare Purge Cache Action](https://github.com/cssnr/cloudflare-purge-cache-action?tab=readme-ov-file#readme)
- [Mozilla Addon Update Action](https://github.com/cssnr/mozilla-addon-update-action?tab=readme-ov-file#readme)
- [Package Changelog Action](https://github.com/cssnr/package-changelog-action?tab=readme-ov-file#readme)
- [NPM Outdated Check Action](https://github.com/cssnr/npm-outdated-action?tab=readme-ov-file#readme)
- [Label Creator Action](https://github.com/cssnr/label-creator-action?tab=readme-ov-file#readme)
- [Algolia Crawler Action](https://github.com/cssnr/algolia-crawler-action?tab=readme-ov-file#readme)
- [Upload Release Action](https://github.com/cssnr/upload-release-action?tab=readme-ov-file#readme)
- [Check Build Action](https://github.com/cssnr/check-build-action?tab=readme-ov-file#readme)
- [Web Request Action](https://github.com/cssnr/web-request-action?tab=readme-ov-file#readme)
- [Get Commit Action](https://github.com/cssnr/get-commit-action?tab=readme-ov-file#readme)

<details><summary>❔ Unpublished Actions</summary>

These actions are not published on the Marketplace, but may be useful.

- [cssnr/draft-release-action](https://github.com/cssnr/draft-release-action?tab=readme-ov-file#readme) - Keep a draft release ready to publish.
- [cssnr/env-json-action](https://github.com/cssnr/env-json-action?tab=readme-ov-file#readme) - Convert env file to json or vice versa.
- [cssnr/push-artifacts-action](https://github.com/cssnr/push-artifacts-action?tab=readme-ov-file#readme) - Sync files to a remote host with rsync.
- [smashedr/update-release-notes-action](https://github.com/smashedr/update-release-notes-action?tab=readme-ov-file#readme) - Update release notes.
- [smashedr/combine-release-notes-action](https://github.com/smashedr/combine-release-notes-action?tab=readme-ov-file#readme) - Combine release notes.

---

</details>

<details><summary>📝 Template Actions</summary>

These are basic action templates that I use for creating new actions.

- [js-test-action](https://github.com/smashedr/js-test-action?tab=readme-ov-file#readme) - JavaScript
- [py-test-action](https://github.com/smashedr/py-test-action?tab=readme-ov-file#readme) - Python
- [ts-test-action](https://github.com/smashedr/ts-test-action?tab=readme-ov-file#readme) - TypeScript
- [docker-test-action](https://github.com/smashedr/docker-test-action?tab=readme-ov-file#readme) - Docker Image

Note: The `docker-test-action` builds, runs and pushes images to [GitHub Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry).

---

</details>

For a full list of current projects to support visit: [https://cssnr.github.io/](https://cssnr.github.io/)
