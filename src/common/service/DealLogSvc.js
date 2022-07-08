import Service from "@/common/service/common/Service";

const prefix = '/api/dealLog'
class DealLogSvc extends Service{

    getList(param={}){
        return this.get(`${prefix}/fetchList`, param)
            .then(response=>{
                return response.data
            })
    }
    getData(param={}){
        return this.get(`${prefix}/fetch`, param)
            .then(response=>{
                return response.data
            })
    }
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
    statistics(param={}){
        return this.get(`${prefix}/statistics`, param)
            .then(response=>{
                return response.data
            })
    }
}
export default new DealLogSvc()


