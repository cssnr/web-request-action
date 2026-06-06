[![GitHub Tag Major](https://img.shields.io/github/v/tag/cssnr/web-request-action?sort=semver&filter=!v*.*&logo=git&logoColor=white&labelColor=585858&label=%20)](https://github.com/cssnr/web-request-action/tags)
[![GitHub Tag Minor](https://img.shields.io/github/v/tag/cssnr/web-request-action?sort=semver&filter=!v*.*.*&logo=git&logoColor=white&labelColor=585858&label=%20)](https://github.com/cssnr/web-request-action/releases)
[![GitHub Release Version](https://img.shields.io/github/v/release/cssnr/web-request-action?logo=git&logoColor=white&labelColor=585858&label=%20)](https://github.com/cssnr/web-request-action/releases/latest)
[![GitHub Dist Size](https://img.shields.io/github/size/cssnr/web-request-action/dist%2Findex.js?branch=release&logo=bookstack&logoColor=white&label=dist)](https://github.com/cssnr/web-request-action/tree/release)
[![Action Run Using](https://img.shields.io/badge/dynamic/yaml?url=https%3A%2F%2Fraw.githubusercontent.com%2Fcssnr%2Fweb-request-action%2Frefs%2Fheads%2Fmaster%2Faction.yml&query=%24.runs.using&logo=githubactions&logoColor=white&label=runs)](https://github.com/cssnr/actionlint-action/blob/master/action.yml)
[![Workflow Release](https://img.shields.io/github/actions/workflow/status/cssnr/web-request-action/release.yaml?logo=norton&logoColor=white&label=release)](https://github.com/cssnr/web-request-action/actions/workflows/release.yaml)
[![Workflow Test](https://img.shields.io/github/actions/workflow/status/cssnr/web-request-action/test.yaml?logo=norton&logoColor=white&label=test)](https://github.com/cssnr/web-request-action/actions/workflows/test.yaml)
[![Workflow Lint](https://img.shields.io/github/actions/workflow/status/cssnr/web-request-action/lint.yaml?logo=norton&logoColor=white&label=lint)](https://github.com/cssnr/web-request-action/actions/workflows/lint.yaml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=cssnr_web-request-action&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=cssnr_web-request-action)
[![GitHub Last Commit](https://img.shields.io/github/last-commit/cssnr/web-request-action?logo=github&label=updated)](https://github.com/cssnr/web-request-action)
[![Codeberg Last Commit](https://img.shields.io/gitea/last-commit/cssnr/web-request-action/master?gitea_url=https%3A%2F%2Fcodeberg.org%2F&logo=codeberg&logoColor=white&label=updated)](https://codeberg.org/cssnr/web-request-action)
[![GitHub Repo Size](https://img.shields.io/github/repo-size/cssnr/web-request-action?logo=buffer&label=repo%20size)](https://github.com/cssnr/web-request-action?tab=readme-ov-file#readme)
[![GitHub Top Language](https://img.shields.io/github/languages/top/cssnr/web-request-action?logo=devbox)](https://github.com/cssnr/web-request-action?tab=readme-ov-file#readme)
[![GitHub Contributors](https://img.shields.io/github/contributors-anon/cssnr/web-request-action?logo=southwestairlines)](https://github.com/cssnr/web-request-action/graphs/contributors)
[![GitHub Issues](https://img.shields.io/github/issues/cssnr/web-request-action?logo=codeforces&logoColor=white)](https://github.com/cssnr/web-request-action/issues)
[![GitHub Discussions](https://img.shields.io/github/discussions/cssnr/web-request-action?logo=livechat&logoColor=white)](https://github.com/cssnr/web-request-action/discussions)
[![GitHub Forks](https://img.shields.io/github/forks/cssnr/web-request-action?style=flat&logo=forgejo&logoColor=white)](https://github.com/cssnr/web-request-action/forks)
[![GitHub Repo Stars](https://img.shields.io/github/stars/cssnr/web-request-action?style=flat&logo=gleam&logoColor=white)](https://github.com/cssnr/web-request-action/stargazers)
[![GitHub Org Stars](https://img.shields.io/github/stars/cssnr?style=flat&logo=apachespark&logoColor=white&label=org%20stars)](https://cssnr.github.io/)
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
  uses: cssnr/web-request-action@v2
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
    config: |
      timeout: 1000
    username: ${{ secrets.USERNAME }}
    password: ${{ secrets.PASSWORD }}
    insecure: false
    file: path/to/file.txt
    name: file
    filename: custom-name.txt
```

> [!NOTE]  
> Please submit a [Feature Request](https://github.com/cssnr/web-request-action/discussions/categories/feature-requests)
> for new features or [Open an Issue](https://github.com/cssnr/web-request-action/issues) if you find any bugs.

> [!WARNING]  
> This action no longer works on the `master` branch.  
> The `latest` tag is also being sunset very soon.  
> If you need a rolling tag use the [@release](https://github.com/cssnr/web-request-action/tree/release) branch.

## Inputs

| Input    | Default&nbsp;Value | Description&nbsp;of&nbsp;the&nbsp;Input&nbsp;Value |
| :------- | :----------------- | :------------------------------------------------- |
| url      | _Required_         | URL for Request [⤵️](#url)                         |
| method   | `POST`             | Request Method [⤵️](#method)                       |
| data     | -                  | Request Data JSON/YAML [⤵️](#data)                 |
| headers  | -                  | Request Headers JSON/YAML [⤵️](#headers)           |
| params   | -                  | Request Parameters JSON/YAML [⤵️](#params)         |
| config   | -                  | Axios Config JSON/YAML [⤵️](#config)               |
| username | -                  | Basic Auth Username                                |
| password | -                  | Basic Auth Password                                |
| insecure | `false`            | Ignore SSL Errors                                  |
| file     | -                  | File Path to Send [⤵️](#file)                      |
| name     | `file`             | File Form Key Name                                 |
| filename | _Original Name_    | Set a Different File Name                          |
| path     | -                  | Parse a JSON Path result                           |

### url

The URL to send the request too. You may include params here or in the [params](#params) key.

### method

The request method, including custom methods. Case-insensitive.

Default: `POST`

### data

Body JSON/YAML data. Only used for `PUT`, `POST`, `DELETE`, and `PATCH`.

Data is parsed with `JSON.parse` or `yaml.load`, [js-yaml](https://github.com/nodeca/js-yaml).

<details><summary>View JSON/YAML Example</summary>

This format works for `data`, `headers`, `params`, and `config`.

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

```yaml
data: '{"key1": "value1", "key2": "value2"}'
```

Note: All these examples are identical.

</details>

### headers

Headers JSON/YAML data.

### params

Parameters (Query String) JSON/YAML data. These may also be provided in the [url](#url).

### config

Additional Axios Config JSON/YAML data. For example, set a 3-second timeout: `timeout: 3000`

Reference: https://axios-http.com/docs/req_config

<details><summary>Note: The config is spread last and overrides other keys.</summary>

```javascript
config = { url, method, headers, params, data, auth, httpsAgent, ...config }
```

</details>

### file

When sending a file, `multipart/form-data` wil be used and `data` will be added to the form data with the
key `name`. The file path is relative to the workspace/working directory.

For more information on inputs, see: https://axios-http.com/docs/req_config

See the [Examples](#examples) for more usage options...

## Outputs

| Output  | Description      |
| :------ | :--------------- |
| status  | Response Status  |
| headers | Response Headers |
| data    | Response Data    |
| result  | JSON Path Result |

Note: All outputs are run through `JSON.stringify` by default.

```yaml
- name: 'Web Request'
  id: test
  uses: cssnr/web-request-action@v2
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

<details open><summary>Trigger a Webhook</summary>

```yaml
- name: 'Portainer Webhook'
  uses: cssnr/web-request-action@v2
  with:
    url: ${{ secrets.PORTAINER_WEBHOOK }}
```

</details>
<details open><summary>Start Algolia Crawl</summary>

```yaml
- name: 'Start Algolia Crawl'
  uses: cssnr/web-request-action@v2
  with:
    url: https://crawler.algolia.com/api/1/crawlers/${{ secrets.CRAWLER_ID }}/reindex
    username: ${{ secrets.CRAWLER_USER_ID }}
    password: ${{ secrets.CRAWLER_API_KEY }}
```

</details>
<details open><summary>Deploy to Render</summary>

```yaml
- name: 'Render Deploy Image'
  uses: cssnr/web-request-action@v2
  with:
    url: ${{ secrets.RENDER_HOOK }}
    params: |
      imgURL: ghcr.io/${{ github.repository }}:${{ github.ref_name }}
```

</details>
<details><summary>Make a GET Request</summary>

```yaml
- name: 'Web Request'
  uses: cssnr/web-request-action@v2
  with:
    url: https://httpbin.org/get
    method: 'GET'
```

</details>
<details><summary>Send Data</summary>

```yaml
- name: 'Web Request'
  uses: cssnr/web-request-action@v2
  with:
    url: https://httpbin.org/post
    data: '{"key": "value"}'
    data: |
      '{"key": "value"}'
    data: |
      key: value
```

Note: All data keys are identical as exemplar formats.

</details>
<details><summary>Send File</summary>

```yaml
- name: 'Web Request'
  uses: cssnr/web-request-action@v2
  with:
    url: https://httpbin.org/post
    file: path/to/file.txt
    name: file # Default - name of file key
    filename: name.txt # Optional - file name
```

</details>
<details><summary>Set Axios Config</summary>

```yaml
- name: 'Web Request'
  uses: cssnr/web-request-action@v2
  with:
    url: https://httpbin.org/post
    config: |
      timeout: 1000
      maxContentLength: 2000
```

Reference: https://axios-http.com/docs/req_config

</details>
<details><summary>All Inputs</summary>

```yaml
- name: 'Web Request'
  uses: cssnr/web-request-action@v2
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
    config: |
      timeout: 5000
    username: ${{ secrets.USERNAME }}
    password: ${{ secrets.PASSWORD }}
    insecure: false
    file: path/to/file.txt
    name: file
    filename: name.txt
```

</details>

For more examples, you can check out other projects using this action:  
https://github.com/cssnr/web-request-action/network/dependents

## Tags

The following rolling [tags](https://github.com/cssnr/web-request-action/tags) are maintained.

| Version&nbsp;Tag                                                                                                                                                                                                     | Rolling | Bugs | Feat. |   Name    |  Target  | Example  |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-----: | :--: | :---: | :-------: | :------: | :------- |
| [![GitHub Tag Major](https://img.shields.io/github/v/tag/cssnr/web-request-action?sort=semver&filter=!v*.*&style=for-the-badge&label=%20&color=44cc10)](https://github.com/cssnr/web-request-action/releases/latest) |   ✅    |  ✅  |  ✅   | **Major** | `vN.x.x` | `vN`     |
| [![GitHub Tag Minor](https://img.shields.io/github/v/tag/cssnr/web-request-action?sort=semver&filter=!v*.*.*&style=for-the-badge&label=%20&color=blue)](https://github.com/cssnr/web-request-action/releases/latest) |   ✅    |  ✅  |  ❌   | **Minor** | `vN.N.x` | `vN.N`   |
| [![GitHub Release](https://img.shields.io/github/v/release/cssnr/web-request-action?style=for-the-badge&label=%20&color=red)](https://github.com/cssnr/web-request-action/releases/latest)                           |   ❌    |  ❌  |  ❌   | **Micro** | `vN.N.N` | `vN.N.N` |

You can view the release notes for each version on the [releases](https://github.com/cssnr/web-request-action/releases) page.

The **Major** tag is recommended. It is the most up-to-date and always backwards compatible.
Breaking changes would result in a **Major** version bump. At a minimum you should use a **Minor** tag.

# Support

If you run into any issues or need help getting started, please do one of the following:

- [Report an Issue](https://github.com/cssnr/web-request-action/issues)
- [Q&A Discussion](https://github.com/cssnr/web-request-action/discussions/categories/q-a)
- [Request a Feature](https://github.com/cssnr/web-request-action/issues/new?template=1-feature.yaml)
- [Chat with us on Discord](https://discord.gg/wXy6m2X8wY)

[![Features](https://img.shields.io/badge/features-brightgreen?style=for-the-badge&logo=rocket&logoColor=white)](https://github.com/cssnr/web-request-action/issues/new?template=1-feature.yaml)
[![Issues](https://img.shields.io/badge/issues-red?style=for-the-badge&logo=southwestairlines&logoColor=white)](https://github.com/cssnr/web-request-action/issues)
[![Discussions](https://img.shields.io/badge/discussions-blue?style=for-the-badge&logo=livechat&logoColor=white)](https://github.com/cssnr/web-request-action/discussions)
[![Discord](https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/wXy6m2X8wY)

# Contributing

If you would like to submit a PR, please review the [CONTRIBUTING.md](#contributing-ov-file).

Please consider making a donation to support the development of this project
and [additional](https://cssnr.com/) open source projects.

[![Ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/cssnr)

[![Actions Tools](https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/actions/actions-tools.png)](https://actions-tools.cssnr.com/)

Additionally, you can support other [GitHub Actions](https://actions.cssnr.com/) I have published:

- [Stack Deploy Action](https://github.com/cssnr/stack-deploy-action?tab=readme-ov-file#readme)
- [Portainer Stack Deploy Action](https://github.com/cssnr/portainer-stack-deploy-action?tab=readme-ov-file#readme)
- [Docker Context Action](https://github.com/cssnr/docker-context-action?tab=readme-ov-file#readme)
- [AI Issue Action](https://github.com/cssnr/ai-issue-action?tab=readme-ov-file#readme)
- [Actions Up Action](https://github.com/cssnr/actions-up-action?tab=readme-ov-file#readme)
- [Webstore Publish Action](https://github.com/cssnr/webstore-publish-action?tab=readme-ov-file#readme)
- [Rhysd Actionlint Action](https://github.com/cssnr/actionlint-action?tab=readme-ov-file#readme)
- [Zensical Action](https://github.com/cssnr/zensical-action?tab=readme-ov-file#readme)
- [VirusTotal Action](https://github.com/cssnr/virustotal-action?tab=readme-ov-file#readme)
- [Homebrew Action](https://github.com/cssnr/homebrew-action?tab=readme-ov-file#readme)
- [Mirror Repository Action](https://github.com/cssnr/mirror-repository-action?tab=readme-ov-file#readme)
- [Update Version Tags Action](https://github.com/cssnr/update-version-tags-action?tab=readme-ov-file#readme)
- [Docker Tags Action](https://github.com/cssnr/docker-tags-action?tab=readme-ov-file#readme)
- [TOML Action](https://github.com/cssnr/toml-action?tab=readme-ov-file#readme)
- [Update JSON Value Action](https://github.com/cssnr/update-json-value-action?tab=readme-ov-file#readme)
- [JSON Key Value Check Action](https://github.com/cssnr/json-key-value-check-action?tab=readme-ov-file#readme)
- [Parse Issue Form Action](https://github.com/cssnr/parse-issue-form-action?tab=readme-ov-file#readme)
- [Cloudflare Purge Cache Action](https://github.com/cssnr/cloudflare-purge-cache-action?tab=readme-ov-file#readme)
- [Mozilla Addon Update Action](https://github.com/cssnr/mozilla-addon-update-action?tab=readme-ov-file#readme)
- [Package Changelog Action](https://github.com/cssnr/package-changelog-action?tab=readme-ov-file#readme)
- [NPM Outdated Check Action](https://github.com/cssnr/npm-outdated-action?tab=readme-ov-file#readme)
- [Label Creator Action](https://github.com/cssnr/label-creator-action?tab=readme-ov-file#readme)
- [Algolia Crawler Action](https://github.com/cssnr/algolia-crawler-action?tab=readme-ov-file#readme)
- [Create Pull Action](https://github.com/cssnr/create-pull-action?tab=readme-ov-file#readme)
- [Upload Release Action](https://github.com/cssnr/upload-release-action?tab=readme-ov-file#readme)
- [Check Build Action](https://github.com/cssnr/check-build-action?tab=readme-ov-file#readme)
- [Web Request Action](https://github.com/cssnr/web-request-action?tab=readme-ov-file#readme)
- [Get Commit Action](https://github.com/cssnr/get-commit-action?tab=readme-ov-file#readme)

<details><summary>❔ Unpublished Actions</summary>

These actions are not published on the Marketplace, but may be useful.

- [cssnr/create-files-action](https://github.com/cssnr/create-files-action?tab=readme-ov-file#readme) - Create various files from templates.
- [cssnr/draft-release-action](https://github.com/cssnr/draft-release-action?tab=readme-ov-file#readme) - Keep a draft release ready to publish.
- [cssnr/env-json-action](https://github.com/cssnr/env-json-action?tab=readme-ov-file#readme) - Convert env file to json or vice versa.
- [cssnr/push-artifacts-action](https://github.com/cssnr/push-artifacts-action?tab=readme-ov-file#readme) - Sync files to a remote host with rsync.
- [smashedr/update-release-notes-action](https://github.com/smashedr/update-release-notes-action?tab=readme-ov-file#readme) - Update release notes.
- [smashedr/combine-release-notes-action](https://github.com/smashedr/combine-release-notes-action?tab=readme-ov-file#readme) - Combine release notes.
- [smashedr/openai-translate-action](https://github.com/smashedr/openai-translate-action?tab=readme-ov-file#readme) - OpenAI translate action.

---

</details>

<details><summary>📝 Template Actions</summary>

These are basic action templates that I use for creating new actions.

- [javascript-action](https://github.com/smashedr/javascript-action?tab=readme-ov-file#readme) - JavaScript
- [typescript-action](https://github.com/smashedr/typescript-action?tab=readme-ov-file#readme) - TypeScript
- [py-test-action](https://github.com/smashedr/py-test-action?tab=readme-ov-file#readme) - Dockerfile Python
- [test-action-uv](https://github.com/smashedr/test-action-uv?tab=readme-ov-file#readme) - Dockerfile Python UV
- [docker-test-action](https://github.com/smashedr/docker-test-action?tab=readme-ov-file#readme) - Docker Image Python

Note: The `docker-test-action` builds, runs and pushes images to [GitHub Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry).

---

</details>

For a full list of current projects visit: [https://cssnr.github.io/](https://cssnr.github.io/)

<a href="https://github.com/cssnr/web-request-action">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=cssnr/web-request-action&type=date&legend=bottom-right&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=cssnr/web-request-action&type=date&legend=bottom-right" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=cssnr/web-request-action&type=date&legend=bottom-right" />
 </picture>
</a>
