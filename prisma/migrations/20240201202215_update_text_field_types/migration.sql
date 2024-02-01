-- AlterTable
ALTER TABLE `accounts` MODIFY `refresh_token` TEXT NULL,
    MODIFY `access_token` TEXT NULL,
    MODIFY `id_token` TEXT NULL;

-- AlterTable
ALTER TABLE `books` MODIFY `description` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `reviews` MODIFY `description` TEXT NOT NULL;
