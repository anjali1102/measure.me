import { useEffect, useState } from "react";
import { CreateNote } from "../modals/CreateNote";
import { Card } from "./Card";
const Notes = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem("taskList");
    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);
  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    setModal(false);
  };

  return (
    <div>
      <div className="header text-center">
        <div className="row">
          <h1 className="animate-charcter">measure.me </h1>
        </div>
        <button
          onClick={() => {
            setModal(true);
          }}
        >
          Create Note
        </button>
      </div>
      <div className="task-container">
        {taskList && taskList.map((obj,index) => <Card taskObj={obj} index={index} />)}
      </div>
      <CreateNote toggle={toggle} modal={modal} save={saveTask} />
    </div>
  );
};

export { Notes };
