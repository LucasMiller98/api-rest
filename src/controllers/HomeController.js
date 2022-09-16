class HomeController {
  index(req, res) {
    res.json({
      testando123: 'isso ai',
    })
  }
}

export default new HomeController()
