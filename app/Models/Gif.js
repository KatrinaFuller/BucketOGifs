export default class Gif {
    constructor(data) {
        this.title = data.title
        this.url = data.url || data.embed_url
    }

    get Template() {
        return `
            <div class="col">
                <div class="card">
                    <img src="${this.url}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${this.title}</h5>
                    </div>
                </div>
            </div>
        `
    }
}