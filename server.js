const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler();
const axios = require('axios');

const token = require('./token');
axios.defaults.headers.common['Authorization'] = `Token token="${token}"`;


app.prepare()
  .then(() => {
    const server = express();
    
      server.post('/adduser', async(req, res) => {
      const userData = req.body
      const data = await axios.post('https://cors-anywhere.herokuapp.com/https://demo.vnda.com.br/api/v2/users', userData);
     
      res.status(data.status);
      res.json(data);
    })

    server.get('/edituser/:id', (req, res) => {
      app.render(req, res,'/edituser', {id: req.params.id});
    })
  
    server.patch('/edituser/:id', async(req, res) => {
      const userData = req.body
      const data = await axios.patch(`https://demo.vnda.com.br/api/v2/users/${req.params.id}`, userData);
      
      res.status(data.status);
      res.json(data);
    })

   

    server.get('*', (req, res) => {
      return handle(req, res)
    })

  
    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })

