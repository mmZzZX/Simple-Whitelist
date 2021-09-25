
/*      Initalize Fingerprints       */

const Fingerprints = {
  Synapse_X = 'Syn-Fingerprint',
  Script_Ware_2 = 'Fingerprint',
  Sentinel_V2 = 'Sentinel-Fingerprint',
  Protosmasher = 'Proto-Fingerprint',
  Krnl = 'Krnl-Hwid'
}

const Whitelisted = ['',''] // whitelisted hwids etc

const express = require('express')

// forgot to npm install express

/*

TODO:
create server etc -- done

*/

app.get('/load',(req,res)=>{

// res.write(``) /*   do nothing   */

if (Whitelisted.includes(req.header(Fingerprint.Synapse_X))){
res.write(``) /*  add script there   */
}else if (Whitelisted.includes(req.header(Fingerprint.Script_Ware_2))){
res.write(``) /*  add script there   */
}else if (Whitelisted.includes(req.header(Fingerprint.Sentinel_V2))){
res.write(``) /*  add script there   */
}else if (Whitelisted.includes(req.header(Fingerprint.Protosmasher))){
res.write(``) /*  add script there   */
}else if (Whitelisted.includes(req.header(Fingerprint.Krnl))){
res.write(``) /*  add script there   */
}else{
  res.write(`Not whitelisted!`)
}

res.end('')

}); /*  Route for loading script  */

app.listen(require('./shitty_config.json').port)
