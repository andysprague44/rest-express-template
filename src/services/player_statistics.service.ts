import { PlayerStatistics, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export async function get(player_id: string){
  const user = await prisma.playerStatistics.findUnique({
    where: { player_id: player_id }
  })
  return user
}

export async function update(body: any) {
  //TODO
  return `TODO update player`;
}
