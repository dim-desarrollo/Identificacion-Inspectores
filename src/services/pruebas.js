export function DatosJson(){
    return fetch(import.meta.env.VITE_API_JSON)
          .then(response => response.json())
          .then(json => {
            return json
          })
} 


