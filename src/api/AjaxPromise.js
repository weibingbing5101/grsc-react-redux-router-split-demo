import {convertParamToQuery} from '../tools/index.js';

const envUrl = {
	dev: 'http://118.178.109.73/',
	test: 'http://118.178.174.197/',
	sit: 'https://campussit.alipay-eco.com/',
	prod: 'https://campus.alipay-eco.com/'
};
console.log('根据process.env.NODE_ENV 的不同    切换请求地址   ', envUrl[process.env.NODE_ENV])

export default class AjaxPromise {
	// 封装get请求
	static get(url, body){
		let queryUrl = url;
		if(body){
			queryUrl+='?';
			queryUrl+=convertParamToQuery(body);
		}
		console.log(queryUrl);
		return this.request(queryUrl, 'get', null);
	};


	static post(url, body){
		return this.request(url, 'post', body);
	};

	static request(url, method, body){
		let options = {
            mode: "cors",
            method: method,
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        	},
        	credentials: 'include'  // 携带cookie
    	};

    	if(body){
    		options.body = convertParamToQuery(body);
    	}


    	return new Promise((resolve, reject)=>{
    		let timerOut = setTimeout(()=>{
    			alert('网络超时请重试！')
    			resolve({
    				code: '999999',
    				message: 'timeout'
    			});
    			clearTimeout(timerOut);
    		},3000);


			fetch(envUrl[process.env.NODE_ENV] + url,  options)
			.then((res) => { return res.json()})
			.then((data)=>{
				clearTimeout(timerOut);
				resolve(data);
			}).catch((error)=>{
				// 服务器返回 400，500 错误码时并不会 reject，只有网络错误这些导致请求不能完成时，fetch 才会被 reject。
				clearTimeout(timerOut);
				console.error(error);
				console.log(url);
				resolve({
					code: '888888',
					message: 'catch_error'
				})
			})
		})
	};
};


// fetch  获取更多职位
// getMoreJobInfo(queryString){
//     return fetch(
//         this.props.route.mainPropsObj.jsonpProxy+'/job_info_tmp/getMoreJobInfo',
//         {
//             mode: "cors",
//             method:'post',
//             headers: {
//                 "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
//         },
//         body:queryString,
//         credentials: 'include',
//     })
//     .then((res) => { return res.json()})
// } 





