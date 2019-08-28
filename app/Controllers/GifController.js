import GifService from "../Services/GifService.js";

//Private
let _gifService = new GifService()

function _drawApiGif() {
    let gif = _gifService.ApiGif
    let template = ''
    gif.forEach(g => {
        template += `<div onclick="app.controllers.gifController.getOne('${g.myUrl}')">${g.myUrl}</div>`
    })
    document.getElementById('api-gif').innerHTML = template
}

function _drawCurrentGif() {
    document.getElementById('current-gif').innerHTML = _gifService.CurrentGif.Template
}

function _drawMyGif() {
    let gif = _gifService.MyGif
    let template = ''
    gif.forEach(g => {
        template += `<div onvlivk="app.controllers.gifController.setOne('${g._id}')">${g.myUrl}</div>`
    })
    document.getElementById('my-gif').innerHTML = template
}

//Public
export default class GifController {
    constructor() {
        //NOTE Register all subscribers
        _gifService.addSubscriber('apiGif', _drawApiGif)
        _gifService.addSubscriber('currentGif', _drawCurrentGif)
        _gifService.addSubscriber('myGif', _drawMyGif)

        //NOTE Retrieve data
        _gifService.getAllApi()
        _gifService.getMyGif()
    }
}