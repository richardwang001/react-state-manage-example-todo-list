/**
 *@desc 使用 useReducer 来优化
 *@author Richard Wang
 *@date 2022/4/26 22:19
 */

import React, {createContext, useReducer} from "react";
import reducer, {ActionProps, StateProps} from "../store/reducers";

// 改变 ContextProps
export interface ContextProps {
  state: StateProps[];
  dispatch:React.Dispatch<ActionProps>;
}

//  MyContext 不变
export const MyContext = createContext( {} as ContextProps);

const MyProvider = (props:React.PropsWithChildren<{}>) => {
// 使用 useReducer 之后，这里就不需要有 状态 和 业务函数了

  const initialState:StateProps[]=[];
  const [state, dispatch] = useReducer(reducer, initialState);

  // 改变 Provider 传值的方式
  return <MyContext.Provider value={{
    state,
    dispatch
  }}>{props.children}</MyContext.Provider>
}

export default MyProvider;