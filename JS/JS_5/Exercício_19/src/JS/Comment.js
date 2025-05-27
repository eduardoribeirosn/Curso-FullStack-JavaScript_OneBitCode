import dayjs from "dayjs"

export default class Comment {
    constructor(name) {
        this.name = name
        this.comment = []
    }
    addComments(text) {
        const comments = 
        [`\n- ${text} - ${this.name} (${dayjs().format("DD/MM - HH:mm")})`]
        this.comment.push(comments)

        return this.comment
    }
}