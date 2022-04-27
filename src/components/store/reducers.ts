/**
 *@desc 纯函数 reducer，剥离状态和改变状态的方法
 *@author Richard Wang
 *@date 2022/4/27 8:19
 */
export interface StateProps {
    id: number;
    text: string;
    isFinished: boolean;
}

export interface ActionProps {
    type: string;

    [key: string]: any;
}

const reducer = (state: StateProps[], action: ActionProps) => {
    switch (action.type) {
        case "ADD":
            return [...state, action.todo]
        case "CHANGE_FINISHED":
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

export default reducer