/**
 *@desc
 *@author Richard Wang
 *@date 2022/4/26 0:54
 */
import {StateProps} from "./Todo";
import React, {useState} from "react";

interface IProps {
    addTodo: (todo: StateProps) => void;
}

const TodoInput = ({addTodo}: IProps) => {

    const [text, setText] = useState('');

    const onChangeTextHandler = (e: React.ChangeEvent) => {
        // (e.target as HTMLInputElement)  断言 target 是一个输入元素
        // 将输入框的值转化为状态，方便按钮点击事件的获取
        setText((e.target as HTMLInputElement).value);
    }

    const addTodoHandler = () => {

        // 将输入的值通过回调函数传给父组件
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