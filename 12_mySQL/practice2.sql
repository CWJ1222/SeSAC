DESC member;

ALTER TABLE member MODIFY id varchar(10);

ALTER TABLE member DROP age;

ALTER TABLE member ADD interest VARCHAR(100);