/**
 *@desc 纯函数 reducer
 *@author Richard Wang
 *@date 2022/4/27 8:19
 */
import * as types from "./actionType"

export interface StateProps {
    id: number;
    text: string;
    isFinished: boolean;
}

export interface ActionProps {
    type: string;

    [key: string]: any;
}

const reducer = (state: StateProps[] = [], action: ActionProps) => {
    switch (action.type) {
        case types.ADD:
            return [...state, action.todo]
        case types.CHANGE_FINISHED:
            return state.map(item => {
                if (item.id === action.id) {
                    return Object.assign({}, item, {
                        isFinished: !item.isFinished
                    })
                }
                console.log(item);
                return item;
            })
        default:
            return state;
    }
}

// 改变： 需要导出 reducer 的类型
export type RootState = ReturnType<typeof reducer>;

export default reducer