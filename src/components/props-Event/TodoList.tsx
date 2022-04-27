/**
 *@desc
 *@author Richard Wang
 *@date 2022/4/26 0:54
 */

import TodoItem from "./TodoItem";
import {StateProps} from "./Todo";

const style = {
    marginTop:'20px'
}

interface Iprops {
    todoList: StateProps[];
    changeTodo:(id:number)=>void;
}

const TodoList = ({todoList,changeTodo}:Iprops) => {

    // {todoList,changeTodo} 解构出来之后就很快传给了 TodoItem 子组件
    const todoListDom = todoList.map(item=> <TodoItem key={item.id} todo={item} changeTodo={changeTodo}/>)

    return <div className="todo-list" style={style}>
        {todoListDom}
    </div>
}

export default TodoList;