import React from 'react'
import { Grid, Row } from 'react-bootstrap'
import Login from './Login'

class App extends React.Component {

	state = this.props.store.getState()

	onStoreChange = () => {
		this.setState(this.props.store.getState())
	}

	componentDidMount() {
		this.subscriptionId = this.props.store.subscribe(this.onStoreChange)
		// this.props.store.startClock()
	}

	componentWillUnmount() {
		this.props.store.unsubscribe(this.subscriptionId)
	}

	render () {
		// const appStyles = {backgroundColor: '#1F2A40', color: '#FFFFFF', paddingTop: '15px', height: '100%'}
		return (
			<div className='app'>
				<Grid>
					<Row>
						<h2>PAO APP</h2>
						<Login />
					</Row>
				</Grid>
			</div>
		)
	}
}

export default App