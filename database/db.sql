-- creating the database
CREATE DATABASE crudenodejsmysql;

-- using the database
use crudenodejsmysql;

-- creating a table
CREATE TABLE customer (
  id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  adress VARCHAR(100) NOT NULL,
  email VARCHAR(50) NOT NULL,
  phone VARCHAR(15) NOT NULL
);
