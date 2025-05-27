import a from "./JS/Author.js"
import p from "./JS/Post.js"
import c from "./JS/Comment.js"

const edu = new a("Eduardo")
const mat = new a("Matheus")

edu.postt(new p(edu.name).post("Esse é meu primeiro post - Hello Word!!"))
edu.postt(new p(edu.name).post("Em busca de migrar para a área de TI!"))

mat.postt(new p(mat.name).post("Também estou em busca de migrar para a área de TI"))

edu.addComen(new c("Matheus").addComments("Estou estudando para conseguir migrar também Eduardo, quer estudar juntos?"), 1)

edu.addComen(new c("Lucas").addComments("Eu também quero estudar junto com vocês!!!"), 1)

console.log('\n\n\n')

console.log(edu.post[1])