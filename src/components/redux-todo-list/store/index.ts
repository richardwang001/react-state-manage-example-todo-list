/**
 *@desc
 *@author Richard Wang
 *@date 2022/4/27 21:07
 */
import { configureStore } from '@reduxjs/toolkit'
import reducers from "./reducers";

// const store = createStore(reducers,[]); // 过期用法

// 最新用法：需要下载 @reduxjs/toolkit
const store = configureStore({reducer:reducers})

export default store;