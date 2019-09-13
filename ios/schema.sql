CREATE TABLE sets (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  code TEXT NOT NULL UNIQUE,
  arena_code TEXT NOT NULL,
  keyrune TEXT NOT NULL,
  -- Model
  created_at TIMESTAMP default current_timestamp NOT NULL,
  updated_at TIMESTAMP default current_timestamp NOT NULL,
  deleted_at TIMESTAMP NULL
);


CREATE TABLE cards (
  id UUID PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  set TEXT NOT NULL,
  image TEXT NOT NULL,
  -- Model
  created_at TIMESTAMP default current_timestamp NOT NULL,
  updated_at TIMESTAMP default current_timestamp NOT NULL,
  deleted_at TIMESTAMP NULL,
  FOREIGN KEY(set) REFERENCES sets(code)
);
