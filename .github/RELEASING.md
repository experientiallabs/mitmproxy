# Experiential fork releases

GitHub Actions `main.yml` builds and tests pull requests and main without publishing.
A protected `exp-v<version>` tag reachable from main publishes the tested
`exp-mitmproxy` distributions through the `pypi` environment.
The tag must equal the Python package version prefixed with `exp-v`.
Manual workflow runs are build-only.

Configure the existing PyPI project with a GitHub trusted publisher:
owner `experientiallabs`, repository `mitmproxy`, workflow `main.yml`, environment `pypi`.
Only the publish job receives `id-token: write`. It uploads build artifacts
without checking out or executing package source. Existing filenames are skipped.
Protect `exp-v*` tag creation, updates, and deletion, and restrict the `pypi`
environment to those protected tags before creating a release tag.

## Upstream reference

# Publishing the Capture proxy package

This fork publishes `exp-mitmproxy`. Its Python import remains `mitmproxy`.
Publish its required `exp-mitmproxy-rs` version first.

Configure a pending trusted publisher at <https://pypi.org/manage/account/publishing/>:

- Project: `exp-mitmproxy`
- Owner: `experientiallabs`
- Repository: `mitmproxy`
- Workflow: `main.yml`
- Environment: `pypi`

The GitHub repository needs an environment named `pypi`. No long-lived API token
is needed. The workflow publishes only `exp-v*` tags whose version matches
`pyproject.toml`, after tests and package builds pass on macOS, Linux, and Windows.
Pull requests and branch pushes cannot publish. The release uploads the Linux job's
platform-independent wheel and source archive, with publishing attestations.

For version `12.2.3.post1`, tag the intended tested commit and push that tag:

```sh
git tag exp-v12.2.3.post1 <commit>
git push experiential exp-v12.2.3.post1
```

Verify a clean Python 3.13 installation resolves both packages from PyPI before
releasing Experiential. Never replace a published version; use a new post-release
version for changes.
