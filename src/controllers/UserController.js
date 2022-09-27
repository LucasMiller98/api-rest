import User from '../models/User'

class UserController {
  async store(req, res) { // cria um usuário
    try {
      const newUser = await User.create(req.body) // recebe os dados da requisição.
      const { id, nome, email } = newUser

      return res.json({ id, nome, email })
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      })
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] })

      return res.json(users)
    } catch (e) {
      return res.json(null)
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id)
      const { id, nome, email } = user
      return res.json({ id, nome, email })
    } catch (e) {
      return res.json(null)
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId)

      if (!user) {
        return res.status(400).json({
          errors: ['usuário não existe.'],
        })
      }

      const newData = await user.update(req.body)
      const { id, nome, email } = newData

      return res.json({ id, nome, email })
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      })
    }
  }

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId)

      if (!user) {
        return res.status(400).json({
          errors: ['usuário não existe.'],
        })
      }

      await user.destroy()

      return res.json({
        user: 'Usuário deletado com sucesso.',
      })
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      })
    }
  }
}

export default new UserController()
