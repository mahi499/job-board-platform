import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

  // Find a user to be the employer
  const employer = await prisma.user.findFirst()

  if (!employer) {
    console.log("Please create a user first by signing up.")
    return
  }

  await prisma.job.createMany({
    data: [
      {
        title: "Java Developer",
        description:
          "Develop enterprise Java applications using Spring Boot and REST APIs.",
        company: "TCS",
        location: "Hyderabad",
        jobType: "FULL_TIME",
        category: "Software Development",
        salaryMin: 500000,
        salaryMax: 900000,
        tags: ["Java", "Spring Boot"],
        requiredSkills: ["Java", "Spring Boot", "MySQL"],
        postedBy: employer.id,
      },
      {
        title: "React Developer",
        description:
          "Build responsive frontend applications using React and Next.js.",
        company: "Infosys",
        location: "Bengaluru",
        jobType: "FULL_TIME",
        category: "Frontend",
        salaryMin: 600000,
        salaryMax: 1000000,
        tags: ["React", "Next.js"],
        requiredSkills: ["React", "TypeScript", "Tailwind CSS"],
        postedBy: employer.id,
      },
      {
        title: "Full Stack Developer",
        description:
          "Develop full stack applications using React, Node.js and PostgreSQL.",
        company: "Cognizant",
        location: "Chennai",
        jobType: "FULL_TIME",
        category: "Full Stack",
        salaryMin: 700000,
        salaryMax: 1200000,
        tags: ["React", "Node.js"],
        requiredSkills: ["Node.js", "React", "PostgreSQL"],
        postedBy: employer.id,
      },
      {
        title: "Cloud Engineer",
        description:
          "Work with AWS cloud infrastructure and deployment pipelines.",
        company: "Accenture",
        location: "Bengaluru",
        jobType: "FULL_TIME",
        category: "Cloud",
        salaryMin: 800000,
        salaryMax: 1400000,
        tags: ["AWS", "Cloud"],
        requiredSkills: ["AWS", "EC2", "S3", "Docker"],
        postedBy: employer.id,
      },
      {
        title: "DevOps Engineer",
        description:
          "Manage CI/CD pipelines and containerized deployments.",
        company: "Wipro",
        location: "Pune",
        jobType: "FULL_TIME",
        category: "DevOps",
        salaryMin: 700000,
        salaryMax: 1300000,
        tags: ["Docker", "CI/CD"],
        requiredSkills: ["Docker", "Jenkins", "GitHub Actions"],
        postedBy: employer.id,
      },
      {
        title: "Python Developer",
        description:
          "Develop backend services and automation scripts using Python.",
        company: "IBM",
        location: "Hyderabad",
        jobType: "FULL_TIME",
        category: "Backend",
        salaryMin: 600000,
        salaryMax: 1100000,
        tags: ["Python"],
        requiredSkills: ["Python", "Flask", "SQL"],
        postedBy: employer.id,
      }
    ]
  })

  console.log("✅ Sample jobs inserted successfully.")
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect()
  })