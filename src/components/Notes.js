import { useState } from "react";
import { CreateNote } from "../modals/CreateNote";
const Notes = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    setTaskList(tempList);
    setModal(false);
  };

  return (
    <div>
      <div className="header text-center">
        <h1>Take Notes</h1>
        <button
          className="btn btn-secondary mt-2"
          onClick={() => {
            setModal(true);
          }}
        >
          Create Note
        </button>
      </div>
      <div className="task-container">
        {taskList.map((obj) => <li>{obj.Name}</li>)}
      </div>
      <CreateNote toggle={toggle} modal={modal} save={saveTask} />
    </div>
  );
};

export { Notes };
