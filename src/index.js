const express = require ('express');
const app=express();
const dev=require('dotenv').config();
const morgan =require('morgan')
const swaggerUi=require('swagger-ui-express');
const swaggerJsDoc=require('swagger-jsdoc');


//settings 
app.use(morgan('dev'))
//configuracion del servidor

//Documentation
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
        title: 'API REST Cobrando S.A.S', 
        description: 'Esta es la documentación de la API en node js-Mysql, creada como requisito del la prueba tecnica de desarrollador', 
        contact: {
            name: 'Wilmara Ruiz Diaz', 
            email: 'wilmara_andreina93@hotmail.com'
        }, 
        servers: ['http://localhost:3010'], 
        version: '1.0'
    }
}, 
apis: [`./src/docs/*.js`]

}

const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.set('port', process.env.PORT||3000)

//middewares es funciones que se ejecutan antes de 
app.use(express.json());

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
 })

 //Routes 
 app.use(require('./routes/employees'));
 app.use(require('./routes/departamentos'));

//app.use('/api/empleados',require('./router/employees.js'));
  //  app.use('/api/',require('./router/departamentos'));

