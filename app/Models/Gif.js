export default class Gif {
    constructor(data) {
        this.title = data.title
        this.url = data.url
    }

    get Template() {
        return this.title
    }
}