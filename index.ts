import { app } from './app'
import { logger } from './logger'
const port = process.env.PORT || 3000;

process.on('unhandledRejection', (reason) => logger.error('Unhandled Rejection %O', reason))

app.listen(port, () => {
  logger.info(`Example app listening at http://localhost:${port}`)
});

