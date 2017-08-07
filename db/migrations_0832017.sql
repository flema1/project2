
-- CREATE DATABASE envi_dev;
-- \c envi_dev

CREATE TABLE IF NOT EXISTS sight_log (
  id SERIAL PRIMARY KEY,
  keyOne VARCHAR(50),
  keyTwo VARCHAR(50),
  keyThree VARCHAR(50),
  keyFour VARCHAR(50)
);




CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT NOT NULL,
  firstname VARCHAR(255),
  lastname VARCHAR(255)
);

ALTER TABLE sight_log
ADD COLUMN user_id INTEGER REFERENCES users(id);
