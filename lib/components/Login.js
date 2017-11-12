import React from 'react'

import {
	Col,
	Button,
	Form,
	FormGroup,
	FormControl,
	ControlLabel,
	Checkbox
} from 'react-bootstrap'

class Login extends React.Component {
	render() {
		const appStyles = {backgroundColor: '#1F2A40', color: '#FFFFFF', paddingTop: '15px', display: 'flex', justifyContent: 'center'}
		return (
			<div style={appStyles}>
			  <Form horizontal>
			    <FormGroup controlId="formHorizontalEmail">
			      <Col componentClass={ControlLabel} sm={3}>
			        Email
			      </Col>
			      <Col sm={10}>
			        <FormControl type="email" placeholder="Email" />
			      </Col>
			    </FormGroup>

			    <FormGroup controlId="formHorizontalPassword">
			      <Col componentClass={ControlLabel} sm={3}>
			        Password
			      </Col>
			      <Col sm={10}>
			        <FormControl type="password" placeholder="Password" />
			      </Col>
			    </FormGroup>

			    <FormGroup>
			      <Col smOffset={3} sm={10}>
			        <Checkbox>Remember me</Checkbox>
			      </Col>
			    </FormGroup>

			    <FormGroup>
			      <Col smOffset={3} sm={10}>
			        <Button type="submit" href='/dashboard'>
			          Sign in
			        </Button>
			      </Col>
			    </FormGroup>
			  </Form>
		  </div>
		)
	}
}

export default Login