-- Creates a table users with three column (id, email, name)
-- Only if he doesn't exist
CREATE TABLE IF NOT EXISTS users (
	id INT NOT NULL AUTO_INCREMENT,
	email VARCHAR(255) NOT NULL UNIQUE,
	name VARCHAR(255),
	PRIMARY KEY (id)
);
