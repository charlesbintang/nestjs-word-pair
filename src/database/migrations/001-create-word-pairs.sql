-- Migration: Create word_pairs table
CREATE TABLE IF NOT EXISTS `word_pairs` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `word1` VARCHAR(255) NOT NULL,
  `word2` VARCHAR(255) NOT NULL,
  `description` TEXT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `idx_word1` (`word1`),
  INDEX `idx_word2` (`word2`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
