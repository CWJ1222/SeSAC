show databases;

CREATE DATABASE mydatabase DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

CREATE DATABASE sesac CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE sesac;

SHOW TABLES;

DROP DATABASE mydatabase;

-- 테이블 관련 명령어
/*
CREATE TABLE 테이블이름(
속성이름1 데이터타입 제약조건,
속성이름2 데이터타입 제약조건
)

제약조건
NOT NULL : null 허용안함
AUTO_INCREMENT : 자동 숫자 증가
PRIMARY KEY : 기본키 설정(중복허용x, null허용x)
DEFAULT : 기본값 설정
UNIQUE : 중복ㄱ허용 null허용 x, 한테이블에 여러개 설정 가능
 

*/

CREATE TABLE products(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    model_number VARCHAR(15) NOT NULL,
    series VARCHAR(30) NOT NULL
);

SHOW TABLES;

DESC products;

DROP TABLE products;

--테이블 수정 속성
ALTER TABLE products ADD new_column VARCHAR(20);

--속성 변경
ALTER TABLE products MODIFY new_column INT;

--속성 삭제
ALTER TABLE products DROP new_column;