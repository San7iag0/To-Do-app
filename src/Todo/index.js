import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Form from './Form';
import TodoList from './TodoList';
import Header from './header';

const useStyles = makeStyles({
    root: {
        textAlign: "center",
        height: "100%"
    }
});
function Todo() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header />
            <Form />
            <TodoList />
        </div>
    )

}
export default Todo;