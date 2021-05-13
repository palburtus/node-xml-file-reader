import express from 'express';
import { Build } from './model/build';
import {BuildService} from './services/buildsService';
const app = express()
const port = 3000

app.get('/api/build', (req, res) => {

  let buildService = new BuildService();
  
  buildService.getBuilds().then((build: Build) =>{
    res.send(`Build: ${build.meta.number}`);
  }).catch((error: any) => {
    res.send(`Build read error: ${error}`);
  });

  
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})