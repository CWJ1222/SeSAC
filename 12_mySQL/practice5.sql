desc user;
SELECT * FROM user;

SELECT * FROM user ORDER BY birthday ASC;

SELECT * FROM user WHERE gender='M' ORDER BY name DESC;

SELECT id, name FROM user WHERE birthday LIKE '199%';

SELECT * FROM user WHERE birthday LIKE '_____06___' ORDER BY birthday ASC;

SELECT * FROM user WHERE gender='M' AND birthday LIKE '1970%';

SELECT * FROM user ORDER BY age DESC LIMIT 3;

SELECT * FROM user WHERE BETWEEN 25 AND 50;

UPDATE user
SET pw = '12345678'
WHERE id = 'hong1234';


DELETE FROM user
WHERE id = 'jungkrat';