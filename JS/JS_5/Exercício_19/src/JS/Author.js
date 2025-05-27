export default class Author {
    constructor(name) {
        this.name = name
        this.post = []
    }
    postt(post) {
        const posted = post
        this.post.push({posts: posted, idC: 0, comments: []})
        // if(this.post) {
        //     this.post.forEach((value, i) => {
        //         value["post-" + i] = value[posted]
        //     })
        // }
        return console.log(`Postado`), console.log(posted)
    }
    addComen(commen, idPost) {
        const comment = commen
        // if(!this.post[idPost].comments) {
        //     this.post[idPost].comments = []
        // }
        this.post[idPost].idC++
        this.post[idPost].comments.push(comment[0])
    }
    commentsO(idPost) {
        let sla2 = ""
        for (let id = 0; id < this.post[idPost].comments.length; id++) {
            sla2 += ` ${id + 1}° Comentário: ${this.post[idPost].comments[id]}\n`;
        }
        return sla2
    }
}