import React,{useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputFocus = useRef(null)
    useEffect(() => {
        inputFocus.current.focus()
    })

    const handleChange = e =>{
        setInput(e.target.value)
    }

    const handleRefresh = e => {
        e.preventDefault(); // prevent refresh

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        }) //submit
        setInput('') //abis isi kosong lagi
    }

    return (
        <form className={props.edit ? 'todo-form update' : 'todo-form'} onSubmit={handleRefresh}>
            {props.edit ? (
                <>
                <input
                type="text"
                placeholder="Update"
                value={input}
                name="text" 
                className="todo-input edit"
                onChange={handleChange}
                ref={inputFocus}
                />
                <button className="todo-button edit">Update</button>
                {/* <div className="edit-text">
                <textarea 
                    rows="5" 
                    value={input}
                    onChange={handleChange}
                    ref={inputFocus}
                    >

                    </textarea>
                    
                    <button >Update</button>
                   
                </div> */}

                </>
                )
                :
                (
                <>
                <input
                    type="text"
                    placeholder="Add todo"
                    value={input}
                    name="text" 
                    className="todo-input"
                    onChange={handleChange}
                    ref={inputFocus}
                    />
                    
                    <button className="todo-button">Add</button>
                    </>
                )}

            
        </form>
    )
}

export default TodoForm
