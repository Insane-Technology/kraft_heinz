'use strict';


/**
 * Adiciona um setor.
 * Adiciona um país.
 *
 * body Setor Adiciona um novo setor.
 * returns Setor
 **/
exports.createSetor = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id_setor" : 10,
  "fk_id_fabrica" : 10,
  "nm_setor" : "Logística"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Deleta um setor.
 * Deleta um setor.
 *
 * id_setor String ID do setor a ser requisitado
 * no response value expected for this operation
 **/
exports.deleteSetor = function(id_setor) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Recebe uma lista de objetos setores.
 * Recebe uma lista de objetos setores.
 *
 * returns List
 **/
exports.getAllSetores = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id_setor" : 10,
  "fk_id_fabrica" : 10,
  "nm_setor" : "Logística"
}, {
  "id_setor" : 10,
  "fk_id_fabrica" : 10,
  "nm_setor" : "Logística"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Recebe um objeto setor
 * Recebe um objeto do tipo setor.
 *
 * id_setor Integer ID do setor a ser requisitado
 * returns Setor
 **/
exports.getSetorById = function(id_setor) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id_setor" : 10,
  "fk_id_fabrica" : 10,
  "nm_setor" : "Logística"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Atualiza um setor.
 * Atualiza um setor por Id.
 *
 * body Setor Atualiza um setor.
 * returns Setor
 **/
exports.updateSetor = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id_setor" : 10,
  "fk_id_fabrica" : 10,
  "nm_setor" : "Logística"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

