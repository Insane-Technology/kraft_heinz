'use strict';


/**
 * Adiciona uma fábrica.
 * Adiciona um país.
 *
 * body Fabrica Adiciona uma nova fábrica.
 * returns Fabrica
 **/
exports.createFabrica = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "nm_fabrica" : "Heinz São Paulo",
  "fk_id_cidade" : 10,
  "ds_registro" : "985642137852",
  "id_fabrica" : 10
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Deleta uma fábrica.
 * Deleta uma fábrica.
 *
 * id_fabrica String ID da fábrica a ser requisitada
 * no response value expected for this operation
 **/
exports.deleteFabrica = function(id_fabrica) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Recebe uma lista de objetos fabricas.
 * Recebe uma lista de objetos fabricas.
 *
 * returns List
 **/
exports.getAllFabricas = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "nm_fabrica" : "Heinz São Paulo",
  "fk_id_cidade" : 10,
  "ds_registro" : "985642137852",
  "id_fabrica" : 10
}, {
  "nm_fabrica" : "Heinz São Paulo",
  "fk_id_cidade" : 10,
  "ds_registro" : "985642137852",
  "id_fabrica" : 10
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Recebe um objeto fábrica
 * Recebe um objeto do tipo fábrica.
 *
 * id_fabrica Integer ID da fábrica a ser requisitada
 * returns Fabrica
 **/
exports.getFabricaById = function(id_fabrica) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "nm_fabrica" : "Heinz São Paulo",
  "fk_id_cidade" : 10,
  "ds_registro" : "985642137852",
  "id_fabrica" : 10
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Atualiza uma fábrica.
 * Atualiza uma fábrica por Id.
 *
 * body Fabrica Atualiza uma fábrica.
 * returns Fabrica
 **/
exports.updateFabrica = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "nm_fabrica" : "Heinz São Paulo",
  "fk_id_cidade" : 10,
  "ds_registro" : "985642137852",
  "id_fabrica" : 10
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

