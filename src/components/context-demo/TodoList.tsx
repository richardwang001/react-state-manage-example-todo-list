/**
 *@desc
 *@author Richard Wang
 *@date 2022/4/26 0:54
 */

import TodoItem from "./TodoItem";
import {useContext} from "react";
import {MyContext} from "./MyProvider";

const style = {
    marginTop:'20px'
}

// TodoList 里面不需要接受父组件的传参了
const TodoList = () => {

    // 运用 useContext
    const {todoList } = useContext(MyContext)

    // 只需要解构 {todoList} 出来，然后就很快映射传给了 TodoItem 子组件
    const todoListDom = todoList.map(item=> <TodoItem key={item.id} todo={item}/>)

    return <div className="todo-list" style={style}>
        {todoListDom}
    </div>
}

export default TodoList;