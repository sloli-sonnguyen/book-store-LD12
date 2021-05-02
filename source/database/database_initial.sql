CREATE DATABASE bookstoreDB;
USE bookstoreDB;

-- Tạo bảng tác giả
CREATE TABLE Author(
	author_id varchar(50) not null,
	author_name varchar(100) not null,
	PRIMARY KEY (author_id)
);

-- Tạo bảng sách
CREATE TABLE Book(
	book_id varchar(50) not null,
    book_title VARCHAR(100) NOT NULL,
    book_des VARCHAR(300) NOT NULL,
	book_price double NOT NULL,
    book_percent_sale float NOT NULL,
    book_stock int not null,
    book_image_url varchar(250) NOT NULL,
	author_id varchar(50) NOT NULL,
	PRIMARY KEY (book_id),
    FOREIGN KEY (author_id) REFERENCES Author(author_id)
);

-- Tạo bảng Category
CREATE TABLE Category(
	category_id varchar(50) not null,
    category_content varchar(50) not null,
	PRIMARY KEY (category_id)
);

-- Tạo bảng Language
CREATE TABLE Language(
	language_id varchar(50) not null,
    language_content varchar(50) not null,
	PRIMARY KEY (language_id)
);

-- Tạo bảng Book_Category
CREATE TABLE Book_Category(
	book_id varchar(50) not null,
    category_id varchar(50) not null,
	FOREIGN KEY (book_id) REFERENCES Book(book_id),
    FOREIGN KEY (category_id) REFERENCES Category(category_id)
);

-- Tạo bảng Book_Language
CREATE TABLE Book_Language(
	book_id varchar(50) not null,
    language_id varchar(50) not null,
	FOREIGN KEY (book_id) REFERENCES Book(book_id),
    FOREIGN KEY (language_id) REFERENCES Language(language_id)
);

-- Tạo bảng Customer
CREATE TABLE Customer(
	customer_id varchar(50) not null,
    customer_name VARCHAR(100) NOT NULL,
	customer_phone varchar(15) not null,
    customer_address varchar(100) not null,
    customer_email varchar(50) not null,
	PRIMARY KEY (customer_id)
);

-- Tạo bảng Order
CREATE TABLE `Order`(
	order_id varchar(50) not null,
	order_date datetime not null,
    order_note varchar(200) null,
    order_total_price double not null,
    customer_id varchar(50) not null,
	PRIMARY KEY (order_id),
    FOREIGN KEY (customer_id) REFERENCES Customer(customer_id)
);

-- Tạo bảng Order_Item 
CREATE TABLE Order_Item(
	order_id varchar(50) not null,
    book_id varchar(50) not null,
    language_id varchar(50) not null,
    item_number int not null,
    item_price double not null,
	PRIMARY KEY (order_id, book_id, language_id),
	FOREIGN KEY (order_id) REFERENCES `Order`(order_id),
    FOREIGN KEY (book_id) REFERENCES Book(book_id),
    FOREIGN KEY (language_id) REFERENCES Language(language_id)
);

-- Tạo bảng Review
CREATE TABLE Review(
	review_id varchar(50) not null,
	rating float not null,
    content varchar(200) null,
    book_id varchar(50) not null,
    customer_id varchar(50) not null,
	PRIMARY KEY (review_id),
    FOREIGN KEY (customer_id) REFERENCES Customer(customer_id),
    FOREIGN KEY (book_id) REFERENCES Book(book_id)
);