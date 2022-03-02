const PI = 3.14
console.log(global.PI) // retorna undefined
// cada arquivo é um módulo e faz seu próprio ESCOPO

// se deseja deixar global, entao de ser atribuido ao `global`
// o correspondendo do `windows` no node é o `global`
global.obj = { name: 'Estou no global' }

