'use strict';

var utils = require('../utils/writer.js');
var Desperdicio = require('../service/DesperdicioService');

module.exports.createDesperdicio = function createDesperdicio (req, res, next, body) {
  Desperdicio.createDesperdicio(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteDesperdicio = function deleteDesperdicio (req, res, next, id_desperdicio) {
  Desperdicio.deleteDesperdicio(id_desperdicio)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllDesperdicios = function getAllDesperdicios (req, res, next) {
  Desperdicio.getAllDesperdicios()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDesperdicioById = function getDesperdicioById (req, res, next, id_desperdicio) {
  Desperdicio.getDesperdicioById(id_desperdicio)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateDesperdicio = function updateDesperdicio (req, res, next, body) {
  Desperdicio.updateDesperdicio(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
