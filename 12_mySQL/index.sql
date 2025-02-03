show databases;
CREATE DATABASE mydatabase DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

CREATE DATABASE sesac CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
/* 
utf8 : 한글 및 영어..
utf8mb4 : utf8 보다 더 많은 문자열 저장 가능
- 이모지, 특수문자, 다국어...
 */

-- 데이터 베이스 사용 선언
USE sesac;

-- 테이블 목록 확인
SHOW TABLES;

-- 데이터 베이스 삭제
DROP DATABASE mydatabase;

###################[테이블 관련 명령어]#####################
/* 
CREATE TABLE 테이블이름(
    속성이름1 데이터타입 제약조건,
    속성이름2 데이터타입 제약조건
);
 */
--  제약조건
-- NOT NULL : null 허용 x
-- AUTO_INCREMENT: 자동 숫자 증가
-- PRIMARY KEY: 기본키 설정(중복 허용x, null 허용x)
-- DEFAULT: 기본 값 설정
-- UNIQUE: 중복 허용x, null 허용x, 한 테이블에 여러 개 설정 가능

CREATE TABLE products(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    model_number VARCHAR(15) NOT NULL,
    series VARCHAR(30) NOT NULL
);

-- 테이블 목록 확인
SHOW TABLES;

-- 테이블 구조 확인
DESC products;

DROP TABLE products;

-- 테이블 속성 수정
ALTER TABLE products ADD new_column VARCHAR(20);

ALTER TABLE products MODIFY new_column INT;

ALTER TABLE products DROP new_column;

############################## 여기부터 DML
-- 데이터 조작어
-- 데이터 CRUD 를 위해 사용하는 SQL 문


CREATE TABLE user(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    age INT NOT NULL,
    address VARCHAR(100)
);

DROP TABLE user;

SHOW TABLES;

desc user;

----create ~ INSERT INTO
INSERT INTO user (name, age, address) VALUES('김민정', 20, '서울특별시 마포구');
INSERT INTO user (name, age, address) VALUES('이민정', 23, '서울특별시 강남구');
INSERT INTO user (name, age, address) VALUES('최아라', 26, '서울특별시 노원구');
INSERT INTO user (name, age, address) VALUES('한규속', 28, '서울특별시 도봉구');
INSERT INTO user (name, age, address) VALUES('김상규', 30, '서울특별시 관악구');
INSERT INTO user (name, age, address) VALUES('한상규', 45, '서울특별시 동대문구');
INSERT INTO user (name, age, address) VALUES('송상승', 19, '서울특별시 중구');
INSERT INTO user (name, age, address) VALUES('도민준', 90, '서울특별시 성산구');
INSERT INTO user (name, age, address) VALUES('한나라', 40, '서울특별시 강서구');
INSERT INTO user (name, age, address) VALUES('한상규', 46, '서울특별시 강동구');
INSERT INTO user (name, age, address) VALUES('박준민', 89, '서울특별시 잠실구');
INSERT INTO user (name, age, address) VALUES('김순혜', 25, '서울특별시 성북구');
INSERT INTO user (name, age, address) VALUES('김순혜', 25, '부산시 동구');
INSERT INTO user (name, age, address) VALUES('김순혜', 25, '울산시 중구');
INSERT INTO user (name, age, address) VALUES('김순혜', 25, '춘천시 남구');
INSERT INTO user (name, age, address) VALUES('김순희', 25, '춘천시 남구');
INSERT INTO user (name, age, address) VALUES('강희망', 25, '춘천시 남구');
INSERT INTO user (name, age, address) VALUES('강희망', 25, '부산광역시 남구');




--Read ~ SELECT FROM [WHERE]
SELECT * FROM user; --전체 컬럼 조회

SELECT name FROM user; --특정컬럼 전체 조회

SELECT age, name FROM user; --특정컬럼 2개 전체 조회

--where 절을 이용해서 조건 걸기
SELECT * FROM user WHERE age >= 25;

SELECT * FROM user WHERE id=3;

desc user;

SELECT id, age FROM user WHERE name = '박준민';

--LIKE 패턴조회
SELECT * FROM user WHERE address LIKE '서울%';

SELECT * FROM user  WHERE name LIKE '__희';
SELECT * FROM user  WHERE name LIKE '%희%';
SELECT * FROM user  WHERE address LIKE '%광역시%';

--IN(list)
SELECT * FROM user WHERE age IN(20,21,22,23); --20, 21 22 23 중 하나

--BETWEEN a AND b
SELECT * FROM user WHERE age BETWEEN 25 AND 30;--25이상 30이하

INSERT INTO user(name, age) VALUES('서현승', 28);

desc user;

SELECT * FROM user;

--주소가 null인 사람 조회
SELECT * FROM user WHERE address IS NULL;
SELECT * FROM user WHERE address IS NOT NULL;

--논리연산자
--주소가 null아님, age가 25보다 큰

SELECT * FROM user WHERE address IS NOT NULL AND age <=25;

--최씨이고, 나이가 22인 사람

SELECT * FROM user WHERE name LIKE '최%' AND age =22;

--서울에 살거나 김씨인 사람
SELECT * FROM user WHERE address LIKE '서울%' OR name LIKE '김%';

--order by, distinct, limit
SELECT * FROM user ORDER BY age DESC; --age기준으로 내림차순 정렬

--id가 6보다 큰것을 조회 후 age 기준으로 오름차순 정렬
SELECT * FROM user WHERE id > 6 ORDER BY age ASC;

--distinct
SELECT age from user ORDER BY age ASC;
SELECT DISTINCT age from user ORDER BY age ASC; --age 중복값을 없애줌

--서울시에 사는 사람의 이름 2개만 호출하기
SELECT name, address from user WHERE address LIKE '서울%' LIMIT 2;
SELECT name, address from user WHERE address LIKE '서울%' ORDER BY name ASC LIMIT 3;
SELECT name, address from user WHERE address LIKE '서울%' ORDER BY name ASC;

SELECT * FROM user;

SHOW DATABASES;

USE sesac;

SHOW TABLES;

SELECT * FROM user;

UPDATE user SET address = "서울특별시 도봉구" WHERE id=1;

UPDATE user SET address="제주특별자치도 제주시", name="이지현" WHERE id=2;

--delete
/*
DELETE FROM 테이블명
WHERE 조건

*/

DELETE FROM user WHERE id=11;
DELETE FROM user WHERE id>8 AND id<11;

SELECT * FROM user;
SELECT * FROM student;

CREATE TABLE student(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL DEFAULT "홍길동",
    hobby VARCHAR(20)
);

DESC student;

INSERT INTO student(hobby) VALUES("등산");
INSERT INTO student(hobby,name) VALUES("등산","박상우");


SELECT * FROM student;

-- having 과 group by
DROP TABLE IF EXISTS user; --user 테이블이 존재할 경우 삭제
SHOW TABLES;

CREATE TABLE user(
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    specialize ENUM("축구","야구","클라이밍","배드민턴") NOT NULL,
    gender ENUM("남","여") NOT NULL,
    career_year INT NOT NULL
);


INSERT INTO user VALUES(NULL, '김판곤', '축구', '남', 40);
INSERT INTO user VALUES(NULL, '손흥민', '축구', '남',15);
INSERT INTO user VALUES(NULL, '김자인', '클라이밍', '여',10);
INSERT INTO user VALUES(NULL, '김동우', '축구', '남',1);
INSERT INTO user VALUES(NULL, '전유진', '배드민턴', '여',2);
INSERT INTO user VALUES(NULL, '이대호', '야구', '남',24);
INSERT INTO user VALUES(NULL, '안세영', '배드민턴', '여',11);
INSERT INTO user VALUES(NULL, '배서연', '클라이밍', '여',3);
INSERT INTO user VALUES(NULL, '황희찬', '축구', '남',9);
INSERT INTO user VALUES(NULL, '지소연', '축구', '여',17);
INSERT INTO user VALUES(NULL, '이정후', '야구', '남',11);
INSERT INTO user VALUES(NULL, '김광현', '야구', '남',21);
SELECT * FROM user;

--집계함수 사용해보기
--count sum avg min max

SELECT COUNT(specialize) FROM user WHERE specialize="축구";
--specialize 가 축구인 튜플의 개수

SELECT SUM(career_year) FROM user;
--전체 선수의 경력 합

SELECT AVG(career_year) FROM user WHERE specialize="축구";
SELECT MIN(career_year) FROM user WHERE specialize="축구";
SELECT MAX(career_year) FROM user WHERE specialize="축구";

--group by(같은 그룹끼리 묶어서 조회)
SELECT specialize FROM user GROUP BY specialize;
SELECT specialize, COUNT(specialize) FROM user GROUP BY specialize;
--각각 몇명인지 알 수 있음

--having
SELECT specialize, COUNT(specialize)
FROM user
WHERE gender = "여"
GROUP BY specialize
HAVING COUNT(specialize) >=2;
--2명 이상 해당되는 것만 불러옴
/*

	•	각 그룹의 레코드 수가 2 이상인 그룹만 결과에 포함합니다.
	•	HAVING은 그룹화된 데이터에 대한 조건을 설정합니다.
	•	위 예제에서 “기획” 그룹은 레코드 수가 1이므로 결과에서 제외됩니다.
*/
