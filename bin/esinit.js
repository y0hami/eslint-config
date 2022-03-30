#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

// check whether to use the react config
const [,, ...args] = process.argv
const useReact = args.includes('--react')

// get the projects package.json
const pkgPath = path.resolve(process.cwd(), 'package.json')
const pkg = require(pkgPath)

// get the peer deps we need to add
const peers = require('./package.json').peerDependencies

// remove react peer deps
if (!useReact) {
  Object.keys(peers)
    .forEach(packageName => {
      if (packageName.includes('react')) {
        delete peers[packageName]
      }
    })
}

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

const templateName = useReact
  ? 'eslintrc-react.template.json'
  : 'eslintrc.template.json'

const eslintrcTemplate = require(`./templates/${templateName}`)
fs.writeFileSync(eslintrcPath, JSON.stringify(eslintrcTemplate, null, 2))

console.log('')
console.log('ESLint setup.')
console.log(' > yarn install')
