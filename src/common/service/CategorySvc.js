import Service from "@/common/service/common/Service";

const prefix = '/api/category'
class CategorySvc extends Service{

    save(param={}){
        return this.post(`${prefix}/save`, param)
            .then(response=>{
                return response.data
            })
    }
    remove(param={}){
        return this.delete(`${prefix}/remove`, param)
            .then(response=>{
                return response.data
            })
    }
    getList(param={}){
        return this.get(`${prefix}/fetch`, param)
            .then(response=>{
                return response.data
            })
    }
}
export default  new CategorySvc();
