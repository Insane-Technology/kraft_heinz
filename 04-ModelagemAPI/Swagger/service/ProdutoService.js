'use strict';


/**
 * Adiciona um produto.
 * Adiciona um país.
 *
 * body Produto Adiciona um novo produto.
 * returns Produto
 **/
exports.createProduto = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "cd_produto" : 1056,
  "nm_produto" : "Tomate",
  "id_produto" : 10
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Deleta um produto.
 * Deleta um produto.
 *
 * id_produto String ID do produto a ser requisitado
 * no response value expected for this operation
 **/
exports.deleteProduto = function(id_produto) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Recebe uma lista de objetos produtos.
 * Recebe uma lista de objetos produtos.
 *
 * returns List
 **/
exports.getAllProdutos = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "cd_produto" : 1056,
  "nm_produto" : "Tomate",
  "id_produto" : 10
}, {
  "cd_produto" : 1056,
  "nm_produto" : "Tomate",
  "id_produto" : 10
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Recebe um objeto produto
 * Recebe um objeto do tipo produto.
 *
 * id_produto Integer ID do produto a ser requisitado
 * returns Produto
 **/
exports.getProdutoById = function(id_produto) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "cd_produto" : 1056,
  "nm_produto" : "Tomate",
  "id_produto" : 10
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Atualiza um produto.
 * Atualiza um produto por Id.
 *
 * body Produto Atualiza um produto.
 * returns Produto
 **/
exports.updateProduto = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "cd_produto" : 1056,
  "nm_produto" : "Tomate",
  "id_produto" : 10
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

