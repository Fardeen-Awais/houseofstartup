const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
    try{
        await db.category.createMany({
            data:[
                { name: "App Developement", },
                { name: "Amazon Web Services", },
            ]
        });
        console.log("Database connected");
    }catch(err){
        console.log(`Error while seeding the category in db`,err);
    } finally{
        await db.$disconnect();
    }
}

main()