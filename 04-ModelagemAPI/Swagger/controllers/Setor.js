'use strict';

var utils = require('../utils/writer.js');
var Setor = require('../service/SetorService');

module.exports.createSetor = function createSetor (req, res, next, body) {
  Setor.createSetor(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteSetor = function deleteSetor (req, res, next, id_setor) {
  Setor.deleteSetor(id_setor)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllSetores = function getAllSetores (req, res, next) {
  Setor.getAllSetores()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSetorById = function getSetorById (req, res, next, id_setor) {
  Setor.getSetorById(id_setor)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateSetor = function updateSetor (req, res, next, body) {
  Setor.updateSetor(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
