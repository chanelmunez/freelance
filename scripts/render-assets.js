'use strict';
const fs = require('fs');
const upath = require('upath');
const sh = require('shelljs');

module.exports = function renderAssets() {
    const publicPath = upath.resolve(upath.dirname(__filename), '../public');
    const sourcePath = upath.resolve(upath.dirname(__filename), '../src/assets');
    const destPath = upath.resolve(upath.dirname(__filename), '../dist/.');

    // Copy public/ first so src/assets wins on conflicts (matches server.js order)
    sh.cp('-R', `${publicPath}/*`, destPath)
    sh.cp('-R', sourcePath, destPath)
};
