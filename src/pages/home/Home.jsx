import React,{Component} from 'react';
import {connect} from 'react-redux';

var imgUrl = require('./imgs/js.png');


// render() {
//     return (<img src={require('./images/bg.jpg')} />);
// }


// var imgUrl = require('./images/bg.jpg'),
//     imgTempl = '<img src="'+imgUrl+'" />';
// document.body.innerHTML = imgTempl;


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
					<li className="home-list-item">
						<img src="./imgs/html.png" />
					</li>
					<li className="home-list-item">
						<img src={imgUrl} />
					</li>
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