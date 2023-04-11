const express = require('express')

const app = express()

const usuarios = [
  {id:1, "Nome": "Abel", "gc":"link","perfil":"líder"},
  {id:2, "Nome": 'João', "gc":"Legacy", "perfil":"membro"},
  {id:3, "Nome":"Guilherme", "gc":"Via norte", "perfil":"admin"}
]

app.use(express.json())

app.get('/', (req,res) => {
  res.send('teste')
})

app.get('/usuarios', (req,res) => {
  res.json(usuarios)
})

app.post('/usuarios', (req,res) => {
  usuarios.push(req.body)
  results.status(201).send(`Usuário cadastrado com sucesso`)
})

app.put('/usuarios/:id', (req,res) => {
  let index = buscausuario(req.params.id)
  usuarios[index].gc = req.body.gc
  console.log(usuarios[index])
  res.json(usuarios)
})

app.get('/usuarios/:id', (req,res) => {
  let index = buscausuario(req.params.id)
  res.json(usuarios[index])
})

app.delete('/usuarios/:id', (req,res) => {
  let {id} = req.params
  let index = buscausuario(id)
  usuarios.splice(index,1)
  console.log(usuarios[index])
  res.status(200).send(`Usuário ${id} removido com sucesso`)
})

function buscausuario(id) {
  return usuarios.findIndex(usuario => usuario.id  == id)
}

app.listen(3000, () => {
  console.log('server started')
})

