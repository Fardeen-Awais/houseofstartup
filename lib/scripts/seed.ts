const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
    try {
        // await db.category.createMany({
        //     data:[
        //         { name: "Website developement" },
        //         { name: "App developement" },
        //         { name: "Copy Writing" },
        //         { name: "Social Media Marketing" },
        //         { name: "SEO Optimization" },
        //     ]
        // });


        const servicesData = [
            {
                name: 'Web Design',
                desc: 'Creating Visually appealing web app designs',
                categoryId: '30db3ef9-2a34-41eb-ac4d-6c8d863e3a29',
            },
            {
                name: '3d Web apps',
                desc: 'Make your web app with 3d models using three.js',
                categoryId: '30db3ef9-2a34-41eb-ac4d-6c8d863e3a29',
            },
            {
                name: 'Web SEO',
                desc: 'Rank and optimize your on-page SEO using SEO tools',
                categoryId: '30db3ef9-2a34-41eb-ac4d-6c8d863e3a29',
            },
            {
                name: 'Web app Animations',
                desc: 'Help you to build rive animations for your web app',
                categoryId: '30db3ef9-2a34-41eb-ac4d-6c8d863e3a29',
            },
            {
                name: 'Next.js Full stack apps',
                desc: 'Building web applications using modern technologies',
                categoryId: '30db3ef9-2a34-41eb-ac4d-6c8d863e3a29',
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
