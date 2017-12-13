import AjaxPromise from './AjaxPromise.js';
let Api = {
	// get
	getUserInfo: function(body){
		return AjaxPromise.get('topnews/user/ifLoginCORS',body)
	},
	
	// post 
	getMoreJobInfo: function(body){
		return AjaxPromise.post('job_info_tmp/getMoreJobInfo', body)
	}
};

// Api.getMoreJobInfo({inten_id: this.props.location.query.inten_id}).then((data)=>{
//     console.log('getMoreJobInfo fetch promise封装');
// })


export default Api;