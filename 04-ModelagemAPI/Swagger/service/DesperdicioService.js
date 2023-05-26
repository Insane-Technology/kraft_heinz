'use strict';


/**
 * Adiciona um desperdicio.
 * Adiciona um país.
 *
 * body Desperdicio Adiciona um novo desperdicio.
 * returns Desperdicio
 **/
exports.createDesperdicio = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "fk_id_produto" : 10,
  "id_desperdicio" : 10,
  "fk_id_setor" : 10,
  "qtd_kg" : 200
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Deleta um desperdicio.
 * Deleta um desperdicio.
 *
 * id_desperdicio String ID do desperdicio a ser requisitado
 * no response value expected for this operation
 **/
exports.deleteDesperdicio = function(id_desperdicio) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Recebe uma lista de objetos desperdicios.
 * Recebe uma lista de objetos desperdicios.
 *
 * returns List
 **/
exports.getAllDesperdicios = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "fk_id_produto" : 10,
  "id_desperdicio" : 10,
  "fk_id_setor" : 10,
  "qtd_kg" : 200
}, {
  "fk_id_produto" : 10,
  "id_desperdicio" : 10,
  "fk_id_setor" : 10,
  "qtd_kg" : 200
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Recebe um objeto desperdício
 * Recebe um objeto do tipo desperdício.
 *
 * id_desperdicio Integer ID do desperdicio a ser requisitado
 * returns Desperdicio
 **/
exports.getDesperdicioById = function(id_desperdicio) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "fk_id_produto" : 10,
  "id_desperdicio" : 10,
  "fk_id_setor" : 10,
  "qtd_kg" : 200
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Atualiza um desperdicio.
 * Atualiza um desperdicio por Id.
 *
 * body Desperdicio Atualiza um desperdicio.
 * returns Desperdicio
 **/
exports.updateDesperdicio = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "fk_id_produto" : 10,
  "id_desperdicio" : 10,
  "fk_id_setor" : 10,
  "qtd_kg" : 200
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

