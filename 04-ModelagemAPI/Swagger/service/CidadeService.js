'use strict';


/**
 * Adiciona um cidade.
 * Adiciona um país.
 *
 * body Cidade Adiciona uma nova cidade.
 * returns Cidade
 **/
exports.createCidade = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id_cidade" : 10,
  "nm_cidade" : "São Paulo",
  "fk_id_estado" : 10
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Deleta uma cidade.
 * Deleta uma cidade.
 *
 * id_cidade String ID da cidade a ser requisitada.
 * no response value expected for this operation
 **/
exports.deleteCidade = function(id_cidade) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Recebe uma lista de objetos cidades.
 * Recebe uma lista de objetos cidades.
 *
 * returns List
 **/
exports.getAllCidades = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id_cidade" : 10,
  "nm_cidade" : "São Paulo",
  "fk_id_estado" : 10
}, {
  "id_cidade" : 10,
  "nm_cidade" : "São Paulo",
  "fk_id_estado" : 10
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Recebe um objeto cidade
 * Recebe um objeto do tipo cidade.
 *
 * id_cidade Integer ID da cidade a ser requisitada
 * returns Cidade
 **/
exports.getCidadeById = function(id_cidade) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id_cidade" : 10,
  "nm_cidade" : "São Paulo",
  "fk_id_estado" : 10
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Atualiza uma cidade.
 * Atualiza uma cidade por Id.
 *
 * body Cidade Atualiza uma Cidade.
 * returns Cidade
 **/
exports.updateCidade = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id_cidade" : 10,
  "nm_cidade" : "São Paulo",
  "fk_id_estado" : 10
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

