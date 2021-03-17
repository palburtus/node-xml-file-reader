import express from 'express';
import {BuildService} from './services/buildsService';
const app = express()
const port = 3000

app.get('/api/build', (req, res) => {

  let buildService = new BuildService();
  
  buildService.getBuild(9).then((build) =>{
    res.send(`Build: ${build.number}`);
  }).catch((error) => {
    res.send(`Build: ${error}`);
  });

  
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})