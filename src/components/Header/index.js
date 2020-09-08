import React,{Component} from 'react'
import './header.css'

class Header extends Component{
	render(){
		return(
			<header className="root-header">
				<figure>
					<img className="logo-img" src='https://www.rierehabilitacion.com.mx/wp-content/uploads/2017/10/twitter-2-blanco-rie-rehabilitacion-300x300.png' />
				</figure>
				<h1 className="logo">Twitter React</h1>
			</header>
		)
	}
}
//componente representacional
/*function Header (){
	return(
		<header className="root-header">
			<figure>
				<img className="logo-img" src='https://www.rierehabilitacion.com.mx/wp-content/uploads/2017/10/twitter-2-blanco-rie-rehabilitacion-300x300.png' />
			</figure>
			<h1 className="logo">Twitter React</h1>
		</header>
	)
}*/
export default Header
