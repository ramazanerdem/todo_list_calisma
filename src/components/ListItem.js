import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function ListItem({ addTask, setAddTask }) {

    const [complatedBool, setComplatedBool] = useState(true)

    const deleteTask = (id) => {
        const newArray = addTask.filter((filteredTask, filteredId) => filteredId !== id)
        setAddTask(newArray);
    }

    const complatedTask = (id) => {
        const complatedTaskIndex = addTask.findIndex((filteredTask, filteredId) => filteredId === id)
        const newArray = [...addTask];
        complatedBool === false ? setComplatedBool(true) : setComplatedBool(false);

        newArray[complatedTaskIndex] = {
            ...newArray[complatedTaskIndex],
            isComplated: complatedBool
        }
        setAddTask(newArray)
    }

    return (
        <>
            <ul className="list-group align-self-stretch">
                {addTask.map((newTask, id) => (
                    <li key={uuidv4()} className="list-group-item d-flex align-items-center">
                        <div className="me-3">{id + 1}-</div>
                        <label className={newTask.isComplated === true ? "text-decoration-line-through text-danger" : ""} htmlFor="firstCheckbox">{`${newTask.value}`}</label>
                        <button onClick={() => complatedTask(id)} className="btn btn-dark btn-outline-warning ms-auto" type="button" id="button-addon2">{newTask.isComplated === true ? "Geri Al" : "Tamamla"}</button>
                        <button onClick={() => deleteTask(id)} className="btn btn-dark btn-outline-warning " type="button" id="button-addon2">Sil</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ListItem

// ${addTask.isComplated === true ? "text-decoration-line-through" : " "}