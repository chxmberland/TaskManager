import React, { useState } from 'react'

const Form = (props) => {

    const [input, setInput] = useState('');
    const [tasks, setTasks] = useState(() => {
        try {
            const toLoad = localStorage.getItem(props.day + '-list');
            return toLoad ? JSON.parse(toLoad) : [];
        } catch (error) {
            return [];
        }
    });

    const handleChange = e => {
        setInput(e.target.value);
    }

    const addTask = e => {
        if (input.length !== 0) {
            const newTask = {
                id: 1 + Math.random() * 100000,
                todo: { input },
                checked: false
            };
            const newTasks = [...tasks];
            newTasks.push(newTask);
            saveTasks(newTasks);
            setTasks(newTasks);
            setInput('');
        }
    }
    
    const toggleChecked = (id) => {
        const newList = [];
        for (var i = 0; i < tasks.length; i++) {
            if (tasks[i].id === id && tasks[i].checked) {
                tasks[i].checked = false;
            } else if (tasks[i].id === id && !(tasks[i].checked)) {
                tasks[i].checked = true;
            }
            newList.push(tasks[i]);
        }
        saveTasks(newList);
        setTasks(newList);
    }

    const deleteTask = (id) => {
        saveTasks();
        const newTasks = tasks.filter(task => task.id !== id);
        saveTasks(newTasks);
        setTasks(newTasks);
    }

    const saveTasks = (toSave) => {
        localStorage.setItem(props.day + '-list', JSON.stringify(toSave));
    }
    
    return (
        <div>
            <form className = 'input-form'>
                <input 
                    type = 'text' 
                    className = 'text-input' 
                    placeholder = 'Add task...' 
                    onChange = { handleChange } 
                    value = { input }
                ></input>
                <button 
                    type = 'button'
                    className = 'add-item-btn' 
                    onClick = { addTask }
                >+</button>
            </form>
            <div className = 'task-render-wrapper'>
                { tasks.map(task => (
                    <div className = 'task-container' key = { task.id }>
                        { task.checked 
                            ? <div className = 'task-text-container task-checked' onClick = { () => toggleChecked(task.id) }>{ task.todo.input.toString() }</div>
                            : <div className = 'task-text-container'              onClick = { () => toggleChecked(task.id) }>{ task.todo.input.toString() }</div>
                        }
                        <button className = 'clear-button' onClick = { () => deleteTask(task.id) }>x</button>
                    </div>
                )) }
            </div>
        </div>
    )
}

export default Form