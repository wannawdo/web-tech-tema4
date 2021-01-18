import React, { Component } from 'react'

class RobotForm extends Component {
    constructor(props){
        super();
        this.state={
        name:"",
        type:"",
        mass:0,
		
    }; 
    this.handleChangeName=this.handleChangeName.bind(this);
    this.handleChangeType=this.handleChangeType.bind(this);
    this.handleChangeMass=this.handleChangeMass.bind(this);
	}
    
    handleChangeName(event) {
        this.setState({ name: event.target.value });
      }
      handleChangeType(event) {
        this.setState({ type: event.target.value });
      }
      handleChangeMass(event) {
        this.setState({ mass: event.target.value });
      }

      onAdd = () => {
        this.props.onAdd(this.state.name,this.state.type,this.state.mass)
    }
  //  onAdd(){
    //     if (!this.state.name || !this.state.type || !this.state.mass)
    //     console.log("Fields cannot be empty!");
    //   else {
    //     let newRobot = {
    //       name: this.state.name, 
    //       type:this.state.type,
    //       mass: this.state.mass,
    //     };
 //   }

  render() {
  	
    return (
      <div>
          <input id="name"
              onChange={this.handleChangeName}
              type="text"
              name="name"
              
              value={this.state.name}
            />
            <input id="type"
              onChange={this.handleChangeType}
              type="text"
              name="type"
         
              value={this.state.type}
            />
            <input id="mass"
              onChange={this.handleChangeMass}
              type="text"
              name="mass"
            
              value={this.state.mass}
            />
  		<button onClick={()=>this.props.onAdd()}>Add Robot</button>
          
      </div>
    )
  }
}

export default RobotForm
