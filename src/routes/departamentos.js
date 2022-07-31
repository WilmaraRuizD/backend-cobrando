const express =require("express");
const router = express.Router();

const mysqlConnection=require('../db/database');


router.get('/departamentos',(req,res) =>{
    mysqlConnection.query(`SELECT * FROM departamento; `,(err,rows,fields)=>{
          if(!err){
            if(rows){
              res.json(rows);
            //   res.status(200).json({ error: 'OK' })
            }else{
                res.status(204).json({ error: 'NO CONTENT BD company ' })   
            }
            }
          else
          {res.status(500).json({ error: 'INTERNAL SERVER ERROR' })       
        }
      });
});

//Filtra lineas por codigo 
router.get('/departamentos/:codigo',(req,res) =>{
    const {codigo}= req.params;
  
    mysqlConnection.query(`SELECT * FROM departamento WHERE codigo=?`,[codigo],(err,rows,fields)=>{
          if(!err){
              if(codigo == null){
                res.status(204).json({ error: 'NO CONTENT BD company ' })  
              }
              else{
                if(rows.length>0){
              res.json(rows) ;}
              else{res.status(409).json({ error: 'departamento con codigo no existe' })}}
            }
          else
          {res.status(500).json({ error: 'INTERNAL SERVER ERROR' })}
      });
  });

  
  router.delete('/departamentos/:codigo',(req,res) =>{
    const {codigo}= req.params;
    mysqlConnection.query(`SELECT * FROM departamento WHERE codigo=?`,[codigo],(err,rows,fields)=>{

        if(!err){
            if(codigo == null){
              res.status(204).json({ error: 'NO CONTENT BD company ' })  
            }
            else{
              if(rows.length>0){
                  
                 mysqlConnection.query('DELETE FROM departamento WHERE codigo= ?',[codigo],(err,rows)=>{
                          if(!err){
                           res.status(200).json({ error: 'Se borro departamento de forma exito' })
                      } ;
                   });
                
                 }
                  else{res.status(409).json({ error: `departamento con codigo no existe` })}
            }
          }
        else
        {res.status(500).json({ error: 'INTERNAL SERVER ERROR' })}
    });
});





  router.post('/departamentos',(req,res)=>{
    const data=req.body;
    console.log(req.body);
       mysqlConnection.query('INSERT INTO departamento set ?', data,(err,departamento)=>{
        if(!err){
        res.redirect('/departamentos');}
        else{
            res.json(err);
        }
       });
    });


    router.put('/departamentos/:codigo', (req, res) => {
        const {newempleados} = req.body;
        console.log(newempleados);
        const {codigo} = req.params;
        console.log(codigo);
     mysqlConnection.query('UPDATE departamento set ? WHERE codigo = ?' , [req.body, codigo], (err, rows) =>{
        if(!err) {
         res.json({status: 'departamento  actualizado exitosamente'});
          
          } else {
            console.log(err);
          }
     });
    });

  module.exports=router ;