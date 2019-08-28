import GifService from "../Services/GifService.js";

//Private
let _gifService = new GifService()

function _drawApiGif() {
    let gif = _gifService.ApiGif
    let template = ''
    gif.forEach(g => {
        template += `<div onclick="app.controllers.gifController.getOne('${g.url}')">${g.url}</li>`
    })
    document.getElementById('api-gif').innerHTML = template
}

//Public
export default class GifController {
    constructor() {
        //NOTE Register all subscribers


        //NOTE Retrieve data
        _gifService.getAllApi()
    }
}