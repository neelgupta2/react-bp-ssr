import express from 'express'
import config from './config'
import morgan from 'morgan'
import serverRender from 'renderers/server'

const app = express()

app.use(morgan('tiny'))

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', async (req, res) => {
	const initialContent = await serverRender()
	res.render('index', { ...initialContent })
})

app.listen(config.port, () => {
	console.info(`Running on ${config.port}...`)
})
