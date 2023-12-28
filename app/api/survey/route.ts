import { db } from "@/lib/db"
import { homeProfile } from "@/lib/home-profile"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    try {
        const profile = await homeProfile()
        if(!profile) return new NextResponse("Unauthorized", { status: 401 })

        const {userId} = profile
        const {location, budget, business, website , projectType} = await req.json()

        const survey = await db.userSurvey.create({
            data: {
               id: userId,
               location: location,
               budget: budget,
               business: business,
               website: website,
               projectType: projectType,
            }
        })
        return NextResponse.json(survey)
    } catch (err) {
        console.error({ err })
        return new NextResponse(`Internal Server Error ${err}`, { status: 500 })
    }
}