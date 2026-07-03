import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '10')
    const skip = parseInt(searchParams.get('skip') || '0')
    const category = searchParams.get('category')
    const jobType = searchParams.get('jobType')
    const location = searchParams.get('location')

    const where: any = { isActive: true }

    if (category) where.category = category
    if (jobType) where.jobType = jobType
    if (location) where.location = { contains: location, mode: 'insensitive' }

    const [jobs, total] = await Promise.all([
      prisma.job.findMany({
        where,
        take: limit,
        skip,
        orderBy: { publishedAt: 'desc' },
        include: { author: { select: { name: true, email: true } } },
      }),
      prisma.job.count({ where }),
    ])

    return NextResponse.json({
      jobs,
      total,
      limit,
      skip,
      pages: Math.ceil(total / limit),
    })
  } catch (error) {
    console.error('Error fetching jobs:', error)
    return NextResponse.json(
      { error: 'Failed to fetch jobs' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { title, description, company, location, jobType, salaryMin, salaryMax, category, tags, requiredSkills, postedBy } = body

    if (!title || !description || !company || !postedBy) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const job = await prisma.job.create({
      data: {
        title,
        description,
        company,
        location,
        jobType,
        salaryMin,
        salaryMax,
        category,
        tags: tags || [],
        requiredSkills: requiredSkills || [],
        postedBy,
      },
    })

    return NextResponse.json(job, { status: 201 })
  } catch (error) {
    console.error('Error creating job:', error)
    return NextResponse.json(
      { error: 'Failed to create job' },
      { status: 500 }
    )
  }
}
