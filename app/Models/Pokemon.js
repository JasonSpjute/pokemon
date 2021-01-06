export default class Pokemon{
    constructor(name, img, description, weight, height, types){
        this.name = name
        this.img = img
        this.description = description
        this.weight = weight
        this.height = height
        this.types = types
    }

    get Template(){
        return /*html*/`
        <div class="row">
        <div class="col"></div>
        <div class="col-5">
            <img src="${this.img}" class = "img-fluid" alt="">
        </div>
        <div class ="col"></div>
    </div> 
    <div class="row">
        <div class="col text-center">
            <h1>${this.name}</h1>
            <h3>Height: ${this.height}</h3>
            <h3>Weight: ${this.weight}</h3>
            <h5>Types: ${this.types.join(", ")}</h5>
            <p>${this.description}</p>
        </div>
    </div>
    `
    }

}