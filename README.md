Spectacle Editor Documentation Site
======================

[![Build Status](https://travis-ci.org/FormidableLabs/spectacle-editor-docs.svg?branch=master)](https://travis-ci.org/FormidableLabs/spectacle-editor-docs)

[Check out the wiki](https://github.com/FormidableLabs/formidable-landers/wiki)

## Publishing

To release this lander, please follow the [archetype release instructions](https://github.com/FormidableLabs/builder-docs-archetype#lander-release) for our `npm version` workflow.

When publishing, please make sure to install and use `npm@5.6.0` to preserve
file timestamp metadata as it is required for our overall website build and
versions subsequent to `5.6.0` intentionally destroy this metadata:

```sh
$ npm install -g npm@5.6.0
$ npm --version
5.6.0
```
