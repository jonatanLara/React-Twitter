import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch, useParams} from 'react-router-dom';

import './app.css'
import Header from '../Header'
import Main from '../Main'
import Profile from '../Profile'
import Login from '../Login'
import firebase from 'firebase'

class App extends Component{
	constructor(){
		super()
		this.state = {
			user: null
			//user:null
		}
	}

	componentWillMount(){
		//const user = firebase.auth.currentUser
		firebase.auth().onAuthStateChanged(user =>{
			if(user){
				this.setState({user})
				console.log(user)

			}else{
				this.setState({user:null})
				console.log('Usuario No autenticado')
			}
		})
	}

	handleOnAuth(){
		const provider = new firebase.auth.GithubAuthProvider()
		firebase.auth().signInWithPopup(provider)
			.then(result => console.log(`${result.user.email} ha iniciado sesion`))
			.catch(error => console.log(`Error: ${error.code}: ${error.message}`))
		console.log('Auth')
	}
	handleLogout(){
		firebase.auth().signOut()
		.then(()=> console.log('Te has desconectado correctamente'))
		.catch(()=> console.error('Un error ocurrió'))
		console.log('Salir')
	}

	render(){
		return(
			<div>
				<Header/>
				<Router>
					<Switch>
						 <Route exact path='/' render ={()=>{
							 if(this.state.user){
								 return (
									 <Main
									 	user={this.state.user}
										onLogout={this.handleLogout.bind(this)}
									 />
								 )
							 }else{
								 //login
								 return(
									 <Login onAuth={this.handleOnAuth.bind(this)} />
								 )
							 }
						 }}/>
						 <Route path='/profile' render={()=>{
							 //render profile
							 return(
									 <Profile
										 picture={this.state.user.photoURL}
										 userName={this.state.user.email.split('@')[0]}
										 displayName={this.state.user.userName}
										 location={this.state.user.location}
										 emailAddress={this.state.user.email}
									 />
								 )
						 }}/>
						 <Route path='/user/:userName' render={()=>{
							 let nombre = "jonatan"
							 return(
									 <Profile
										 displayName={nombre}
									 />

								 )
						 }}/>
				 	 </Switch>
	      </Router>
			</div>
		)
	}
}
export default App
