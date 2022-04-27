/**
 *@desc
 *@author Richard Wang
 *@date 2022/4/26
 */
import { Provider } from "react-redux";
import TodoInput from "./TodoInput"
import TodoList from "./TodoList";
import store from "./store/index";

const Todo = () => {

    return <Provider store={store}>
        <div className="todo">
            <TodoInput/>
            <TodoList/>
        </div>
    </Provider>
}

export default Todo;