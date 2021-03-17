import express from 'express';
import {BuildService} from './services/buildsService';
const app = express()
const port = 3000

app.get('/getbuild', (req, res) => {

  let buildService = new BuildService();
  let buildNumber = buildService.getBuild(7); 

  res.send(`Build: ${buildNumber}`);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})