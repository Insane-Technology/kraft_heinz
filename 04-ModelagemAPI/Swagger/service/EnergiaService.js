'use strict';


/**
 * Adiciona um consumo de energia.
 * Adiciona um país.
 *
 * body Energia Adiciona um novo consumo de energia.
 * returns Energia
 **/
exports.createEnergia = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "fk_id_tipo_energia" : 10,
  "data_hora" : "2000-01-23T04:56:07.000+00:00",
  "fk_id_setor" : 10,
  "id_energia" : 10,
  "qtd_consumida" : 200
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Deleta um consumo de energia.
 * Deleta um consumo de energia.
 *
 * id_energia String ID do consumo de energia a ser requisitado
 * no response value expected for this operation
 **/
exports.deleteEnergia = function(id_energia) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Recebe uma lista de objetos energias.
 * Recebe uma lista de objetos energias.
 *
 * returns List
 **/
exports.getAllEnergias = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "fk_id_tipo_energia" : 10,
  "data_hora" : "2000-01-23T04:56:07.000+00:00",
  "fk_id_setor" : 10,
  "id_energia" : 10,
  "qtd_consumida" : 200
}, {
  "fk_id_tipo_energia" : 10,
  "data_hora" : "2000-01-23T04:56:07.000+00:00",
  "fk_id_setor" : 10,
  "id_energia" : 10,
  "qtd_consumida" : 200
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Recebe um objeto energia
 * Recebe um objeto do tipo energia.
 *
 * id_energia Integer ID da energia a ser requisitada
 * returns Energia
 **/
exports.getEnergiaById = function(id_energia) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "fk_id_tipo_energia" : 10,
  "data_hora" : "2000-01-23T04:56:07.000+00:00",
  "fk_id_setor" : 10,
  "id_energia" : 10,
  "qtd_consumida" : 200
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Atualiza um consumo de energia.
 * Atualiza um consumo de energia por Id.
 *
 * body Energia Atualiza um consumo de energia.
 * returns Energia
 **/
exports.updateEnergia = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "fk_id_tipo_energia" : 10,
  "data_hora" : "2000-01-23T04:56:07.000+00:00",
  "fk_id_setor" : 10,
  "id_energia" : 10,
  "qtd_consumida" : 200
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

