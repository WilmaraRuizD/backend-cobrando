/**
 * @swagger
 * components:
 *  schemas:
 *      departamentos:
 *          type: object
 *          properties:
 *              codigo:
 *                  type: string
 *                  description: tipo de habitacion 
 *              nombre:
 *                  type: string
 *                  description: descripcion de la habitacion del hostal
 *              presupuesto:
 *                  type: string
 *                  description: fotos de las habitaciones  
 *          required: 
 *                  - codigo:
 *                  - nombre:
 *                  - presupuesto:
 *      empleados:
 *          type: object
 *          properties:
 *              codigo:
 *                  type: string
 *                  description: tipo de habitacion 
 *              nit:
 *                  type: string
 *                  description: descripcion de la habitacion del hostal
 *              nombre:
 *                  type: string
 *                  description: fotos de las habitaciones 
 *              apellido1:
 *                  type: string
 *                  description: fotos de las habitaciones 
 *              apellido2:
 *                  type: string
 *                  description: fotos de las habitaciones 
 *              codigo_departamento:
 *                  type: string
 *                  description: fotos de las habitaciones 
 *          required: 
 *                  - codigo:
 *                  - nit
 *                  - nombre:
 *                  - apellido1:
 *                  - apellido2:
 *                  - codigo_departamento
 *          
 * 
*/
/**
 * @swagger
 * /departamentos:
 *  get:
 *      summary: Trae todas los hostal
 *      tags: [departamentos]
 *      responses:
 *          200:
 *              description: Lista de todos los hostal
 *              content:
 *                 application/json:
 *                  schema:
 *                     type: array
 *                     items:
 *                       $ref: '#/components/schemas/departamentos'
 *
 */
/**
 * @swagger
 * /departamentos/{codigo}:
 *  get:
 *      summary: Consulta las hostales por su id 
 *      tags: [departamentos]
 *      parameters:
 *        - in: path
 *          name: codigo
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador de los hostales
 *      responses:
 *          200:
 *              description: Se consultó hostales por ID
 *          500:
 *              description: Error en el servidor
 */
/**
 * @swagger
 * /departamentos/{codigo}:
 *  put:
 *      summary: Edita un hostal pasándole el ID como parámetro
 *      tags: [departamentos]
 *      parameters:
 *        - in: path
 *          name: codigo
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador de los usuarios
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   $ref: '#/components/schemas/codigo'
 *      responses:
 *          200:
 *              description: Se editó de manera correcta 
 *              content:
 *                 application/json:
 *                  schema:
 *                     type: object
 *                     $ref: '#/components/schemas/users'
 *          400:
 *              description: Error en envío de datos por parte del cliente 
 *          500:
 *              description: Error en el servidor
 */
/** 
 * @swagger
 * /departamentos/{codigo}:
 *  delete:
 *      summary: Elimina los usuarios pasándole el ID como parámetro
 *      tags: [departamentos]
 *      parameters:
 *        - in: path
 *          name: codigo
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador de la usuarios 
 *      responses:
 *          200:
 *              description: usuarios eliminada
 *          500:
 *              description: Error en el servidor
 *
 */

/**
 * @swagger
 * /departamentos:
 *  post:
 *      summary: Crea un nuevo usuarios
 *      tags: [departamentos]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   $ref: '#/components/schemas/departamentos'
 *      responses:
 *          200:
 *              description: usuario creado
 *          400:
 *              description: usuario no creada por error en el envío de datos
 *          500:
 *              description: Hostal no creada por error en el servidor
*/
/**
 * @swagger
 * /empleados:
 *  get:
 *      summary: Trae todas los hostal
 *      tags: [empleados]
 *      responses:
 *          200:
 *              description: Lista de todos los hostal
 *              content:
 *                 application/json:
 *                  schema:
 *                     type: array
 *                     items:
 *                       $ref: '#/components/schemas/departamentos'
 *
 */
/**
 * @swagger
 * /empleados/{codigo}:
 *  get:
 *      summary: Consulta las hostales por su id 
 *      tags: [empleados]
 *      parameters:
 *        - in: path
 *          name: codigo
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador de los hostales
 *      responses:
 *          200:
 *              description: Se consultó hostales por ID
 *          500:
 *              description: Error en el servidor
 */
/** 
 * @swagger
 * /empleados/{codigo}:
 *  delete:
 *      summary: Elimina los usuarios pasándole el ID como parámetro
 *      tags: [empleados]
 *      parameters:
 *        - in: path
 *          name: codigo
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador de la usuarios 
 *      responses:
 *          200:
 *              description: usuarios eliminada
 *          500:
 *              description: Error en el servidor
 *
 */
/**
 * @swagger
 * /empleados:
 *  post:
 *      summary: Crea un nuevo usuarios
 *      tags: [empleados]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   $ref: '#/components/schemas/empleados'
 *      responses:
 *          200:
 *              description: usuario creado
 *          400:
 *              description: usuario no creada por error en el envío de datos
 *          500:
 *              description: Hostal no creada por error en el servidor
*/

/**
 * @swagger
 * /empleados/{codigo}:
 *  put:
 *      summary: Edita un hostal pasándole el ID como parámetro
 *      tags: [empleados]
 *      parameters:
 *        - in: path
 *          name: codigo
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador de los usuarios
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   $ref: '#/components/schemas/codigo'
 *      responses:
 *          200:
 *              description: Se editó de manera correcta 
 *              content:
 *                 application/json:
 *                  schema:
 *                     type: object
 *                     $ref: '#/components/schemas/users'
 *          400:
 *              description: Error en envío de datos por parte del cliente 
 *          500:
 *              description: Error en el servidor
 */