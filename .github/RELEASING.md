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
