# script-reference-api

This is the official repository for our JSON API generator used for [https://github.com/Raid-Gaming/script-reference](https://github.com/Raid-Gaming/script-reference).

---

## Structure

The project follows a fairly basic structure:

- categories
  - metadata (index.json)
  - namespaces
    - methods

Based on this structure the build process will generate index files you can use to either query the entire API index or individually query namespaces.

## Requirements

This project uses the Node package manager "Yarn". You'll need it to install the necessary dependencies (mixing up package manager is advised against so unless you know what you're doing, avoid npm and stick to Yarn).

Instructions on how to install Yarn can be found on the official website: [https://yarnpkg.com/](https://yarnpkg.com/)

## Building

First install all project dependencies using:

```bash
yarn
```

Then run:

```bash
yarn build
```

The build output can then be found in the `dist` folder.

## Why a JSON API?

The answer is actually fairly simple: It doesn't require a backend. JSON files can be directly served along with your HTML/CSS/JS and consumed in your application as-is. This is a purely read-only API with no intentions of adding support for CRUD operations, hence we don't have a need for anything more complex.
