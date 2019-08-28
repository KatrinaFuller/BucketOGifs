import Gif from "../Models/Gif.js";

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
}
