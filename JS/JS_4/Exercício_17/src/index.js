import dayjs from 'dayjs'
import './styles/index.css'

const today = dayjs()
console.log(`Hoje é ${today.format("DD/MM/YYYY")}`)
console.log(`Deu certo!!`)