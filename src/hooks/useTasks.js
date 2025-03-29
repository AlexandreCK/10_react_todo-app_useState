import { useState } from 'react';

export function useTasks() {
    const [tasks, setTasks] = useState([]);
    
    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };
    
    return {
        tasks,
        addTask
    };
}
