CREATE DATABASE practice CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE practice;

SHOW TABLES;


CREATE TABLE member (
    id VARCHAR(20) NOT NULL PRIMARY KEY,
    name VARCHAR(5) NOT NULL,
    age INT DEFAULT NULL,
    gender VARCHAR(2) NOT NULL,
    email VARCHAR(50) DEFAULT NULL,
    promotion VARCHAR(2) DEFAULT 'x'
);

DESC member;