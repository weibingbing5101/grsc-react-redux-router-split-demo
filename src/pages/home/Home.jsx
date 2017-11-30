import React,{Component} from 'react';
import {connect} from 'react-redux';

import './Home.less';
class Home extends Component {

	constructor(props) {
	  super(props);
		console.log(this.props);
	  this.state = {isok: true};
	}

	render() {
		let clname = this.state.isok ? 'home-box-active' : 'home-box';
		return (
			<div className={clname}>
				<ul className="home-list">
					<li className="home-list-item">{this.props.home.number}</li>
					<li className="home-list-item" onClick={()=>this.props.addd()}> + </li>
					<li className="home-list-item">1</li>
					<li className="home-list-item">1</li>
					<li className="home-list-item">1</li>
					<li className="home-list-item">1</li>
					<li className="home-list-item">1</li>
					<li className="home-list-item">1</li>
					<li className="home-list-item">1</li>
					<li className="home-list-item">1</li>
					<li className="home-list-item">1</li>
					<li className="home-list-item">1</li>
					<li className="home-list-item">1</li>
					<li className="home-list-item">1</li>
				</ul>
			</div>
		)
	}
};


export default Home