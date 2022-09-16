import Aluno from '../models/Aluno'

class HomeController {
  async index(req, res) {
    const newStudent = await Aluno.create({
      nome: 'Lucas',
      sobrenome: 'Miller',
      email: 'lucas.miller1998@outlook.com',
      idade: 23,
      peso: 68.2,
      altura: 1.68,
    })
    res.json(newStudent)
  }
}

export default new HomeController()
