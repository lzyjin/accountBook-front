import Service from "@/common/service/common/Service";

const prefix = '/api/user'
class UserSvc extends Service {
    signIn(param={}){
        return this.get(`${prefix}/signIn`, param).then(
            response => {
                if(response.data.code === 200){
                    const token = response.data.data.token;
                    const userData = response.data.data.userData
                }
                return response.data
            }
        )
    }
    checkId(param={}){
        return this.get(`${prefix}/checkId`, param).then(
            response => {
                return response.data
            }
        )
    }
    signUp(param={}) {
        return this.post(`${prefix}/signUp`, param)
            .then(response => {

                return response.data;
            });
    }
}
export default new UserSvc()
