import React from "react";

export class Title extends React.Component {
    constructor(props){
        super(props)
        
        this.props=props;
        
        this.state = {
            name:props.title
        }
        
        this.changeTitle=this.changeTitle.bind(this);
    }
    
    changeTitle(){
        this.setState((state)=>({...state,name:"juanita"}))
    }
    
    render() {
        return (
          <div onClick={this.changeTitle}>
            {this.state.name}
          </div>
        )
    }
}
