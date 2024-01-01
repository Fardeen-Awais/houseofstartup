import { db } from "@/lib/db"
import { homeProfile } from "@/lib/home-profile"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    try {
        const profile = await homeProfile()
        if(!profile) return new NextResponse("Unauthorized", { status: 401 })

        const {userId} = profile
        const {id,location, budget, business, website , projectType , categoryName} = await req.json()

        const survey = await db.userSurvey.createMany({
            data: {
               id: id,
               userId: userId,
               location: location,
               budget: budget,
               business: business,
               website: website,
               projectType: projectType,
               categoryName: categoryName,
            }
        })
        return NextResponse.json(survey)
    } catch (err) {
        console.error({ err })
        return new NextResponse(`Internal Server Error ${err}`, { status: 500 })
    }
}