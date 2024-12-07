-- Active: 1732850335286@@127.0.0.1@3306@sesac
SHOW DATABASES;

CREATE DATABASE mvc_mysql CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE mvc_mysql;

USE sesac;
SHOW TABLES;


CREATE TABLE visitor (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    comment MEDIUMTEXT DEFAULT NULL
);

DESC visitor;

DROP TABLE visitor;

SELECT * FROM visitor;

INSERT INTO visitor(name,comment) VALUES("홍길동", "내가 왔다.");
INSERT INTO visitor(name,comment) VALUES("이찬혁", "으라차차");
INSERT INTO visitor(name,comment) VALUES("삭제예정", "으라차차");

--data수정
UPDATE visitor SET comment = "야호" WHERE id=2;
--data삭제
DELETE FROM visitor WHERE id=3;

--DCL  제어어
CREATE USER 'sesac1'@'%' IDENTIFIED BY '1234';
GRANT ALL PRIVILEGES ON *.* TO 'sesac1'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES

ALTER USER 'sesac'@'%' IDENTIFIED WITH mysql_native_password by '1234';

SELECT * FROM mysql.user;

SHOW GRANTS for 'sesac'@'%';