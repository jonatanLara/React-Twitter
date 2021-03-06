import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import moment from 'moment'
import 'moment/locale/es'
import './message.css'


class Message extends Component {
	constructor (props){
		moment.locale('es')
		super(props)
		this.state = {
			pressFavorite :false,
			pressRetweet : false
		}
	}
	onPressFavorite(){
		this.props.onFavorite()
		this.setState({
			pressFavorite : true
		})
	}
	onPressRetweet(){
		this.props.onRetweet()
		this.setState({
			pressRetweet : true
		})
	}
	render(){
		let dateFormat = moment(this.props.date).fromNow()
		let userLink = `/user/${this.props.userName}`
		return(
			<div className="root_message">
				<div className="user">
					<Link to={userLink}>
						<figure>
							 <img className="avatar" src={this.props.picture} alt="avatar" />
						</figure>
					</Link>
					<span className="displayName">{this.props.displayName}</span>
					<span>
					<svg className="svg"viewBox="0 0 24 24" aria-label="Cuenta verificada"><g><path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path></g></svg>
					</span>
					<span className="userName"> {this.props.userName}</span>
					<span className="date">{dateFormat}</span>
				</div>
				<p>{this.props.text}</p>
				<div className="buttons" >
					<div className="icon"
						onClick={this.props.onReplyTweet}
						>
						<span className="fa fa-reply"></span>
					</div>
					<div
						className={(this.state.pressRetweet) ? "rtGreen" : ""}
						onClick={this.onPressRetweet.bind(this)}
						>
						<span className="fa fa-retweet"></span>
						<span className="num">{this.props.numRetweets}</span>
					</div>
					<div
						className={(this.state.pressFavorite) ? "favYellow" : ""}
						onClick={this.onPressFavorite.bind(this)}
						>
						<span className="fa fa-star"></span>
						<span className="num">{this.props.numFavorites}</span>
					</div>
				</div>
			</div>
			)
	}
}
//Message.propTypes = propTypes
export default Message
