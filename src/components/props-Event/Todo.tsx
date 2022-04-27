/**
 *@desc
 *@author Richard Wang
 *@date 2022/4/26
 */
import TodoInput from "./TodoInput"
import TodoList from "./TodoList";
import {useState} from "react";

export interface StateProps {
    id: number;
    text: string;
    isFinished: boolean;
}

const Todo = () => {

    const [todoList, setTodoList] = useState<StateProps[]>([]);

    /**
     * 根据传来的 id 匹配并修改 isFinished 的值
     * @param id
     */
    const changeTodo = (id: number) => {
        // 收到了 TodoList 子组件的参数和回调请求，然根据参数设置 isFinished 的值
        const newTodoList = todoList.map(item => {
            if (item.id === id) {
                return Object.assign({}, item, {
                    isFinished: !item.isFinished
                })
            }
            console.log(item);
            return item;
        })
        setTodoList(newTodoList);
    }

    const addTodo = (todo: StateProps) => {
        // 收到了来着子组件输入框的值，赋给 todoList 状态
        // 接下来传给 todoList 子组件进行展示
        setTodoList([...todoList, todo]);
    }

    return <div className="todo">
        <TodoInput addTodo={addTodo}/>
        <TodoList todoList={todoList} changeTodo={changeTodo}></TodoList>
    </div>
}

export default Todo;