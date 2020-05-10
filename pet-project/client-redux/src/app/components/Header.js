import React from 'react';

const Header = ({ todoList }) => {
    const [remainingTasks, setRemainingTasks] = React.useState(todoList.length);

    React.useEffect(() => {
        setRemainingTasks(todoList.filter(todo => !todo.completed).length);
    }, [todoList]);

    return (
        <div>
            Remaining Tasks: {remainingTasks}
        </div>
    );
};

export default Header;