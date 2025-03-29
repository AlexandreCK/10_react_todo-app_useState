import styles from './TaskForm.module.css';

export const TaskForm = ({ onAddTask }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.elements.title.value.trim();
        const description = form.elements.description.value.trim();
        const status = form.elements.status.value;

        if (!title || !description) return;

        onAddTask({
            id: Date.now(),
            title,
            description,
            status
        });

        form.reset();
    };

    return (
        <form className={styles['task-form']} onSubmit={handleSubmit}>
            <div className={styles['form-group']}>
                <label htmlFor="title">Task Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Enter task title"
                    required
                />
            </div>
            
            <div className={styles['form-group']}>
                <label htmlFor="description">Task Description</label>
                <textarea
                    id="description"
                    name="description"
                    placeholder="Enter task description"
                    required
                />
            </div>
            
            <div className={styles['form-group']}>
                <label htmlFor="status">Status</label>
                <select
                    id="status"
                    name="status"
                    defaultValue="Pending"
                >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                </select>
            </div>
            
            <button type="submit" className={styles['submit-btn']}>
                Add Task
            </button>
        </form>
    );
};
