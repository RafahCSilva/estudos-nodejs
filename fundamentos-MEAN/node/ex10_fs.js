const fs = require('fs')
fs
  .readdirSync(__dirname)
  .forEach(f => console.log(f))
