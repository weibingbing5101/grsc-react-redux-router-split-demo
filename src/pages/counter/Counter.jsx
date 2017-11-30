import React,{Component} from 'react';


export default class Counter extends Component{
	constructor(props){
    	super(props);
     	console.log(this.props);
  	}
    render(){
        return (
            <div>
                <p>{this.props.counter.number}</p>
                <button onClick={()=>this.props.add()}>+</button>
                <button  onClick={()=>this.props.sub()}>-</button>
            </div>
        )
    }
}


