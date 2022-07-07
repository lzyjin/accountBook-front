import Service from "@/common/service/common/Service";

const prefix = '/api/dealLog'
class DealLogSvc extends Service{

    getList(param={}){
        return this.get(`${prefix}/fetchList`, param)
            .then(response=>{
                return response.data
            })

    }
}
export default new DealLogSvc()


