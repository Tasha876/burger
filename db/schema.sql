CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE IF NOT EXISTS 
  burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured TINYINT DEFAULT 0,
    PRIMARY KEY (id)
  );