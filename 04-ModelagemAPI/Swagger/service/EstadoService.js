'use strict';


/**
 * Adiciona um estado.
 * Adiciona um país.
 *
 * body Estado Adiciona um novo estado.
 * returns Estado
 **/
exports.createEstado = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id_estado" : 10,
  "nm_estado" : "São Paulo",
  "fk_id_pais" : 10,
  "ds_abreviacao" : "SP"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Deleta um estado.
 * Deleta um estado.
 *
 * id_estado String ID do estado a ser requisitado
 * no response value expected for this operation
 **/
exports.deleteEstado = function(id_estado) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Recebe uma lista de objetos estados.
 * Recebe uma lista de objetos estados.
 *
 * returns List
 **/
exports.getAllEstados = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id_estado" : 10,
  "nm_estado" : "São Paulo",
  "fk_id_pais" : 10,
  "ds_abreviacao" : "SP"
}, {
  "id_estado" : 10,
  "nm_estado" : "São Paulo",
  "fk_id_pais" : 10,
  "ds_abreviacao" : "SP"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Recebe um objeto estado
 * Recebe um objeto do tipo estado.
 *
 * id_estado Integer ID do estado a ser requisitado
 * returns Estado
 **/
exports.getEstadoById = function(id_estado) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id_estado" : 10,
  "nm_estado" : "São Paulo",
  "fk_id_pais" : 10,
  "ds_abreviacao" : "SP"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Atualiza um estado.
 * Atualiza um estado por Id.
 *
 * body Estado Atualiza um estado.
 * returns Estado
 **/
exports.updateEstado = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id_estado" : 10,
  "nm_estado" : "São Paulo",
  "fk_id_pais" : 10,
  "ds_abreviacao" : "SP"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

