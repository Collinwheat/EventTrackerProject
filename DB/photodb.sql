-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema photodb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `photodb` ;

-- -----------------------------------------------------
-- Schema photodb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `photodb` DEFAULT CHARACTER SET utf8 ;
USE `photodb` ;

-- -----------------------------------------------------
-- Table `photo`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `photo` ;

CREATE TABLE IF NOT EXISTS `photo` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `location_taken` VARCHAR(20) NULL,
  `image_url` VARCHAR(2000) NULL,
  `date_taken` VARCHAR(45) NULL,
  `camera` VARCHAR(45) NULL,
  `description` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS cwheat@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'cwheat'@'localhost' IDENTIFIED BY 'Cw77786!';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'cwheat'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `photo`
-- -----------------------------------------------------
START TRANSACTION;
USE `photodb`;
INSERT INTO `photo` (`id`, `location_taken`, `image_url`, `date_taken`, `camera`, `description`) VALUES (1, 'Atlanta', 'https://www.instagram.com/p/BuWa3_sDHd-/', NULL, 'Panasonic G7', NULL);
INSERT INTO `photo` (`id`, `location_taken`, `image_url`, `date_taken`, `camera`, `description`) VALUES (2, 'New York City', 'https://www.instagram.com/p/B7CcS9oHv_b/', NULL, 'Panasonic G7', NULL);
INSERT INTO `photo` (`id`, `location_taken`, `image_url`, `date_taken`, `camera`, `description`) VALUES (3, 'New York City', 'https://www.instagram.com/p/B6tKROanSsT/', NULL, 'Panasonic G7', NULL);
INSERT INTO `photo` (`id`, `location_taken`, `image_url`, `date_taken`, `camera`, `description`) VALUES (4, 'Atlanta', 'https://www.instagram.com/p/B76YrcqHLzi/', NULL, 'Panasonic G7', NULL);
INSERT INTO `photo` (`id`, `location_taken`, `image_url`, `date_taken`, `camera`, `description`) VALUES (5, 'Atlanta', 'https://www.instagram.com/p/BxATBEXDkua/', NULL, 'Panasonic G7', NULL);
INSERT INTO `photo` (`id`, `location_taken`, `image_url`, `date_taken`, `camera`, `description`) VALUES (6, 'Atlanta', 'https://www.instagram.com/p/BuWa3_sDHd-/', NULL, 'Panasonic G7', NULL);
INSERT INTO `photo` (`id`, `location_taken`, `image_url`, `date_taken`, `camera`, `description`) VALUES (7, 'New York', 'https://www.instagram.com/p/B63xBlNn3nV/', NULL, 'Nikon d3300', NULL);
INSERT INTO `photo` (`id`, `location_taken`, `image_url`, `date_taken`, `camera`, `description`) VALUES (8, 'Hiawassee', 'https://www.instagram.com/p/B2SDYtUHaSQ/', NULL, 'Nikon d3300', NULL);
INSERT INTO `photo` (`id`, `location_taken`, `image_url`, `date_taken`, `camera`, `description`) VALUES (9, 'Destin', 'https://www.instagram.com/p/B3XkYbtHl0o/', NULL, 'Panasonic G7', NULL);
INSERT INTO `photo` (`id`, `location_taken`, `image_url`, `date_taken`, `camera`, `description`) VALUES (10, 'Nassau', 'https://www.instagram.com/p/CWHKXxVPsip/', NULL, 'Panasonic G7', NULL);

COMMIT;

