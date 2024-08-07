CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) UNIQUE NOT NULL,
  description VARCHAR(100) UNIQUE NOT NULL,
  value REAL UNIQUE NOT NULL,
  supplier VARCHAR (50) UNIQUE NOT NULL
);
