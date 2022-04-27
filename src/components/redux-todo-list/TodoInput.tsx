/**
 *@desc
 *@author Richard Wang
 *@date 2022/4/26 0:54
 */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addAction } from './store/action'

  // 不需要来自父组件的属性了
const TodoInput = () => {

  const [text, setText] = useState('')
  // 改变
  const dispatch = useDispatch()

  const onChangeTextHandler = (e: React.ChangeEvent) => {
    // (e.target as HTMLInputElement)  断言 target 是一个输入元素
    // 将输入框的值转化为状态，方便按钮点击事件的获取
    setText((e.target as HTMLInputElement).value)
  }

  const addTodoHandler = () => {

    // 改变：
    dispatch(addAction({
      id: new Date().getTime(),
      text: text,
      isFinished: false
    }))

    setText('') // 添加了之后清空输入框
  }

  return (
    <div className="todo-input">
      <input type="text" placeholder="请输入代办事项" onChange={onChangeTextHandler} value={text}/>
      <button onClick={addTodoHandler}>添加</button>
    </div>
  )
}

export default TodoInput