'use strict';

var utils = require('../utils/writer.js');
var Cidade = require('../service/CidadeService');

module.exports.createCidade = function createCidade (req, res, next, body) {
  Cidade.createCidade(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCidade = function deleteCidade (req, res, next, id_cidade) {
  Cidade.deleteCidade(id_cidade)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllCidades = function getAllCidades (req, res, next) {
  Cidade.getAllCidades()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCidadeById = function getCidadeById (req, res, next, id_cidade) {
  Cidade.getCidadeById(id_cidade)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCidade = function updateCidade (req, res, next, body) {
  Cidade.updateCidade(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
