const { validationResult } = require('express-validator');


const validarCampos = (req, res, next) => {

  const errors = validationResult(req);

  if (errors.isEmpty()) {
    next();
  } else {
    console.log("Comprobación", JSON.stringify(errors));
    res.status(400).json(errors).send("Algo anda mal con la informacion");
  }

}

module.exports = { validarCampos }