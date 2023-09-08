import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export async function get() {
  //TODO pagination
  const users = await prisma.player.findMany()
  return users
}

export async function getSingleById(id: any){
  const user = await prisma.player.findUnique({
    where: { id: id }
  })
  return user
}

export async function create(user: any) {
  const created_player = await prisma.player.create({
    data: {
      id: user.id,
      name: user.name,
      team: user.team,
      position: user.position,
    },
  })
  await prisma.playerStatistics.create({
    data: {
      id: user.id,
      player_id: created_player.id,
      caps: user.stats.caps,
      number_of_tries: user.stats.number_of_tries,
      number_of_points: user.stats.number_of_points,
      is_selected: user.stats.is_selected,
    },
  })
  return `New player ${created_player.name} created`;
}
