console.log(process.argv)

// $ node ex08_process.js  --producao outro param

function temParam (param) {
  return process.argv.indexOf(param) !== -1
}

temParam('--producao')
  ? console.log('Atenção total!')
  : console.log('Tranquio!!!')
