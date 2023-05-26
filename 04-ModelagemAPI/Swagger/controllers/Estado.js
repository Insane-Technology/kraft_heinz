'use strict';

var utils = require('../utils/writer.js');
var Estado = require('../service/EstadoService');

module.exports.createEstado = function createEstado (req, res, next, body) {
  Estado.createEstado(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteEstado = function deleteEstado (req, res, next, id_estado) {
  Estado.deleteEstado(id_estado)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllEstados = function getAllEstados (req, res, next) {
  Estado.getAllEstados()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEstadoById = function getEstadoById (req, res, next, id_estado) {
  Estado.getEstadoById(id_estado)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateEstado = function updateEstado (req, res, next, body) {
  Estado.updateEstado(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
