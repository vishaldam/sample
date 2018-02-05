import React from 'react'

class Button extends React.Component {
	constructor(props)
	{
		super(props);
	}
	handleClick() {
	
		this.props.downloadFile();
	}
   render() {
	   
	   var ButtonStyle =
	   {
		   margin: '10px 10px 10px 0',
		    width: '300',
			height: '40',
			color : 'white',
			backgroundColor:'green',
			fontSize: '26',
			
	   }
	   class Textbox extends React.Component {
	   render(){
		return(
		<div>
		<input type = "Textbox"/>
		</div>
		)
	}
}
 class Checkbox extends React.Component {
	 constructor(props)
	{
		super(props)
		this.state = {
			 checked :false
		}
		this.handleCheck = this.handleCheck.bind(this)
	}
	 handleCheck(){
		 this.setState({
			 checked: !this.state.checked
		 })
	 }
	   render(){
		   var msg
		   if(this.state.checked) {
			    msg = "checked"
		   }
		   else {
			   msg = "not checked"
		   }
		return(
		<div>
		<input type = "Checkbox" onChange={this.handleCheck}
		defaultChecked={this.state.checked}/>
		<p>This box is {msg}</p>
		</div>
		)
	}
	
}
class Button extends React.Component {
	   render(){
		return(
		<div>
		<input type = "Button"/>
		</div>
		)
	}
}
	   
      return (
         <div>
		 <Button />
	      <Checkbox />
		  <Textbox />
		  <button style={ButtonStyle} onClick={this.handleClick.bind(this)} >vishal</button>
		 </div> 
      )
   }
}
export default Button