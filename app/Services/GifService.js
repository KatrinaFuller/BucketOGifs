import Gif from "../Models/Gif.js";

// @ts-ignore
let _gifApi = axios.create({
    baseURL: 'http://api.giphy.com/v1/gifs/trending?api_key=AtAin7xuzHbRp5JwVA2BgNq5IlvEOBsV'
})

// @ts-ignore
let _sandBox = axios.create({
    baseURL: '//bcw-sandbox/herokuapp.com/api/Katrina/gifs'
})

//Private
let _state = {
    myGif: [],
    apiGif: [],
    currentGif: {}

}

//NOTE methods to run when a given property in state changes
let _subscribers = {
    myGif: [],
    apiGif: [],
    currentGif: []
}

function _setState(propName, data) {
    //NOTE add the data to the state
    _state[propName] = data
    //NOTE run every subscriber function that is watching that data
    _subscribers[propName].forEach(fn => fn());
}

//Public
export default class ValuesService {
    //NOTE adds the subscriber function to the array based on the property it is watching
    addSubscriber(propName, fn) {
        _subscribers[propName].push(fn)
    }

    get myGif() {
        return _state.myGif.map(g => new Gif(g))  //making a new copy of Gif
    }

    get ApiGif() {
        return _state.apiGif
    }

    get CurrentGif() {
        return new Gif(_state.currentGif)
    }
}
