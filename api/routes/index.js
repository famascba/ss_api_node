var express = require('express');
const { connect } = require('mssql');
var router = express.Router();
const sql = require("../dboperation");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*test connection */
router.get('/testconet', function(req, res, next) {
  sql.getdata();
  res.render('index', { title: 'Express' });
});

router.get('/getdata_withQuery', function(req, res, next) {
  sql.getdata_withQuery().then((result)=>{
    res.json(result[0]);
    //var datos = result[0];
    //res.status(200).send(datos);
  })
});

router.get('/recaudacion', function(req, res, next) {
  sql.getdata_recaudacion().then((result)=>{
    res.json(result[0]);
    //var datos = result[0];
    //res.status(200).send(datos);
  })
});

router.get('/rs', function(req, res, next) {
  sql.getdata_rs().then((result)=>{
    res.json(result[0]);
    //var datos = result[0];
    //res.status(200).send(datos);
  })
});

router.get('/getdata_actividades_ex_blind', function(req, res, next) {
  sql.getdata_actividades_ex_blind().then((result)=>{
    res.json(result[0]);
    //var datos = result[0];
    //res.status(200).send(datos);
  })
});

router.get('/getdata_sp_soporte_bi_consulta_rs', function(req, res, next) {
  sql.getdata_sp_soporte_bi_consulta_rs().then((result)=>{
    res.json(result[0]);
    //var datos = result[0];
    //res.status(200).send(datos);
  })
});
router.get('/getdata_sp_soporte_api_rec_cuentas_activas', function(req, res, next) {
  sql.getdata_sp_soporte_api_rec_cuentas_activas().then((result)=>{
    res.json(result[0]);
    //var datos = result[0];
    //res.status(200).send(datos);
  })
});
router.get('/getdata_sp_soporte_api_rec_bajas_ib', function(req, res, next) {
  sql.getdata_sp_soporte_api_rec_bajas_ib().then((result)=>{
    res.json(result[0]);
    //var datos = result[0];
    //res.status(200).send(datos);
  })
});
router.get('/getdata_sp_soporte_api_rec_pad_ind_exen_au_in', function(req, res, next) {
  sql.getdata_sp_soporte_api_rec_pad_ind_exen_au_in().then((result)=>{
    res.json(result[0]);
    //var datos = result[0];
    //res.status(200).send(datos);
  })
});
router.get('/getdata_sp_soporte_api_bi_consulta_srtp', function(req, res, next) {
  sql.getdata_sp_soporte_api_bi_consulta_srtp().then((result)=>{
    res.json(result[0]);
    //var datos = result[0];
    //res.status(200).send(datos);
  })
});
router.get('/getdata_sp_soporte_api_bi_consulta_nrnp', function(req, res, next) {
  sql.getdata_sp_soporte_api_bi_consulta_nrnp().then((result)=>{
    res.json(result[0]);
    //var datos = result[0];
    //res.status(200).send(datos);
  })
});
//############################# ATENCION AL CONTRIBUYENTE ##############################################
router.get('/getdata_sp_soporte_api_att_aforo', function(req, res, next) {
  sql.getdata_sp_soporte_api_att_aforo().then((result)=>{
    res.json(result[0]);
    //var datos = result[0];
    //res.status(200).send(datos);
  })
});
router.get('/getdata_sp_soporte_api_att_esc', function(req, res, next) {
  sql.getdata_sp_soporte_api_att_esc().then((result)=>{
    res.json(result[0]);
    //var datos = result[0];
    //res.status(200).send(datos);
  })
});
router.get('/getdata_sp_soporte_api_att_ddjj_sellos', function(req, res, next) {
  sql.getdata_sp_soporte_api_att_ddjj_sellos().then((result)=>{
    res.json(result[0]);
    //var datos = result[0];
    //res.status(200).send(datos);
  })
});
router.get('/getdata_sp_soporte_api_att_sellos_plazo_fijo/:num1/:num2/:num3', function(req, res) {
  var num1 = req.params.num1;
  var num2 = req.params.num2;
  var num3 = req.params.num3;
  sql.getdata_sp_soporte_api_att_sellos_plazo_fijo(num1,num2,num3).then((result)=>{
  res.json(result[0]);
    //var datos = result[0];
    //res.status(200).send(datos);
  })
});
router.get('/getdata_sp_sporte_api_att_analisis_pp', function(req, res, next) {
  sql.getdata_sp_sporte_api_att_analisis_pp().then((result)=>{
    res.json(result[0]);
    //var datos = result[0];
    //res.status(200).send(datos);
  })
});

//router.get('/sumar/:num1/:num2', function(req, res) {
  // Aquí estamos definiendo dos parámetros de entrada: num1 y num2
  // Estos parámetros serán recibidos en la URL de la siguiente manera: /sumar/5/10
  
  // Para acceder a los parámetros, podemos utilizar la propiedad params del objeto req
//var num1 = req.params.num1;
//var num2 = req.params.num2;
  
  // Realizamos la operación matemática
//var resultado = parseInt(num1) + parseInt(num2);
  
 // Devolvemos la respuesta como un objeto JSON
//res.json({resultado: resultado});
//});



module.exports = router;
