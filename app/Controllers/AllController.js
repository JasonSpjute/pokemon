import { ProxyState } from "../AppState.js"
import { allService } from "../Services/AllService.js"

function _drawPokemon(){
    let template = ''
    ProxyState.allPokemon.forEach(poke => {
        template += `<li>${poke.name}</li>`
    })
        document.getElementById('api-pokemon').innerHTML = template
}

export default class AllController{
    constructor(){
        ProxyState.on('allPokemon', _drawPokemon)
        this.getAllPokemon()
    }

    getAllPokemon(){
        try{
            allService.getAllPokemon()
        }
        catch(error){
            console.error(error)
        }
    }
}