var config = require("./dbconfig.js");
const sql = require("mssql");

async function getdata(){
    try {
        let pool = await sql.connect(config);
        console.log("sql conectando ... ")
    } catch(error)
    {
            console.log(" mathus-error :" + error);
    }
};

async function getdata_withQuery(){
    try{
        let pool = await sql.connect(config);
        let res = await pool.request().query("select top 200000 * from dwh_repo_recaudacion");
        return res.recordsets;
    }catch(error){
        console.log(" mathus-error : " + error);
    }
};

async function getdata_recaudacion(){
    try{
        let pool = await sql.connect(config);
        let res = await pool.request().execute('soporte_recaudacion');
        return res.recordsets;
    }catch(error){
        console.log(" mathus-error : " + error);
    }
};

async function getdata_rs(){
    try{
        let pool = await sql.connect(config);
        let res = await pool.request().execute('sp_self_service_rs');
        return res.recordsets;
    }catch(error){
        console.log(" mathus-error : " + error);
    }
};

async function getdata_actividades_ex_blind(){
    try{
        let pool = await sql.connect(config);
        let res = await pool.request().execute('sp_soporte_actividades_consulta_ex_blin');
        return res.recordsets;
    }catch(error){
        console.log(" mathus-error : " + error);
    }
};
async function getdata_sp_soporte_bi_consulta_rs(){
    try{
        let pool = await sql.connect(config);
        let res = await pool.request().execute('sp_soporte_bi_consulta_rs');
        return res.recordsets;
    }catch(error){
        console.log(" mathus-error : " + error);
    }
};

async function getdata_sp_soporte_api_rec_cuentas_activas(){
    try{
        let pool = await sql.connect(config);
        let res = await pool.request().execute('sp_soporte_api_rec_cuentas_activas');
        return res.recordsets;
    }catch(error){
        console.log(" mathus-error : " + error);
    }
};
async function getdata_sp_soporte_api_rec_bajas_ib(){
    try{
        let pool = await sql.connect(config);
        let res = await pool.request().execute('sp_soporte_api_rec_bajas_ib');
        return res.recordsets;
    }catch(error){
        console.log(" mathus-error : " + error);
    }
};

async function getdata_sp_soporte_api_bi_consulta_srtp(){
    try{
        let pool = await sql.connect(config);
        let res = await pool.request().input('tipo', sql.VarChar(1), 'S').execute('sp_soporte_api_bi_consulta_srtp');
        return res.recordsets;
    }catch(error){
        console.log(" mathus-error : " + error);
    }
};

async function getdata_sp_soporte_api_bi_consulta_nrnp(){
    try{
        
        let pool = await sql.connect(config);        
        let res = await pool.request().input('tipo', sql.VarChar(1), 'N').execute('sp_soporte_api_bi_consulta_srtp');
        return res.recordsets;
    }catch(error){      
        console.log(" mathus-error : " + error);
        //return " mathus-error : " + error;
    }
};
//########################### ATENCION AL CONTRIBUYENTES #########################################
async function getdata_sp_soporte_api_att_aforo(){
    try{
        
        let pool = await sql.connect(config);    
        let res = await pool.request().execute('sp_soporte_api_att_aforo');
        return res.recordsets;
    }catch(error){      
        console.log(" mathus-error : " + error);
        //return " mathus-error : " + error;
    }
};

async function getdata_sp_soporte_api_att_esc(){
    try{
        
        let pool = await sql.connect(config);    
        let res = await pool.request().execute('sp_soporte_api_att_esc');
        return res.recordsets;
    }catch(error){      
        console.log(" mathus-error : " + error);
        //return " mathus-error : " + error;
    }
};
async function getdata_sp_soporte_api_att_ddjj_sellos(){
    try{
        
        let pool = await sql.connect(config);    
        let res = await pool.request().execute('sp_soporte_api_att_ddjj_sellos');
        return res.recordsets;
    }catch(error){      
        console.log(" mathus-error : " + error);
        //return " mathus-error : " + error;
    }
};
async function getdata_sp_soporte_api_att_sellos_plazo_fijo(num1,num2,num3){
    try{
        
        //let pool = await sql.connect(config);    
        //let res = await pool.request().input('tipo', sql.VarChar(1), 'N').execute('sp_soporte_api_att_sellos_plazo_fijo');
        //return res.recordsets;
        let pool = await sql.connect(config);
        let request = pool.request();
        request.input('tipo', sql.VarChar(2), 'P');
        request.input('periodo', sql.VarChar(4), '2023');        
        request.input('mes', sql.VarChar(2),'4');
        let res = await request.execute('sp_soporte_api_att_sellos_plazo_fijo');
        return res.recordsets;

    }catch(error){      
        console.log(" mathus-error : " + error);
        //return " mathus-error : " + error;
    }
};
async function getdata_sp_sporte_api_att_analisis_pp(){
    try{
        
        let pool = await sql.connect(config);    
        let res = await pool.request().execute('sp_sporte_api_att_analisis_pp');
        return res.recordsets;
    }catch(error){      
        console.log(" mathus-error : " + error);
        //return " mathus-error : " + error;
    }
};
async function getdata_sp_soporte_proc_att_ddjj_sellos_omisos(){
    try{
        
        let pool = await sql.connect(config);    
        let res = await pool.request().execute('sp_soporte_proc_att_ddjj_sellos_omisos');
        return res.recordsets;
    }catch(error){      
        console.log(" mathus-error : " + error);
        //return " mathus-error : " + error;
    }
};




//######################## RECAUDACION - DIVISION PADRONES ###############################################
async function getdata_sp_soporte_api_rec_pad_ind_exen_au_in(){
    try{
        
        let pool = await sql.connect(config);    
        let res = await pool.request().execute('sp_soporte_api_rec_pad_ind_exen_au_in');
        return res.recordsets;
    }catch(error){      
        console.log(" mathus-error : " + error);
        //return " mathus-error : " + error;
    }
};

module.exports = {
    getdata:getdata,
    getdata_withQuery : getdata_withQuery,
    getdata_recaudacion : getdata_recaudacion,
    getdata_rs:getdata_rs,
    getdata_actividades_ex_blind:getdata_actividades_ex_blind,
    getdata_sp_soporte_bi_consulta_rs:getdata_sp_soporte_bi_consulta_rs,
    getdata_sp_soporte_api_rec_cuentas_activas:getdata_sp_soporte_api_rec_cuentas_activas,
    getdata_sp_soporte_api_rec_bajas_ib:getdata_sp_soporte_api_rec_bajas_ib,
    getdata_sp_soporte_api_bi_consulta_srtp:getdata_sp_soporte_api_bi_consulta_srtp,
    getdata_sp_soporte_api_bi_consulta_nrnp:getdata_sp_soporte_api_bi_consulta_nrnp,
    getdata_sp_soporte_api_att_aforo:getdata_sp_soporte_api_att_aforo,
    getdata_sp_soporte_api_att_esc:getdata_sp_soporte_api_att_esc,
    getdata_sp_soporte_api_att_sellos_plazo_fijo:getdata_sp_soporte_api_att_sellos_plazo_fijo,
    getdata_sp_soporte_api_att_ddjj_sellos:getdata_sp_soporte_api_att_ddjj_sellos,
    getdata_sp_soporte_api_rec_pad_ind_exen_au_in:getdata_sp_soporte_api_rec_pad_ind_exen_au_in,
    getdata_sp_sporte_api_att_analisis_pp:getdata_sp_sporte_api_att_analisis_pp,
    getdata_sp_soporte_proc_att_ddjj_sellos_omisos:getdata_sp_soporte_proc_att_ddjj_sellos_omisos
};

