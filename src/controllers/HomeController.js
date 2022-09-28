class HomeController {
  async index(req, res) {
    res.json('Hello World! Index')
  }
}

export default new HomeController()
