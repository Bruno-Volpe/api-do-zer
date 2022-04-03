import Alunos from '../models/Aluno'

class Passou {
  async index (req, res) {
    const passou = []
    const reprovou = []
    const alunos = await Alunos.findAll({
      attributes: ['nome' ,'media', 'sobrenome']
    })

    alunos.forEach((aluno) => {
      //console.log(nome.dataValues)
      if(aluno.dataValues.media > 5){
        passou.push(`${aluno.dataValues.nome} ${aluno.dataValues.sobrenome}`)
      } else {
        reprovou.push(`${aluno.dataValues.nome} ${aluno.dataValues.sobrenome}`)
      }
    })
    res.json({
      'Passaram': passou,
      'Reprovaram': reprovou
    })
  }
}

export default new Passou()
