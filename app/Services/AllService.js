import { ProxyState } from "../AppState.js"
import { pokeApi } from "./AxiosService.js"

class AllService{
    async getAllPokemon(){
        let res = await pokeApi.get('')
        console.log(res)
        ProxyState.allPokemon = res.data.results
        
    }
}

export const allService = new AllService()