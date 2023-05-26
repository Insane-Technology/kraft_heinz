'use strict';


/**
 * Adiciona um tipo de energia.
 * Adiciona um país.
 *
 * body TipoEnergia Adiciona um novo tipo de energia.
 * returns TipoEnergia
 **/
exports.createTipoEnergia = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "nm_tipo_energia" : "Eólica",
  "renovavel" : true,
  "id_tipo_energia" : 10
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Deleta um tipo de energia.
 * Deleta um tipo de energia.
 *
 * id_tipo_energia String ID do tipo de energia a ser requisitado
 * no response value expected for this operation
 **/
exports.deleteTipoEnergia = function(id_tipo_energia) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Recebe uma lista de objetos de tipos de energia.
 * Recebe uma lista de objetos energias.
 *
 * returns List
 **/
exports.getAllTiposEnergias = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "nm_tipo_energia" : "Eólica",
  "renovavel" : true,
  "id_tipo_energia" : 10
}, {
  "nm_tipo_energia" : "Eólica",
  "renovavel" : true,
  "id_tipo_energia" : 10
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Recebe um objeto tipo energia
 * Recebe um objeto do tipo de energia.
 *
 * id_tipo_energia Integer ID do tipo de energia a ser requisitada
 * returns TipoEnergia
 **/
exports.getTipoEnergiaById = function(id_tipo_energia) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "nm_tipo_energia" : "Eólica",
  "renovavel" : true,
  "id_tipo_energia" : 10
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Atualiza um tipo de energia.
 * Atualiza um tipo de energia por Id.
 *
 * body TipoEnergia Atualiza um tipo de energia.
 * returns TipoEnergia
 **/
exports.updateTipoEnergia = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "nm_tipo_energia" : "Eólica",
  "renovavel" : true,
  "id_tipo_energia" : 10
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

