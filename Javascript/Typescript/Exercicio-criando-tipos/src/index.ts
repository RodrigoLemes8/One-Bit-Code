// index.ts
// Declarando os tipos

type PlanetSituation = 'Habitado' | 'Habitável' | 'Inabitável' | 'Inexplorado'

type PlanetCoordinates = [number, number, number, number]

type Planet = {
  name: string
  coordinates: PlanetCoordinates
  situation: PlanetSituation
  satellites: string[]
}



// Funções Principais

// Aqui tiramos vantagem do Alias para manipularmos
// mais precisamente nosso array de planetas
const planets: Planet[] = []

function addPlanet(name: string, coordinates: PlanetCoordinates, situation: PlanetSituation) {
  // Repare que agora o autocompletar consegue nos
  // sugerir as propriedades mesmo dentro da função
  planets.push({
    name,
    coordinates,
    situation,
    satellites: []
  })

  alert(`O planeta ${name} foi salvo com sucesso.`)
}

function findPlanet(name: string) {
  const planet = planets.find(planet => planet.name === name)

  // Utilizando o operador nullish coalescing podemos
  // garantir que nosso retorno será um tipo Union
  return planet ?? false
}


// Graças ao Alias a anotação de tipos nos
// argumentos da função fica bem mais enxuta
function updateSituation(situation: PlanetSituation, planet: Planet) {
  planet.situation = situation

  alert(`A situação do planeta ${planet.name} foi atualizada para "${situation}".`)
}


// Mais uma vez o Alias se mostra muito útil para encurtar
// nosso código mas mantendo as vantagens do typescript
function addSatellite(name: string, planet: Planet) {
  planet.satellites.push(name)

  alert(`O satélite ${name} foi adicionado ao planeta ${planet.name}.`)
}

function removeSatellite(name: string, planet: Planet) {
  // Repare o quanto o autocompletar se torna inteligente
  // nesse caso apenas porque anotamos os tipos
  planet.satellites = planet.satellites.filter(satellite => satellite !== name)

  alert(`O satélite ${name} foi removido do planeta ${planet.name}.`)
}
