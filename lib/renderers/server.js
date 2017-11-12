import React from 'react'
import ReactDOMServer from 'react-dom/server'

import axios from 'axios'
import StateApi from 'state-api'
import App from 'components/App'
import Login from 'components/Login'
import config from 'config'

const serverRender = async (url) => {

	const store = new StateApi()

	return {
		initialMarkup: ReactDOMServer.renderToString(
			<App store={store} />
		)
	}
}

export default serverRender