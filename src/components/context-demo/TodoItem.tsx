/**
 *@desc
 *@author Richard Wang
 *@date 2022/4/26 0:58
 */
import {MyContext, StateProps} from "./MyProvider";
import {useContext} from "react";


const style = {
    marginTop:'5px',
    padding:'5px 0',
    boxShadow:'0 0 3px #eee'
}

interface Iprops {
    todo: StateProps;
}

// 只有 todo 需要从父组件传过来，毕竟是 map 出来的
const TodoItem = ({todo}:Iprops) => {

    // 这个样式对象要写在函数组件里面，以获取解构的参数
    // 定义 checked 的 span 样式
    const spanStyle = {
        textDecoration: todo.isFinished ? 'line-through' : 'none'
    }
    // changTodo 就需要从 context 中解构出来
    const {changeTodo} = useContext(MyContext)

    const changeHandler = () => {
        changeTodo(todo.id);
    }

    return <div className="todo-item" style={style}>
        <input type="checkbox" checked={todo.isFinished} onChange={changeHandler}/>
        <span style={spanStyle}>{todo.text}</span>
    </div>
}

export default TodoItem;