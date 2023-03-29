const LoginService = require('../services/Login.service');

class LoginController {
  constructor() {
    this.service = new LoginService();
    // this.service=LoginService;
  }

  async login(req, res) {
    const {email, password} = req.body;
    const token = await this.service.validateUser(email, password);
      return res.status(200).json({token});
  }

  async isInvalidLogin(req, res, next) {
    const {email, password} = req.body;
    const token = await this.service.validateUser(email, password);
    if(token.type){
      return res.status(token.type).json({message: token.message});
    }
    return next();
  }
}

module.exports = LoginController;