// const URL = "http://172.20.255.15:3010"
// const URL = "http://172.20.254.38:8080"
const URL = "http://dimsmt.gob.ar:3010"   // produccion
const URLN = "http://172.20.255.17:3010"  // lista-para-pruduccion-uso-interno 
const URLIMG = "http://172.20.255.17:3010"

export function getAgenteById(id) {
  return fetch('http://localhost:3000/agentes.json')
    .then(res => res.json())
    .then(resu => {
      // eslint-disable-next-line eqeqeq
      const agente = resu.find(a => a.id == id)
      console.log(agente)
      return agente
    })
}

export function getAgenteByNum(num) {
  //return fetch(`http://localhost:5173/agentes.json`, options)

  const options = { method: 'GET' };
  console.log("---- Afiliado ----")
  console.log(num)

  return fetch(`${import.meta.env.VITE_URL_API}/api/inspector?hashLagajo=${num}`, options)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      // const agente = response.find(a => a.id == num)
      // console.log(agente)
      return response
    })
    .catch(err => console.error(err));
}

export function postInsertImg(Num, img) {

  var formdata = new FormData();
  formdata.append("Legajo", Num);
  formdata.append("Imagen", img);

  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };

  console.log("----- Numero Afiliado -----")
  console.log(Num)
  console.log("----- Imagen -----")
  console.log(img)

  fetch(`${import.meta.env.VITE_URL_API}/api/subi-imagen`, requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}