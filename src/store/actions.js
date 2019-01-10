
//异步方法
export default{
    addInfo({commit},info){
        //接收传过来的tableData的新增值
        commit("REMBER_INFO",info);
    },
    //更改数据
    addEndit({commit},data){
        commit('REMBER_ENDIT',data)
    }
}