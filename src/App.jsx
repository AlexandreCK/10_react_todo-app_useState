import { Header } from './components/Header/Header';
import { Subheader } from './components/Subheader/Subheader';
import { ListHeader } from './components/ListHeader/ListHeader';
import { ItemsList } from './components/ItemsList/ItemsList';
import { ListContainer } from './components/ListContainer/ListContainer';
import { TaskForm } from './components/TaskForm/TaskForm';
import { useTasks } from './hooks/useTasks';

function App() {
    const { tasks, addTask } = useTasks();

    return (
        <>
            <Header />
            <Subheader subtitle="Todo List Manager" />
            <TaskForm onAddTask={addTask} />
            <ListContainer>
                <ListHeader content="Todo List" />
                <ItemsList itemsList={tasks} />
            </ListContainer>
        </>
    );
}

export default App;
