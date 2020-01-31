var response
// //  Request en paralelo
// jQuery.ajax('https://rickandmortyapi.com/api/', {
//     success: function (response) {
//      console.log('Request 1')
//      window.response = response
//     }
//   })
//   jQuery.ajax('https://rickandmortyapi.com/api/', {
//     success: function (response) {
//      console.log('Request 2')
//     }
//  })
//   console.log('Mensaje 1', response)

// Sincronizados
const entrada = document.querySelector('.entrada')
const contenedor = document.querySelector('.contenedor')

jQuery.ajax('https://rickandmortyapi.com/api/', {
    success: function (response) {
        // obteniendo personajes
        jQuery.ajax(response.characters, {
            success: function (response) {
                console.log('lista de personajes', response)
                response.results.forEach(function (personaje) {
                    contenedor.innerHTML = contenedor.innerHTML + `<div
              Class ="personaje">
              <img src="${personaje.image}" alt =""/>
              <h3>${personaje.name}</h3>
              <h3>Estado:  ${personaje.species}</h3>
              <h3>Estado:  ${personaje.status}</h3>
              <h3>Genero:  ${personaje.gener}</h3>
              <h3>Origen:  ${personaje.origin}</h3>
              </div>`

                })
            }
        })
    }
}),

    function(buscar) {
        
        jQuery.ajax('https://rickandmortyapi.com/api/', {
              data: name = entrada,
            success: function (entrada) {
                // obteniendo personajes
                jQuery.ajax(entrada.characters, {
                    success: function (entrada) {
                        console.log('lista de personaje busado', entrada)
                        entrada.results.forEach(function (personaje) {
                            contenedor.innerHTML = contenedor.innerHTML + `<div
              Class ="personaje">
              <img src="${personaje.image}" alt =""/>
              <h3>${personaje.name}</h3>
              <h3>Estado:  ${personaje.species}</h3>
              <h3>Estado:  ${personaje.status}</h3>
              <h3>Genero:  ${personaje.gener}</h3>
              <h3>Origen:  ${personaje.origin}</h3>
              </div>`

                        })
                    }
                })
            }
        })
    }