const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
 * 
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar/listar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de parâmetros:
   * 
   * Query: Parâmetros nomeados enviados na rota após "?", (Filtros, paginação)
   * Route: Parâmetros utilizados para identificar recursos
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */
/*

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 
------------------------------------------------------------------------------------
Exemplo query params

app.get('/users', (request, response) => {
    const params = request.query;

    console.log(params);

    return response.json({
        evento: 'Semana Omni 11',
        aluno: 'Ricardo'
    });
})

app.listen(3333);
--------------------------------------------------------------------------------------
*/

/* ROUTE PARAMS

app.get('/users/:id', (request, response) => {
    const params = request.params;

    console.log(params);

    return response.json({
        evento: 'Semana Omni 11',
        aluno: 'Ricardo'
    });
})

app.listen(3333);

*/

/* BODY 
app.post('/users', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json({
        evento: 'Semana Omni 11',
        aluno: 'Ricardo'
    });
})

app.listen(3333);

*/



app.listen(3333);