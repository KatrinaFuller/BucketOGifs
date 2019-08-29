export default class Gif {
    constructor(data) {
        this._id = data._id
        this.title = data.title
        this.myUrl = data.myUrl || data.embed_url
    }

    get Template() {
        return `
            <div class="card">
                <iframe src="${this.myUrl}" class="card-img-top" frameborder="0"></iframe>
                <div class="card-body" >
                    
                    <button class="btn btn-warning btn-block" onclick="app.controllers.gifController.captionGif()">Caption Gif</button>

                    <button class="btn btn-danger btn-block" onclick="app.controllers.gifController.deleteGif()">Delete Gif</button>
                </div>
            </div>
            `
    }
}
    // </div>
    // <h5 class="card-title">${this.title}</h5>
    // </div>

// onclick = "app.controllers.gifController.getOne('${this.myUrl}')"