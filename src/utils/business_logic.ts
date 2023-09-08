import { Player, PlayerStatistics } from "@prisma/client";
import { logger } from '../../logger'

export class MyBusinessLogic {
    loan_term_months: number = 72

    update_from_game(
        player: Player,
        stats: PlayerStatistics,
        tries_scored: number = 0,
        points_scored: number = 0): PlayerStatistics {
        logger.info(`Updating stats of ${player.name}`)
        stats.caps += 1
        stats.number_of_tries += tries_scored
        stats.number_of_points += points_scored
        return stats
    }
}
