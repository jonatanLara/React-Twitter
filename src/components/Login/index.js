import React from 'react'
import './login.css'
import PropTypes from 'prop-types';
const propTypes = {
	onAuth: PropTypes.func.isRequired
}
function Login({onAuth}){
	return(
		<div className='login-root'>
			<p className='login-text'>Necesitamos que inicies
			sesion con tu cuenta de
			GitHub para que puedas leer y escribir mensajes
			</p>
			<button
				onClick = {onAuth}
				className ='login-button'
			>
			<span className='fa fa-github'></span> Login con GitHub
			</button>
		</div>
	)
}
//Login.propTypes = propTypes
export default Login
