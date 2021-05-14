import express from 'express';
import { Build } from './model/build';
import {BuildService} from './services/buildsService';
const app = express()
const port = 3000

require('dotenv').config()

app.get('/api/builds', (req, res) => {

  let buildService = new BuildService(`./${process.env.BUILDS_ROOT}`);
  
  buildService.getBuilds().then((builds: Build[]) =>{
    res.send(builds);
  }).catch((error: any) => {
    res.send(`Fetch Builds Error: ${error}`);
  });

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})