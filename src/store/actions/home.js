import { store } from '../index.js';
let dispatch = store.dispatch;

export function addd() {
    console.log(333);
    // return (dispatch, getState) => {
        // Http.post('trade/payTypeList',params).then(function (data) {
        //      dispatch({
        //        type: 'payTypeList',
        //        code: data.code,
        //        data:  data.data
        //      });
        //    })
        setTimeout(()=>{
            dispatch({ type: 'ADDD' });
        },1000)
        
    // }
}

// export function sub() {
//     // return (dispatch, getState) => {
//         // Http.post('trade/payTypeList',params).then(function (data) {
//         //      dispatch({
//         //        type: 'payTypeList',
//         //        code: data.code,
//         //        data:  data.data
//         //      });
//         //    })
//         dispatch({ type: 'SUB' });
//     // }
// }


