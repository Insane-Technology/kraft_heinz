'use strict';

var utils = require('../utils/writer.js');
var TipoEnergia = require('../service/TipoEnergiaService');

module.exports.createTipoEnergia = function createTipoEnergia (req, res, next, body) {
  TipoEnergia.createTipoEnergia(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteTipoEnergia = function deleteTipoEnergia (req, res, next, id_tipo_energia) {
  TipoEnergia.deleteTipoEnergia(id_tipo_energia)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllTiposEnergias = function getAllTiposEnergias (req, res, next) {
  TipoEnergia.getAllTiposEnergias()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTipoEnergiaById = function getTipoEnergiaById (req, res, next, id_tipo_energia) {
  TipoEnergia.getTipoEnergiaById(id_tipo_energia)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateTipoEnergia = function updateTipoEnergia (req, res, next, body) {
  TipoEnergia.updateTipoEnergia(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
