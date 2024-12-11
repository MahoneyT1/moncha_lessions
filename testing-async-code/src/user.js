// user class

const axios = require('axios')

class User {
    constructor(userName, canView = false) {
        this.userName = userName;
        this.canViewRepo = canView;
    }

    async getUserId(userName) {
        const response = await axios.get(`https://api.github.com/users/${this.userName}`)
        return response.data.id
    };

    async getRepo(repoIndex) {
        if (this.canViewRepo) {
            const response = axios.get(`https://api.github.com/users/${this.userName}/repos`)
            return (await response).data[repoIndex]    }

        return Promise.reject('cannot view repo');
    };

    async toString() {
        const userId = await this.getUserId()
        return `[${this.userName}] ${userId} `
    };
}


(async ()=> {
    try {
        const user = new User('MahoneyT1', canView=true)
        console.log(await user.getUserId());
        console.log(await user.userName)
    } catch (error) {
        console.error(error)
    };

})();