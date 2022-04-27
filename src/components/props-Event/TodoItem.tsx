
/**
 *@desc
 *@author Richard Wang
 *@date 2022/4/26 0:58
 */

import {StateProps} from "./Todo";

const style = {
  marginTop:'5px',
  padding:'5px 0',
  boxShadow:'0 0 3px #eee'
}

interface Iprops {
  todo: StateProps;
  changeTodo:(id:number)=>void;
}

const TodoItem = ({todo,changeTodo}:Iprops) => {

  // 这个样式对象要写在函数组件里面，以获取解构的参数
  // 定义 checked 的 span 样式
  const spanStyle = {
    textDecoration: todo.isFinished ? 'line-through' : 'none'
  }


  const changeHandler = () => {
    changeTodo(todo.id);
  }

  return <div className="todo-item" style={style}>
    <input type="checkbox" checked={todo.isFinished} onChange={changeHandler}/>
    <span style={spanStyle}>{todo.text}</span>
  </div>
}

export default TodoItem;