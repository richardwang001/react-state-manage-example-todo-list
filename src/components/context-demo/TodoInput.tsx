/**
 *@desc
 *@author Richard Wang
 *@date 2022/4/26 0:54
 */
import React, {useContext, useState} from "react";
import {MyContext} from "./MyProvider";

// 不需要来自父组件的属性了
const TodoInput = () => {

    const [text, setText] = useState('');

    // 使用在 MyProvider 里面定义的 MyContext
    // 可以直接解构出需要的 回调函数
    const {addTodo} = useContext(MyContext);

    const onChangeTextHandler = (e: React.ChangeEvent) => {
        // (e.target as HTMLInputElement)  断言 target 是一个输入元素
        // 将输入框的值转化为状态，方便按钮点击事件的获取
        setText((e.target as HTMLInputElement).value);
    }

    const addTodoHandler = () => {

        // 将输入的值通过回调函数传给 MyProvider， 后续 MyProvider 会传给 Todo
        addTodo({
            id:new Date().getTime(),
            text:text,
            isFinished:false
        })

        setText(''); // 添加了之后清空输入框
    }

    return (
        <div className="todo-input">
            <input type="text" placeholder="请输入代办事项" onChange={onChangeTextHandler} value={text}/>
            <button onClick={addTodoHandler}>添加</button>
        </div>
    )
}

export default TodoInput;