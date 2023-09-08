-- CreateTable
CREATE TABLE "Player" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "team" TEXT NOT NULL,
    "position" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "PlayerStatistics" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "player_id" TEXT NOT NULL,
    "caps" INTEGER NOT NULL,
    "number_of_tries" INTEGER NOT NULL,
    "number_of_points" INTEGER NOT NULL,
    "is_selected" BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT "PlayerStatistics_player_id_fkey" FOREIGN KEY ("player_id") REFERENCES "Player" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Player_id_key" ON "Player"("id");

-- CreateIndex
CREATE UNIQUE INDEX "PlayerStatistics_player_id_key" ON "PlayerStatistics"("player_id");
