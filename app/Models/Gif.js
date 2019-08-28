export default class Gif {
    constructor(data) {
        this._id = data._id
        this.title = data.title
        this.myUrl = data.myUrl || data.embed_url
    }

    get Template() {
        return `
            <div class="col">
                <div class="card">
                    <iframe src="${this.myUrl}" class="card-img-top" frameborder="0"></iframe>
                    <div class="card-body">
                        <h5 class="card-title">${this.title}</h5>
                    </div>
                </div>
            </div>
        `
    }
}