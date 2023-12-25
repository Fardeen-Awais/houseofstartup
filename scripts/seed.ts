const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
    try {
        // await db.category.createMany({
        //     data:[
        //         { name: "Web Development", },
        //     ]
        // });


        const servicesData = [
            {
                name: 'Web Design',
                desc: 'Creating visually appealing and user-friendly web designs',
                categoryId: '3ee6d746-95f9-45f3-9cf3-eefd8bac859c',
            },
            {
                name: '3d Web apps',
                desc: 'Building web applications using modern technologies',
                categoryId: '3ee6d746-95f9-45f3-9cf3-eefd8bac859c',
            },
            {
                name: 'Web SEO',
                desc: 'Building web applications using modern technologies',
                categoryId: '3ee6d746-95f9-45f3-9cf3-eefd8bac859c',
            },
            {
                name: 'Web app Animations',
                desc: 'Building web applications using modern technologies',
                categoryId: '3ee6d746-95f9-45f3-9cf3-eefd8bac859c',
            },
            {
                name: 'Next.js Full stack apps',
                desc: 'Building web applications using modern technologies',
                categoryId: '3ee6d746-95f9-45f3-9cf3-eefd8bac859c',
            },
        ];

        await db.service.createMany({
            data: servicesData,
        });
        console.log("Database connected");
    } catch (err) {
        console.log(`Error while seeding the category in db`, err);
    } finally {
        await db.$disconnect();
    }
}

main()
