import React, { Component } from "react";
import TaskItem from "./TaskItem";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { taskList, changeTaskStatus, deleteTaskItem } = this.props;
    return (
      <div>
        <ul id="tasks-ul">
          {
            taskList.map((item) => {
              return (

                <TaskItem
                  key={item.id}
                  task={item}
                  changeTaskStatus={changeTaskStatus}
                  deleteTaskItem={deleteTaskItem}
                />

              )
            })
          }

        </ul>
      </div>
    );
  }
}

export default TaskList;
