/**
 *@desc action 对象
 *@author Richard Wang
 *@date 2022/4/27 20:54
 */
import * as types from "./actionType";
import {StateProps} from "./reducers";

export const addAction = (todo: StateProps) => ({
        type: types.ADD,
        todo
    });

export const changeAction = (id:number) => ({
    type:types.CHANGE_FINISHED,
    id
})
