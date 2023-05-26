'use strict';

var utils = require('../utils/writer.js');
var Produto = require('../service/ProdutoService');

module.exports.createProduto = function createProduto (req, res, next, body) {
  Produto.createProduto(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteProduto = function deleteProduto (req, res, next, id_produto) {
  Produto.deleteProduto(id_produto)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllProdutos = function getAllProdutos (req, res, next) {
  Produto.getAllProdutos()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProdutoById = function getProdutoById (req, res, next, id_produto) {
  Produto.getProdutoById(id_produto)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateProduto = function updateProduto (req, res, next, body) {
  Produto.updateProduto(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
