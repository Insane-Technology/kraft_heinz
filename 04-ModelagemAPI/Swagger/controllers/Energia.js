'use strict';

var utils = require('../utils/writer.js');
var Energia = require('../service/EnergiaService');

module.exports.createEnergia = function createEnergia (req, res, next, body) {
  Energia.createEnergia(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteEnergia = function deleteEnergia (req, res, next, id_energia) {
  Energia.deleteEnergia(id_energia)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllEnergias = function getAllEnergias (req, res, next) {
  Energia.getAllEnergias()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEnergiaById = function getEnergiaById (req, res, next, id_energia) {
  Energia.getEnergiaById(id_energia)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateEnergia = function updateEnergia (req, res, next, body) {
  Energia.updateEnergia(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
