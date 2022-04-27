/**
 *@desc
 *@author Richard Wang
 *@date 2022/4/26 0:54
 */

import TodoItem from "./TodoItem";
import { useSelector } from 'react-redux'
import { RootState } from './store/reducers'

const style = {
    marginTop:'20px'
}

// TodoList 里面不需要接受父组件的传参了
const TodoList = () => {

    // 改变：读取状态要用 useSelector
    const state  = useSelector((state:RootState)=> state)

    //改变： 只需要解构 {state} 出来，然后就很快映射传给了 TodoItem 子组件
    const todoListDom = state.map(item=> <TodoItem key={item.id} todo={item}/>)

    return <div className="todo-list" style={style}>
        {todoListDom}
    </div>
}

export default TodoList;