import { useState, useEffect } from "react";

function ListInput({ setAddTask, addTask }) {

    const [newInput, setNewInput] = useState("");

    const onChangeHandler = ((e) => {
        setNewInput(e.target.value)
    })

    const handleClick = () => {
        if (newInput !== "") {
            const taskDetails = {
                value: newInput,
                isComplated: false
            }
            setAddTask([...addTask, taskDetails])
        }
    }

    useEffect(() => {
        setNewInput("")
    }, [addTask])

    return (
        <>
            <div className="input-group mt-2 mb-2">
                <input onChange={(e) => onChangeHandler(e)} value={newInput} type="text" className="form-control" placeholder="Görev Giriniz..." />
                <button onClick={() => handleClick()} className="btn btn-danger btn-outline-body" type="button" id="button-addon2">Ekle</button>
            </div>
        </>
    )
}

export default ListInput