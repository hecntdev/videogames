colors = require("colors")
const ctrl = require('./controllers/app')

const init = async () => {
  await ctrl.health()
}


init()
