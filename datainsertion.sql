insert into users values (0, 'blars', 'password1', 'Bert', 'Larsson', 'teacher');
insert into users values (1, 'psven', 'password2', 'Peter', 'Svensson', 'student');
insert into users values (2, 'skarl', 'password3', 'Sofia', 'Karlsson', 'student');
insert into users values (3, 'kjoha', 'password4', 'Kalle', 'Johansson', 'student');
insert into users values (4, 'mgust', 'password5', 'Mikael', 'Gustavsson', 'admin');

insert into tests values (0, 'Math test Addition', 0);
insert into tests values (1, 'Math test Multiplication', 0);
insert into tests values (2, 'Geography test', 0);
insert into tests values (3, 'Java test', 0);

insert into questions values (1, 'What is 2+2?', 0);
insert into questions values (2, 'What is 3+5?', 0);
insert into questions values (3, 'What is 4+5?', 0);
insert into questions values (4, 'What is 3*2?', 1);
insert into questions values (5, 'What is 4*6?', 1);
insert into questions values (6, 'What is 6*3?', 1);
insert into questions values (7, 'What is the capital of Sweden?', 2);
insert into questions values (8, 'What is the capital of Norway?', 2);
insert into questions values (9, 'What is the capital of Denmark?', 2);
insert into questions values (10, 'What is the Java keyword that creates inheritance?', 3);
insert into questions values (11, 'What does inheritance represent?', 3);
insert into questions values (12, 'What is the correct syntax for main method of a Java class', 3);
insert into questions values (13, 'What is the result of 5/2 in Java', 3);


insert into options values (1, 4, 1, 'correct');
insert into options values (2, 2, 1, 'wrong');
insert into options values (3, 9, 1, 'wrong');
insert into options values (4, 6, 1, 'wrong');
insert into options values (5, 8, 2, 'correct');
insert into options values (6, 3, 2, 'wrong');
insert into options values (7, 7, 2, 'wrong');
insert into options values (8, 1, 2, 'wrong');
insert into options values (9, 9, 3, 'correct');
insert into options values (10, 4, 3, 'wrong');
insert into options values (11, 2, 3, 'wrong');
insert into options values (12, 10, 3, 'wrong');


insert into options values (13, 6, 4, 'correct');
insert into options values (14, 10, 4, 'wrong');
insert into options values (15, 4, 4, 'wrong');
insert into options values (16, 14, 4, 'wrong');
insert into options values (17, 24, 5, 'correct');
insert into options values (18, 32, 5, 'wrong');
insert into options values (19, 20, 5, 'wrong');
insert into options values (20, 14, 5, 'wrong');
insert into options values (21, 18, 6, 'correct');
insert into options values (22, 23, 6, 'wrong');
insert into options values (23, 12, 6, 'wrong');
insert into options values (24, 16, 6, 'wrong');

insert into options values (25, 'Göteborg', 7, 'wrong');
insert into options values (26, 'Stockholm', 7, 'correct');
insert into options values (27, 'Malmö', 7, 'wrong');
insert into options values (28, 'Växjö', 7, 'wrong');
insert into options values (29, 'Oslo', 8, 'correct');
insert into options values (30, 'Bergen', 8, 'wrong');
insert into options values (31, 'Egersund', 8, 'wrong');
insert into options values (32, 'Fredrikstad', 8, 'wrong');
insert into options values (33, 'Köpenhamn', 9, 'correct');
insert into options values (34, 'Fredericia', 9, 'wrong');
insert into options values (35, 'Herning', 9, 'wrong');
insert into options values (36, 'Horsens', 9, 'wrong');

insert into options values (37, 'Enlarge', 10, 'wrong');
insert into options values (38, 'Extends', 10, 'correct');
insert into options values (39, 'Inherits', 10, 'wrong');
insert into options values (40, 'Inheritance', 10, 'wrong');
insert into options values (41, 'HAS-A relationship', 11, 'wrong');
insert into options values (42, 'IS-A relationship', 11, 'correct');
insert into options values (43, 'public static int main(String[] args)', 12, 'wrong');
insert into options values (44, 'public int main(String[] args)', 12, 'wrong');
insert into options values (45, 'public static void main(String[] args)', 12, 'correct');
insert into options values (46, 'None of the above', 12, 'wrong');
insert into options values (47, '2', 13, 'correct');
insert into options values (48, '2.5', 13, 'wrong');
insert into options values (49, '3', 13, 'wrong');
insert into options values (50, 'None of the above', 13, 'wrong');


insert into completed_tests values (0, 'Geography test', 1);
insert into completed_tests values (1, 'Math test Addition', 3);
insert into completed_tests values (2, 'Math test Multiplication', 2);

insert into completed_questions values (0, 'What is the capital of Sweden?', 0);
insert into completed_questions values (1, 'What is the capital of Denmark?', 0);
insert into completed_questions values (2, 'What is the capital of Norway?', 0);

insert into completed_questions values (3, 'What is 2+2?', 1);
insert into completed_questions values (4, 'What is 3+5?', 1);
insert into completed_questions values (5, 'What is 4+5?', 1);

insert into completed_questions values (6, 'What is 3*2?', 2);
insert into completed_questions values (7, 'What is 4*6?', 2);
insert into completed_questions values (8, 'What is 6*3?', 2);

insert into answers values (0, 'Stockholm', 0, 'correct');
insert into answers values (1, 'Bergen', 1, 'wrong');
insert into answers values (2, 'Köpenhamn', 2, 'correct');

insert into answers values (3, 4, 3, 'correct');
insert into answers values (4, 3, 4, 'wrong');
insert into answers values (5, 2, 5, 'wrong');

insert into answers values (6, 10, 6, 'wrong');
insert into answers values (7, 24, 7, 'correct');
insert into answers values (8, 18, 8, 'correct');

select * from completed_tests;
select * from completed_questions;
select * from answers;