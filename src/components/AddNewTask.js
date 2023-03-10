import React, { Component } from "react";

 class AddNewTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskContent:'',
    };
  }
  handleChangeTaskContent = (ev) =>{
    const value = ev.target.value;
    this.setState({taskContent: value});
  }
  addNewTask=()=>{
    const{taskContent}=this.state;
    this.props.newTask(taskContent);

  }

  render() {
    const{taskContent}= this.state;
    return (
      <div>
        <div className="new-task-box">
          <input type="text" placeholder="" value={taskContent} onChange={this.handleChangeTaskContent} />
          <button onClick={this.addNewTask}>Add</button>
        </div>
      </div>
    );
  }
}

export default AddNewTask;
