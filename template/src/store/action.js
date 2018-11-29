export default {
	setPlayAsync({commit,state}){
		setTimeout(()=>{
			commit('setPlay',true) ;
		},1000)
	}
}
