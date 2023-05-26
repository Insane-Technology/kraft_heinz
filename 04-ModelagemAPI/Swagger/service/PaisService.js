'use strict';


/**
 * Adiciona um país.
 * Adiciona um país.
 *
 * body Pais Adiciona um novo país.
 * returns Pais
 **/
exports.createPais = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ddi_pais" : "55",
  "nm_pais" : "Brasil",
  "ds_iso_alpha3" : "BRA",
  "ds_abreviacao" : "BR",
  "id_pais" : 10
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Deleta um país.
 * Deleta um país.
 *
 * id_pais String ID do pais a ser requisitado
 * no response value expected for this operation
 **/
exports.deletePais = function(id_pais) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Recebe uma lista de objetos países.
 * Recebe uma lista de objetos países.
 *
 * returns List
 **/
exports.getAllPaises = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "ddi_pais" : "55",
  "nm_pais" : "Brasil",
  "ds_iso_alpha3" : "BRA",
  "ds_abreviacao" : "BR",
  "id_pais" : 10
}, {
  "ddi_pais" : "55",
  "nm_pais" : "Brasil",
  "ds_iso_alpha3" : "BRA",
  "ds_abreviacao" : "BR",
  "id_pais" : 10
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Recebe um objeto país
 * Recebe um objeto do tipo país.
 *
 * id_pais Integer ID do pais a ser requisitado
 * returns Pais
 **/
exports.getPaisById = function(id_pais) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ddi_pais" : "55",
  "nm_pais" : "Brasil",
  "ds_iso_alpha3" : "BRA",
  "ds_abreviacao" : "BR",
  "id_pais" : 10
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Atualiza um país.
 * Atualiza um país por Id.
 *
 * body Pais Atualiza um país.
 * returns Pais
 **/
exports.updatePais = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ddi_pais" : "55",
  "nm_pais" : "Brasil",
  "ds_iso_alpha3" : "BRA",
  "ds_abreviacao" : "BR",
  "id_pais" : 10
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

