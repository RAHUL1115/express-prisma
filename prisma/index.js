const { PrismaClient } = require("@prisma/client");

class Prisma extends PrismaClient {
    static instance;
    constructor(){
        if(!Prisma.instance){
            Prisma.instance = new PrismaClient()
        }
        return Prisma.instance;
    }
}

module.exports = new Prisma();