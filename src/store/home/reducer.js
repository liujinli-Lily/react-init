
// 保存表单数据
export const SAVEFORMDATA = 'SAVEFORMDATA';
// 保存图片
export const SAVEIMG = 'SAVEIMG';
// 清空数据
export const CLEARDATA = 'CLEARDATA';


let defaultState = {
    orderSum: '', //金额
    name: '', //姓名
    phoneNo: '', //手机号
    imgpath: '', //图片地址
}
// 首页表单数据
export const formData = (state = defaultState , action = {}) => {
    switch(action.type){
        case SAVEFORMDATA:
            return {...state, ...{[action.datatype]: action.value}};
        case SAVEIMG:
            return {...state, ...{imgpath: action.path}};
        case CLEARDATA:
            return {...state, ...defaultState};
        default:
            return state;
    }
}



// 保存表单数据
export const saveFormData = (value, datatype) => {
    return {
        type: SAVEFORMDATA,
        value,
        datatype,
    }
}

// 保存图片地址
export const saveImg = path => {
    return {
        type: SAVEIMG,
        path,
    }
}

// 保存图片地址
export const clearData = () => {
    return {
        type: CLEARDATA,
    }
}
