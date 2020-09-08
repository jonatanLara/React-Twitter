import React, {Component} from 'react'
import { v4 as uuidv4 } from 'uuid';
import MessageList from '../MessageList'
import InputText from '../InputText'
import ProfileBar from '../ProfileBar'
import firebase from 'firebase'

class Main extends Component{
	constructor(props){
		super(props)
		this.state = {
			user: Object.assign({},this.props.user,{retweets:[]},{favorites:[]}),
			openText: false,
			userNameToReply: '',
			messages: []
		}
	}
	componentWillMount(){
		const messagesRef = firebase.database().ref().child('messages')
		messagesRef.on('child_added',snapshot =>{
			console.log(snapshot)
			this.setState({
				messages: this.state.messages.concat(snapshot.val()),
				openText: false
			})
		})
	}
	handleOpenText (event){
		event.preventDefault()
		this.setState({openText: true})
	}

	handleSendText(event){
		event.preventDefault()
		let newMessage ={
			id: uuidv4(),
			userName: this.props.user.email.split('@')[0],
			displayName: this.props.user.displayName,
			picture: this.props.user.photoURL,
			date: Date.now(),
			text: event.target.text.value,
			favorites: 0,
			retweets: 0
		}

		const messageRef = firebase.database().ref().child('messages')
		const messageID = messageRef.push()
		messageID.set(newMessage)
		//console.log(newMessage)
	//	this.setState({
		//	messages: this.state.messages.concat([newMessage]),
			//openText: false
	//	})
	}

	handleCloseText(event){
		event.preventDefault()
		this.setState({openText: false})
	}
	handleRetweet(msgId){
		let alreadyRetweeted = this.state.user.retweets.filter(rt => rt === msgId)
		if(alreadyRetweeted.length === 0){
			let messages = this.state.messages.map(msg =>{
				if(msg.id === msgId){
					msg.retweets++
				}
				return msg
			})
			let user = Object.assign({}, this.state.user)
			user.retweets.push(msgId)
			this.setState({
				messages: messages,
				user:user
			})
		}
	}
	handleFavorite(msgId){
		let alreadyFavorited = this.state.user.favorites.filter(fav => fav === msgId)
		if(alreadyFavorited.length === 0){
			let messages = this.state.messages.map(msg =>{
				if(msg.id === msgId){
					msg.favorites++
				}
				return msg
			})
		let user = Object.assign({},this.state.user)
		user.favorites.push(msgId)
		this.setState({
			messages: messages,
			user:user
		})
		}
	}

	handleReplyTweet(msgId, userNameToReply){
		this.setState({
			openText: true,
			userNameToReply: userNameToReply
		})
	}

	renderOpenText(){
		if(this.state.openText){
			return (
					<InputText
						onSendText={this.handleSendText.bind(this)}
						onCloseText={this.handleCloseText.bind(this)}
						userNameToReply={this.state.userNameToReply}
					/>
				)
		}
	}
	render(){
		return (
			<div>
				<ProfileBar
				picture={this.props.user.photoURL}
				userName={this.props.user.email.split('@')[0]}
				//userName={this.props.user.email}
				onOpenText={this.handleOpenText.bind(this)}
				onLogout={this.props.onLogout}
				 />
				{this.renderOpenText()}
				<MessageList
					messages={this.state.messages}
					onRetweet={this.handleRetweet.bind(this)}
					onFavorite ={this.handleFavorite.bind(this)}
				 	onReplyTweet={this.handleReplyTweet.bind(this)}
				 />
			</div>
			)
	}
}
//Main.propTypes = propTypes
export default Main
