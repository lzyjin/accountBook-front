import Service from "@/common/service/common/Service";
class UserSvc extends Service {
    signIn(param={}){
        return this.get('/api/user/signIn', param).then(
            response => {
                console.log(response)
                /*if(response.data.code === 200){
                    const token = response.data.data.token;
                    const userData = response.data.data.userData
                }
                return response*/
            }
        )
    }
    checkId(param={}){
        return this.get('/api/user/checkId', param).then(
            response => {
                if(response.data.code === 200){

                }
                return response
            }
        )
    }

}
export default new UserSvc()