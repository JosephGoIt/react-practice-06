import css from './TaskCounter.module.css';
//import the hook
import { useSelector } from 'react-redux';

export const TaskCounter = () => {
    // get an array of tasks from redux state
    const tasks = useSelector(state => state.tasks);

    //based on redux state, get derived data
    const count = tasks.reduce(
        (acc, task) => {
            if (task.completed) {
                acc.completed += 1;
            } else {
                acc.active += 1;
            }
            return acc;
        },
        { active: 0, completed: 0}
    );

    return(
        <div>
            <p className={css.text}>Active: {count.active}</p>
            <p className={css.text}>Completed: {count.complted}</p>
        </div>
    );
};