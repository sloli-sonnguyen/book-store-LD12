ALTER USER 'sonnguyen'@'localhost' IDENTIFIED WITH mysql_native_password BY '20184186';
CREATE DATABASE bookstoreDB;
grant all privileges on `bookstoreDB`.* to 'sonnguyen'@'localhost';

USE bookstoreDB;


-- Tạo bảng tác giả
CREATE TABLE Authors(
	author_id varchar(50) not null,
	author_name varchar(100) not null,
	PRIMARY KEY (author_id)
);

-- Default data author
INSERT INTO 
	Authors(author_id, author_name)
VALUES
	('1','Rodolfo Mosciski'),
	('2','Romaine Christiansen'),
    ('3','Luther Marks'),
	('4','Cleora Boyle DDS'),
    ('5','Annie Corkery'),
	('6','Mr. Houston Lakin'),
    ('7','Mr. Elody Weber'),
	('8','Magnolia Bosco');
    
select * from authors;



-- Tạo bảng Category
CREATE TABLE categories(
	category_id varchar(50) not null,
    category_content varchar(50) not null,
	PRIMARY KEY (category_id)
);

-- Default data category
INSERT INTO 
	categories(category_id, category_content)
VALUES
	('1','history'),
	('2','science'),
    ('3','business'),
	('4','fiction');
    
select * from categories;


CREATE TABLE Languages(
	language_id varchar(50) not null,
    language_content varchar(50) not null,
	PRIMARY KEY (language_id)
);

-- Default data category
INSERT INTO 
	Languages(language_id, language_content)
VALUES
	('1','japanese'),
	('2','vietnamese'),
    ('3','english'),
	('4','chinese');
    
select * from Languages;


-- Tạo bảng sách
CREATE TABLE Books(
	book_id varchar(50) not null,
    book_title VARCHAR(100) NOT NULL,
    book_des VARCHAR(300) NOT NULL,
	book_price double NOT NULL,
    book_percent_sale float NOT NULL,
    book_stock int not null,
    book_image_url varchar(250) NOT NULL,
	author_id varchar(50) NOT NULL,
    language_id varchar(50) not null,
    category_id varchar(50) not null,
	PRIMARY KEY (book_id),
    FOREIGN KEY (author_id) REFERENCES Authors(author_id),
    FOREIGN KEY (language_id) REFERENCES Languages(language_id),
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

-- Default book data

INSERT INTO Books (book_id, book_title, book_des, book_price, book_percent_sale, book_stock, book_image_url, author_id, language_id, category_id)
VALUES 
	('1','Corporate Infrastructure Associate','description 1', 449, 0.3, 10, 'https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-1.jpg', '1', '2', '2'),
	('2','Legacy Implementation Consultant','description 2', 300, 0.3, 20, 'https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-30.jpg', '2', '3', '1');


select * from books;

-- Tạo bảng Customer
CREATE TABLE Customers(
	customer_id varchar(50) not null,
    customer_name VARCHAR(100) NOT NULL,
	customer_phone varchar(15) not null,
    customer_address varchar(100) not null,
    customer_email varchar(50) not null,
	PRIMARY KEY (customer_id)
);

-- Default customer data
INSERT INTO Customers (customer_id, customer_name, customer_phone, customer_address, customer_email)
VALUES 
	('1','Duy Anh','232323444',  'Ha Noi', 'duyanh123@gmail.com'),
	('2','Hoang Son','999499844', 'Ha Noi', 'hoangson123@gmail.com');


select * from Customers;

-- Tạo bảng Order
CREATE TABLE `Orders`(
	order_id varchar(50) not null,
	order_date date not null,
    order_note varchar(200) null,
    order_total_price double not null,
    order_address varchar(50) not null,
    customer_id varchar(50) not null,
	PRIMARY KEY (order_id),
    FOREIGN KEY (customer_id) REFERENCES Customers(customer_id)
);

-- Default orders data
INSERT INTO Orders (order_id, order_date, order_note, order_total_price, order_address, customer_id)
VALUES 
	('1','2021-01-05','Careful',  1000, 'Ha Noi', '1'),
	('2','2018-02-08','To friend', 2000, 'Ninh Binh', '2');


select * from Orders;


-- Tạo bảng Order_Item 
CREATE TABLE Order_Items(
	order_id varchar(50) not null,
    book_id varchar(50) not null,
    item_number int not null,
    item_price double not null,
	PRIMARY KEY (order_id, book_id),
	FOREIGN KEY (order_id) REFERENCES `Orders`(order_id),
    FOREIGN KEY (book_id) REFERENCES Books(book_id)
);

-- Default Order_Items data
INSERT INTO Order_Items (order_id, book_id, item_number, item_price)
VALUES 
	('1','1', 2,  100),
	('1','2', 3, 200),
    ('2','1', 5,  100);


select * from Order_Items;

