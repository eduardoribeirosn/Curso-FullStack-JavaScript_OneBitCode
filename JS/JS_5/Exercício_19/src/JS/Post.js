import dayjs from "dayjs"

export default class Post {
    constructor(author, comments = "") {
        this.author = author
        this.comments = comments
    }
    post(text) {
        const posted = 
        `\n° ${text}\n` +
        `- - - ( ${this.author} - ${dayjs().format("DD/MM/YYYY - HH:mm")} ) - - -\n`

        return posted
    }
}