import React, {Component} from 'react'
import './profile.css'

class Profile extends Component{
	render(){
		return(
				<div className='profile-root'>
					<figure>
					    <img className='profile-avatar' src={this.props.picture} />
					</figure>
					<span className='profile-name'> {this.props.displayName}</span>
					<ul className='profile-data'>
						<li><span className='fa fa-user'></span> {this.props.userName}</li>
						<li><span className='fa fa-envelope'></span> {this.props.emailAddress}</li>
						<li><span className='fa fa-map-marker'></span> {this.props.location}</li>
					</ul>
				</div>
			)
	}
}
export default Profile