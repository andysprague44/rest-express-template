import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const playerData: Prisma.PlayerCreateInput[] = [
  { 
    id: 'b761d10f-a9e6-488c-920f-103bb00e7069',
    name: 'Owen Farrell',
    team: 'England',
    position: 'Fly Half',
  },
  {
    id: 'f874b59b-d10b-4e7a-847c-51db72c9cd4d',
    name: 'Marcus Smith',
    team: 'England',
    position: 'Fly Half',
  },
  {
    id: 'c381ab9a-2cde-4013-8a67-6c0ff65c15b0',
    name: 'George Ford',
    team: 'England',
    position: 'Fly Half',
  },
]

const statsData: Prisma.PlayerStatisticsCreateInput[] = 
[
  {
    player: { connect: { id: 'b761d10f-a9e6-488c-920f-103bb00e7069'}},
    caps: 127,
    number_of_tries: 11,
    number_of_points: 1308,
    is_selected: false,

  },
  {
    player: { connect: { id: 'f874b59b-d10b-4e7a-847c-51db72c9cd4d'}},
    caps: 27,
    number_of_tries: 10,
    number_of_points: 226,
    is_selected: false,
  },
  {
    player: { connect: { id: 'c381ab9a-2cde-4013-8a67-6c0ff65c15b0'}},
    caps: 87,
    number_of_tries: 10,
    number_of_points: 353,
    is_selected: true,
  }
]

async function main() {
  console.log(`Start seeding ...`)
  for (const p of playerData) {
    const player = await prisma.player.create({
      data: p,
    })
    console.log(`Created player with id: ${player.id}`)
  }

  for (const s of statsData) {
    const stats = await prisma.playerStatistics.create({
      data: s,
    })
    console.log(`Created player stats with id: ${stats.id}`)
  }

  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
