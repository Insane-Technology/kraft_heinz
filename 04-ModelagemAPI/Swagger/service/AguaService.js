'use strict';


/**
 * Adiciona uma água.
 * Adiciona um país.
 *
 * body Agua Adiciona uma nova água.
 * returns Agua
 **/
exports.createAgua = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "area_risco" : true,
  "id_setor" : 10,
  "data_hora" : "2000-01-23T04:56:07.000+00:00",
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
 * Deleta um consumo de água.
 * Deleta um consumo de água.
 *
 * id_agua String ID do consumo de água a ser requisitado
 * no response value expected for this operation
 **/
exports.deleteAgua = function(id_agua) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Recebe um objeto água
 * Recebe um objeto do tipo água.
 *
 * id_agua Integer ID do consumo de água a ser requisitado
 * returns Agua
 **/
exports.getAguaById = function(id_agua) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "area_risco" : true,
  "id_setor" : 10,
  "data_hora" : "2000-01-23T04:56:07.000+00:00",
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
 * Recebe uma lista de objetos aguas.
 * Recebe uma lista de objetos aguas.
 *
 * returns List
 **/
exports.getAllAguas = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "area_risco" : true,
  "id_setor" : 10,
  "data_hora" : "2000-01-23T04:56:07.000+00:00",
  "qtd_consumida" : 200
}, {
  "area_risco" : true,
  "id_setor" : 10,
  "data_hora" : "2000-01-23T04:56:07.000+00:00",
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
 * Atualiza um consumo de água.
 * Atualiza um consumo de água por Id.
 *
 * body Agua Atualiza um consumo de água.
 * returns Agua
 **/
exports.updateAgua = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "area_risco" : true,
  "id_setor" : 10,
  "data_hora" : "2000-01-23T04:56:07.000+00:00",
  "qtd_consumida" : 200
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

