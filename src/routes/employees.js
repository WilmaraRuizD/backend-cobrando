const express =require("express");
const router = express.Router();

const mysqlConnection=require('../db/database');

router.get('/empleados',(req,res) =>{
    mysqlConnection.query(`SELECT * FROM empleados `,(err,rows,fields)=>{
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
router.get('/empleados/:codigo',(req,res) =>{
    const {codigo}= req.params;
  
    mysqlConnection.query(`SELECT * FROM empleados WHERE codigo=?`,[codigo],(err,rows,fields)=>{
          if(!err){
              if(codigo == null){
                res.status(204).json({ error: 'NO CONTENT BD company ' })  
              }
              else{
                if(rows.length>0){
                    res.json(rows) ;}
                    else{res.status(409).json({ error: 'empleado con codigo no existe' })}
              }
            }
          else
          {res.status(500).json({ error: 'INTERNAL SERVER ERROR' })}
      });
  });

  router.delete('/empleados/:codigo',(req,res) =>{
    const {codigo}= req.params;
    mysqlConnection.query(`SELECT * FROM empleados WHERE codigo=?`,[codigo],(err,rows,fields)=>{

        if(!err){
            if(codigo == null){
              res.status(204).json({ error: 'NO CONTENT BD company ' })  
            }
            else{
              if(rows.length>0){
                  
                 mysqlConnection.query('DELETE FROM empleados WHERE codigo= ?',[codigo],(err,rows)=>{
                          if(!err){
                           res.status(200).json({ error: 'Se borro empleado de forma exito' })
                      } ;
                   });
                
                 }
                  else{res.status(409).json({ error: 'empleado con codigo no existe' })}
            }
          }
        else
        {res.status(500).json({ error: 'INTERNAL SERVER ERROR' })}
    });
});


//     mysqlConnection.query('DELETE FROM empleados WHERE codigo= ?',[codigo],(err,rows)=>{
//         if(!err){
//           res.status(200).json({ error: 'Se borro empleado de forma exito' })
//         }
//         else
//         {res.status(500).json({ error: 'Internal error server' })}
//     } );
//   });

  //crear registro 
router.post('/empleados',(req,res)=>{
    const data=req.body;
    console.log(req.body);
       mysqlConnection.query('INSERT INTO empleados set ?', data,(err,lineas)=>{
        if(!err){
        res.redirect('/empleados');}
        else{
            res.json(err);
        }
       });
    });

   
  router.put('/empleados/:codigo', (req, res) => {
    const {newempleados} = req.body;
    console.log(newempleados);
    const {codigo} = req.params;
    console.log(codigo);
 mysqlConnection.query('UPDATE empleados set ? WHERE codigo = ?' , [req.body, codigo], (err, rows) =>{
    if(!err) {
     res.json({status: 'empleado actualizado exitosamente'});
      
      } else {
        console.log(err);
      }
 });
});
module.exports=router ;



