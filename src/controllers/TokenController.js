import User from '../models/User'

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body

    if (!email || !password) {
      return res.status(401).json({
        errors: ['Credenciais inválidas.'],
      })
    }

    const user = await User.findOne({ where: { email } })

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário não existe.'],
      })
    }

    return res.json(user)
  }
}

export default new TokenController()
