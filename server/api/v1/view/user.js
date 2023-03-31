const {v5} = require('uuid');
const prisma = require('../../../../prisma')

class User {
    constructor(data){
        firstName = data.firstName;
        lastName = data.lastName;
        email = data.email;
        password = data.password;
        roleId = data.roleId;
    }

    generateId() {
        this.id = uuid.v4();
    }

    generateJwt() {
        this.jwt = uuid.v4();
    }

    setId(id) {
        this.id = id;
    }

    setJwt(jwt) {
        this.jwt = jwt;
    }

    /**
     * @param {prisma} tx 
     */
    static async get(tx,filter,limit) {
        let db = tx ? tx : prisma;

        let data = await db.user.findMany({
            where: filter,
            take: limit
        })

        return data;
    }

    /**
     * @param {prisma} tx 
     */
    static delete(id, tx) {
        let db = tx || prisma;
        db.user.delete({
            where: { id: id },
        })
    }

    /**
    * @param {prisma} tx 
    */
    create(tx){
        let db = tx || prisma; 

        this.generateId();
        this.generateJwt();

        db.user.create({
            data: this,
        })
    }

    /**
     * @param {prisma} tx 
     */
    update(tx){
        let db = tx || prisma;
        db.user.update({
            data: this,
        })
    }
}

// async function main(){
// let data = await User.get();
// console.log(data);
// }
// main()


// module.exports = User;
