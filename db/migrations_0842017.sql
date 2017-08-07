-- CREATE DATABASE envi_dev2;
-- \c envi_dev2

CREATE TABLE IF NOT EXISTS sight_log (
  id SERIAL PRIMARY KEY,
  keyOne VARCHAR(50),
  keyTwo VARCHAR(50),
  keyThree VARCHAR(50),
  keyFour VARCHAR(50),
    keyFive VARCHAR(50),
      keySix VARCHAR(50),
        keySeven VARCHAR(50),
          keyEight VARCHAR(50),
            keyNine VARCHAR(50),
             keyTen VARCHAR(50),
              keyEle VARCHAR(50),
               keyTwelve VARCHAR(50)
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
