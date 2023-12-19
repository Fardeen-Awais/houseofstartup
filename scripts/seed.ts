const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
    try{
        await db.service.createMany({
            data: [
              { name: "Frontend Development", desc: "Building user interfaces with HTML, CSS, and JavaScript.", categoryName: 'd14d46c7-cc31-4b93-95f1-76ff8ea702d8' },
              { name: "Backend Development", desc: "Creating server-side logic and APIs using technologies like Node.js.", categoryName: 'd14d46c7-cc31-4b93-95f1-76ff8ea702d8' },
              { name: "Full Stack Development", desc: "Combining both frontend and backend development skills.", categoryName: 'd14d46c7-cc31-4b93-95f1-76ff8ea702d8' },
            ] // I pass the Category ID of the category i recently made it.
        })
        console.log("Database connected");
    }catch(err){
        console.log(`Error while seeding the category in db`,err);
    } finally{
        await db.$disconnect();
    }
}

main()