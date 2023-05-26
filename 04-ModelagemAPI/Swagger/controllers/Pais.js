'use strict';

var utils = require('../utils/writer.js');
var Pais = require('../service/PaisService');

module.exports.createPais = function createPais (req, res, next, body) {
  Pais.createPais(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deletePais = function deletePais (req, res, next, id_pais) {
  Pais.deletePais(id_pais)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllPaises = function getAllPaises (req, res, next) {
  Pais.getAllPaises()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPaisById = function getPaisById (req, res, next, id_pais) {
  Pais.getPaisById(id_pais)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatePais = function updatePais (req, res, next, body) {
  Pais.updatePais(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
