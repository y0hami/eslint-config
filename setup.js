#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

// get the projects package.json
const pkgPath = path.resolve(process.cwd(), 'package.json')
const pkg = require(pkgPath)

// get the peer deps we need to add
const peers = require('./package.json').peerDependencies

// add the peer deps to the projects package.json
Object.keys(peers).forEach(dep => {
  const version = peers[dep]
  pkg.devDependencies[dep] = version
})

// sort the deps a-z
const deps = Object.assign({}, pkg.devDependencies)
pkg.devDependencies = {}
Object.keys(deps)
  .sort()
  .forEach(dep => {
    const version = deps[dep]
    pkg.devDependencies[dep] = version
  })

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2))

// create the .eslintrc file
const eslintrcPath = path.resolve(process.cwd(), '.eslintrc.json')
const eslintrcTemplate = require('./eslintrc.template.json')
fs.writeFileSync(eslintrcPath, JSON.stringify(eslintrcTemplate, null, 2))
