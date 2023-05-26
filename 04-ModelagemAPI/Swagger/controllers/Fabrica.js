'use strict';

var utils = require('../utils/writer.js');
var Fabrica = require('../service/FabricaService');

module.exports.createFabrica = function createFabrica (req, res, next, body) {
  Fabrica.createFabrica(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteFabrica = function deleteFabrica (req, res, next, id_fabrica) {
  Fabrica.deleteFabrica(id_fabrica)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllFabricas = function getAllFabricas (req, res, next) {
  Fabrica.getAllFabricas()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getFabricaById = function getFabricaById (req, res, next, id_fabrica) {
  Fabrica.getFabricaById(id_fabrica)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateFabrica = function updateFabrica (req, res, next, body) {
  Fabrica.updateFabrica(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
