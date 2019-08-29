import Gif from "../Models/Gif.js";

// @ts-ignore
let _gifApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs/trending?api_key=AtAin7xuzHbRp5JwVA2BgNq5IlvEOBsV&limit=1'
})

// @ts-ignore
let _sandBox = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/Katrina/gifs'
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
export default class GifService {
    //NOTE adds the subscriber function to the array based on the property it is watching
    addSubscriber(propName, fn) {
        _subscribers[propName].push(fn)
    }

    // setOne(id) {
    //     let gif = _state.myGif.find(g => g._id == id)
    //     _setState('currentGif', gif)
    // }

    get MyGif() {
        return _state.myGif.map(g => new Gif(g))  // making a new copy of Gif
    }

    get ApiGif() {
        return _state.apiGif.map(g => new Gif(g))
    }

    get CurrentGif() {
        return new Gif(_state.currentGif)
    }

    // #region GifApi
    getAllApi() { // getting all the api
        _gifApi.get()
            .then(res => {
                _setState('apiGif', res.data.data)
                console.log(res.data.data)
            })
            .catch(err => console.error(err))
    }

    // getOne(myUrl) {
    //     _gifApi.get(myUrl)
    //         .then(res => {
    //             let gif = new Gif(res.data)
    //             _setState('currentGif', gif)
    //             console.log(gif);
    //         })
    //         .catch(err => console.error(err))
    // }

    captionGif() {
        //click the button and it moves to the middle to add a caption
    }

    // endregion


    // #region Sandbox
    getMyGif() {
        _sandBox.get()
            .then(res => {
                console.log(res)
                let data = res.data.data.map(g => new Gif(g))
                _setState('myGif', data)
            })
            .catch(err => console.error(err))
    }



    // endregion



}
