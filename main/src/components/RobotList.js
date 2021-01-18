import React, { Component } from 'react'
import RobotStore from '../stores/RobotStore'
import Robot from './Robot'
import RobotForm from './RobotForm'



class RobotList extends Component {
	constructor(){
		super()
		this.state = {
			robots : []
		}
		this.onAdd=this.onAdd.bind(this);
	}
	componentDidMount(){
		this.store = new RobotStore()
		this.setState({
			robots : this.store.getRobots()
		})
		this.store.emitter.addListener('UPDATE', () => {
			this.setState({
				robots : this.store.getRobots()
			})			
		})
	}

	onAdd(name, type, mass){
		if (!name || !type || !mass)
		    console.log("Fields cannot be empty!");
		  else {
		    let newRobot = {
		      name: name, 
		      type:type,
		      mass:mass,
			};
		}
    }

	render() {
		return (
			<div>
				 <RobotForm onAdd={this.onAdd}/>
				{
					this.state.robots.map((e, i) => 
						<Robot item={e} key={i} />
					)
				}
			</div>
		)
	}
}


export default RobotList
