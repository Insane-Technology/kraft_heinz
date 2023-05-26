'use strict';

var utils = require('../utils/writer.js');
var Agua = require('../service/AguaService');

module.exports.createAgua = function createAgua (req, res, next, body) {
  Agua.createAgua(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteAgua = function deleteAgua (req, res, next, id_agua) {
  Agua.deleteAgua(id_agua)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAguaById = function getAguaById (req, res, next, id_agua) {
  Agua.getAguaById(id_agua)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllAguas = function getAllAguas (req, res, next) {
  Agua.getAllAguas()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateAgua = function updateAgua (req, res, next, body) {
  Agua.updateAgua(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
