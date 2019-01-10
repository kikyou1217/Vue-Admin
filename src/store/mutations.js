const REMBER_INFO='REMBER_INFO'
const REMBER_ENDIT='REMBER_ENDIT'

//同步方法，相当于methods
export default{
    //将table新增的数据存在state中
    [REMBER_INFO](state,info){
        state.tableData.push(info)
    },
    //更改数据
    [REMBER_ENDIT](state,data){
        state.tableData.some((item,index)=>{
            if(item.id==data.id){
                state.tableData.splice(index,1,data)
                return true
            }
        })
    }
}