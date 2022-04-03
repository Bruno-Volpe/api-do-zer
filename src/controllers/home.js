import Alunos from '../models/Aluno'

async function checkAlunoAndId (req, res) {
  const id = req.params.id
  if(!id) res.status(401).json('ID nao enviado')

  const aluno = await Alunos.findByPk(id, {
    attributes: ['id', 'nome', 'media', 'email'],
    order: [['id', 'DESC']]
  })
  if(!aluno) res.status(401).json('Aluno nao encontrado')

  return aluno
}

async function emailExists (req, res) {
  const email = req.body.email
  const emailExists = await Alunos.findOne({ where: { email: email } })
  if(emailExists) return res.json('Email ja existente!')
}

class Aluno {
  async index (req, res) {
    try {
      const alunos = await Alunos.findAll({
        attributes: ['id', 'nome', 'media', 'email'],
        order: [['id', 'DESC']]
      })
      res.json(alunos)
    } catch (e) {
      res.status(401).json('Error!')
    }
  }

  async store (req, res) {
    try {
      emailExists(req, res)

      const newAluno = await Alunos.create(req.body)
      res.json(newAluno)
    } catch (e) {
      res.status(401).json('Error!')
    }
  }

  async show(req, res) {
    try {
      const aluno = await checkAlunoAndId(req, res)
      res.json(aluno)
    } catch (e) {
      res.status(401).json('Error!')
    }
  }

  async delete(req, res) {
    try {
      const alunoDeletado = await checkAlunoAndId(req, res)
      await alunoDeletado.destroy()
      res.json(alunoDeletado)
    } catch (e) {
      res.status(401).json('Error!')
    }
  }

  async update (req, res) {
    try {
      emailExists(req, res)

      const oldAluno = await checkAlunoAndId(req, res)
      const updatedAluno = await oldAluno.update(req.body)
      res.json(updatedAluno)
    } catch (e) {
      res.status(401).json('Error!')
    }
  }
}

export default new Aluno()
