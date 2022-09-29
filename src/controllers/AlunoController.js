import Aluno from '../models/Aluno'

class AlunoController {
  async index(req, res) {
    const student = await Aluno.findAll() // lista os alunos
    res.json(student)
  }

  async store(req, res) { // cria 1
    try {
      const student = await Aluno.create(req.body)

      return res.json(student)
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      })
    }
  }

  async show(req, res) { // mostra 1 aluno
    try {
      const { id } = req.params

      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID.'],
        })
      }

      const student = await Aluno.findByPk(id)

      if (!student) {
        return res.status(400).json({
          errors: ['Not Found.'],
        })
      }

      return res.json(student)
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      })
    }
  }

  async delete(req, res) { // deleta 1
    try {
      const { id } = req.params

      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID.'],
        })
      }

      const student = await Aluno.findByPk(id)

      if (!student) {
        return res.status(400).json({
          errors: ['Not Found.'],
        })
      }

      await student.destroy()

      return res.json({
        deleted: 'Aluno apagado com sucesso.',
      })
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      })
    }
  }

  async update(req, res) { // atualiza 1
    try {
      const { id } = req.params

      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID.'],
        })
      }

      const student = await Aluno.findByPk(id)

      if (!student) {
        return res.status(400).json({
          errors: ['Not Found.'],
        })
      }

      // const studentUpdated = await student.update(req.body)

      return res.json({
        updated: 'O aluno foi atualizado com sucesso.',
      })
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      })
    }
  }
}

export default new AlunoController()
