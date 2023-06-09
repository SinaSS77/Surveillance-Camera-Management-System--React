DROP TABLE IF EXISTS cameras CASCADE;

CREATE TABLE
  cameras (
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INTEGER REFERENCES users (id),
    camera_name VARCHAR(25),
    camera_url TEXT,
    status SMALLINT
  );