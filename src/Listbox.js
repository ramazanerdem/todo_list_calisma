import ListInput from "./components/ListInput";
import ListItem from "./components/ListItem";
import ListFooter from "./components/ListFooter";
import { useState } from "react";

const Listbox = () => {

    const [addTask, setAddTask] = useState([])

    return (
        <>
            <div className="container d-flex justify-content-center">
                <div className="column w-50 d-flex flex-column align-items-center bg-secondary px-2 rounded-3">
                    <ListInput setAddTask={setAddTask} addTask={addTask} />
                    <ListItem setAddTask={setAddTask} addTask={addTask} />
                    <ListFooter />
                </div>
            </div>
        </>
    )
}



export default Listbox;