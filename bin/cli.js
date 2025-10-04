#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import { exec } from 'node:child_process'
import yargs from 'yargs'

const argv = yargs(process.argv.slice(2))
  .help('h')
  .alias('h', 'help')
  .alias('c', 'config')
  .choices('c', ['ts', 'react', 'nextjs'])
  .demandOption('c')
  .parse()

// get the projects package.json
const pkgPath = path.resolve(process.cwd(), 'package.json')
const pkg = require(pkgPath)

// get the peer deps we need to add
const peers = require('../package.json').peerDependencies

const removePeers = (glob) => {
  Object.keys(peers)
    .forEach(packageName => {
      if (packageName.includes(glob)) {
        delete peers[packageName]
      }
    })
}

// remove peer deps depending on config
if (argv.config === 'ts') {
  removePeers('react')
  removePeers('jsx')
  removePeers('next')
} else if (argv.config === 'react') {
  removePeers('next')
} else if (argv.config === 'nextjs') {
  // keep all deps
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
const eslintrcPath = path.resolve(process.cwd(), '.eslintrc.js')

const templates = {
  ts: 'default.template.js',
  react: 'react.template.js',
  nextjs: 'nextjs.template.js'
}

const eslintrcTemplatePath = path.resolve(__dirname, `../templates/${templates[argv.config]}`)
fs.copyFileSync(eslintrcTemplatePath, eslintrcPath)

console.log('Installing peer dependencies...')
exec('bun install')
