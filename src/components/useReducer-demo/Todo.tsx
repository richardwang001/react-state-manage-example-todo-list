/**
 *@desc
 *@author Richard Wang
 *@date 2022/4/26
 */
import TodoInput from "./TodoInput"
import TodoList from "./TodoList";
import MyProvider from "./MyProvider";

const Todo = () => {

    return <MyProvider>
        <div className="todo">
            <TodoInput/>
            <TodoList/>
        </div>
    </MyProvider>
}

export default Todo;