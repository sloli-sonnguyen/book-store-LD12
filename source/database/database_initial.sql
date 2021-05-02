CREATE DATABASE bankDB;
USE bankDB;

-- Tạo bảng khách hàng
CREATE TABLE Customers(
	CustomerId int not null,
    Name VARCHAR(100) NOT NULL,
    IdentificationCardNumber int not null,
	City VARCHAR(30) NOT NULL,
    DateOfBirth datetime NOT NULL,
    Gender boolean not null,
    Email varchar(80) NOT NULL,
    Phone varchar(10) NOT NULL,
    Nationality varchar(50) NOT NULL,
	PRIMARY KEY (CustomerId)
);

INSERT INTO Customers(CustomerId, Name, IdentificationCardNumber, City, DateOfBirth, Gender, Email, Phone, Nationality)
VALUES
(25627,'Nguyen Hoang Son', 298122234, 'Ha Noi', '1993-01-13 00:00:00', 1, 'hoangson123@gmail.com', '0972123726', 'Viet Nam'),
(23247,'Vu Ngoc Minh', 598222284, 'Thai Binh', '1994-04-22 00:00:00', 1, 'ngocminh123@gmail.com', '0962998726', 'Viet Nam'),
(99893,'Pham Huy Ky Anh', 608222224, 'Thai BInh', '2000-08-13 00:00:00', 1, 'kyanh123@gmail.com', '0962098726', 'Viet Nam'),
(78980,'Do Duy Hoang', 792112234, 'Ha Noi', '1999-02-11 00:00:00', 1, 'duyanh123@gmail.com', '0962928726', 'Viet Nam'),
(25629,'Nguyen Hoang Hai', 298122235, 'Cao Bang', '1994-11-12 00:00:00', 1, 'hoanghai123@gmail.com', '0972123727', 'Viet Nam'),
(23246,'Vu Ngoc Hieu', 598222285, 'Lang Son', '1995-03-12 00:00:00', 1, 'ngochieu123@gmail.com', '0962998727', 'Viet Nam'),
(99895,'Pham Huy Lam', 608222225, 'Hoa Binh', '2000-11-03 00:00:00', 1, 'huylam123@gmail.com', '0962098727', 'Viet Nam'),
(78987,'Do Duy Tuan', 792112235, 'Phu Tho', '1998-03-10 00:00:00', 1, 'duytuan123@gmail.com', '0962928727', 'Viet Nam'),
(25628,'Nguyen Hoang Tung', 298122236, 'Tien Giang', '1995-11-13 00:00:00', 1, 'hoangtung123@gmail.com', '0972123728', 'Viet Nam'),
(23245,'Vu Ngoc Binh', 598222286, 'Hau Giang', '1990-04-29 00:00:00', 1, 'ngocbinh123@gmail.com', '0962998728', 'Viet Nam'),
(99894,'Pham Huy Dung', 608222226, 'Lam Dong', '2001-10-13 00:00:00', 1, 'huydung123@gmail.com', '0962098728', 'Viet Nam'),
(78988,'Do Duy Manh', 792112236, 'Ca Mau', '1993-02-10 00:00:00', 1, 'duymanh123@gmail.com', '0962928728', 'Viet Nam'),
(25626,'Nguyen Hoang Kien', 298122237, 'Kien Giang', '1999-01-10 00:00:00', 1, 'hoangkien123@gmail.com', '0972123729', 'Viet Nam'),
(23240,'Vu Ngoc Hoa', 598222287, 'Hung Yen', '1996-09-10 00:00:00', 1, 'ngochoa123@gmail.com', '0962998729', 'Viet Nam'),
(99890,'Pham Huy Bao', 608222227, 'Nam Dinh', '2000-10-03 00:00:00', 1, 'huybao123@gmail.com', '0962098729', 'Viet Nam');

select * from Customers;

-- Tạo bảng tài khoản
CREATE TABLE Accounts(
	AccountNo int not null,
	Role VARCHAR(30) NOT NULL,
    Balance float NOT NULL,
    OpenDate datetime NOT NULL,
	PRIMARY KEY (AccountNo)
);

INSERT INTO Accounts(AccountNo, Role, Balance, OpenDate)
VALUES
(19988777,'Admin', 10000000000,'2019-01-13 00:00:00'),
(19955666,'Normal', 1234567,'2019-04-12 00:00:00'),
(19932432,'Normal', 2786854,'2019-04-26 00:00:00'),
(19434084,'Normal', 3757869,'2019-05-06 00:00:00'),
(19124356,'Normal', 100000,'2019-05-27 00:00:00'),
(19142673,'Normal', 500000,'2019-06-04 00:00:00'),
(19908975,'Normal', 10000000,'2020-06-16 00:00:00'),
(19979674,'Normal', 22000000,'2020-07-11 00:00:00'),
(19098979,'Normal', 5000000,'2020-08-15 00:00:00'),
(19235646,'Normal', 600100,'2020-10-20 00:00:00'),
(19898976,'Normal', 420000,'2020-10-22 00:00:00'),
(19242477,'Normal', 6700000,'2020-11-01 00:00:00'),
(19888190,'Normal', 2541200,'2020-12-09 00:00:00'),
(19222939,'Normal', 8776289,'2020-12-15 00:00:00'),
(19111982,'Normal', 12323982,'2020-12-21 00:00:00');

select * from accounts;

-- Tạo bảng giao dịch // *** chua insert du lieu
CREATE TABLE Transactions(
	TransactionId int not null,
    SendAccountNo int not null,
    ReceiveAccountNo int not null,
    Amount float not null,
    Balance float not null,
    DateOfTrans datetime not null,
    TransferContent VARCHAR(100) NOT NULL,
    PRIMARY KEY (TransactionId)
);

INSERT INTO Transactions(TransactionId, SendAccountNo, ReceiveAccountNo, Amount, Balance, DateOfTrans, TransferContent)
VALUES
	(9889, 19932432, 19235646, 1000000, 10000000, '2020-06-04 00:00:00', 'Chuyen tien mua may tinh'),
    (1111, 19434084, 19098979, 2000000, 30000000, '2020-09-22 00:00:00', 'Dong hoc phi'),
    (3333, 19124356, 19979674, 500000, 15000000, '2020-09-04 00:00:00', 'Chuyen tien'),
    (8888, 19142673, 19908975, 9000000, 60000000, '2020-11-22 00:00:00', 'Chuyen tien mua ban ghe');
    
select * from transactions;

-- Tạo bảng khoản vay
CREATE TABLE Loans(
	LoanId int not null,
	Status boolean not null,
    DateOfLoan datetime not null,
    Duration int not null,
    TotalAmount float not null,
    RemainingAmount float not null,
    InterestRate float not null,
    PRIMARY KEY (LoanId)
);
-- chuan bi lam
INSERT INTO Loans(LoanId, Status, DateOfLoan, Duration, TotalAmount, RemainingAmount, InterestRate)
VALUES
(100, 1, '2019-01-13 00:00:00', 100, 10000000, 2000000, 0.08),
(123, 0, '2019-01-16 00:00:00', 365, 25000000, 0, 0.095),
(132, 0, '2019-02-04 00:00:00', 30, 50000000, 0, 0.06),
(141, 1, '2019-02-05 00:00:00', 60, 40000000, 23500000, 0.07),
(159, 1, '2019-03-19 00:00:00', 90, 65000000, 12000000, 0.075),
(238, 1, '2019-03-20 00:00:00', 120, 70000000, 62540000, 0.085);

select * from LOANS;

-- Tạo bảng lãi suất
CREATE TABLE Interests(
	InterestId int not null,
	Name VARCHAR(100) NOT NULL,
    InterestRate float not null,
    Duration int not null,
    PRIMARY KEY (InterestId)
);

INSERT INTO Interests(InterestId, Name, InterestRate, Duration)
VALUES
	(18, "low", 0.03, 90),
    (61, "basic", 0.06, 180),
    (98, "super", 0.08, 365);

select * from interests;

-- Tạo bảng tài khoản tiết kiệm
CREATE TABLE DepositAccounts(
	DepositAccountNo int not null,
    AccountNo int not null,
    CustomerId int not null,
    InterestId int not null,
    Duration int not null,
    InitialAmount float not null,
    InterestAmount float not null,
    CurrentBalance float not null,
    OpenDate datetime not null,
    CloseDate datetime not null,
    PRIMARY KEY (DepositAccountNo)
);

INSERT INTO DepositAccounts(DepositAccountNo, AccountNo, CustomerId, InterestId, Duration, InitialAmount, InterestAmount, CurrentBalance, OpenDate, CloseDate)
VALUES
	(1111111, 19434084, 78980, 61, 180, 1000000, 100000, 1100000, "2020-12-13 00:00:00", "2021-6-13 00:00:00"),
    (6666666, 19235646, 23245, 61, 180, 3000000, 300000, 3300000, "2020-12-13 00:00:00", "2021-6-13 00:00:00"),
    (3333333, 19222939, 23240, 61, 180, 4000000, 400000, 4400000, "2020-12-13 00:00:00", "2021-6-13 00:00:00");

select * from DepositAccounts;

-- Tạo bảng liên kết customer và tài khoản
CREATE TABLE customer_account_detail(
	CustomerId int not null,
    AccountNo int not null,
	PRIMARY KEY (CustomerId,AccountNo)
);

INSERT INTO customer_account_detail(CustomerId, AccountNo)
VALUES
(25627,19988777),
(23247,19955666),
(99893,19932432),
(78980,19434084),
(25629,19124356),
(23246,19142673),
(99895,19908975),
(78987,19979674),
(25628,19098979),
(23245,19235646),
(99894,19898976),
(78988,19242477),
(25626,19888190),
(23240,19222939),
(99890,19111982);

select * from customer_account_detail;

-- Tạo bảng liên kết khoản vay và tài khoản
CREATE TABLE loan_account_detail(
	LoanId int not null,
    AccountNo int not null,
	PRIMARY KEY (LoanId,AccountNo)
);
INSERT INTO loan_account_detail(LoanId, AccountNo)
VALUES
(100,19979674),
(123,19098979),
(132,19235646),
(141,19898976),
(159,19222939),
(238,19111982);

select * from loan_account_detail;
----- *** Thêm khóa ngoại cho các bạng 

-- Khóa ngoại cho bảng "liên kết tài khoản và khách hàng" 
ALTER TABLE customer_account_detail
ADD FOREIGN KEY (CustomerId) REFERENCES Customers(CustomerId);
ALTER TABLE customer_account_detail
ADD FOREIGN KEY (AccountNo) REFERENCES Accounts(AccountNo);

-- Khóa ngoại cho bảng "liên kết khoan vay và khách hàng" 
ALTER TABLE loan_account_detail
ADD FOREIGN KEY (LoanId) REFERENCES Loans(LoanId);
ALTER TABLE loan_account_detail
ADD FOREIGN KEY (AccountNo) REFERENCES Accounts(AccountNo);

-- Khóa ngoại cho bảng "Transaction"
ALTER TABLE Transactions
ADD FOREIGN KEY (SendAccountNo) REFERENCES Accounts(AccountNo);
ALTER TABLE Transactions
ADD FOREIGN KEY (ReceiveAccountNo) REFERENCES Accounts(AccountNo);

-- Khóa ngoại cho bảng "Deposit account"
ALTER TABLE DepositAccounts
ADD FOREIGN KEY (AccountNo) REFERENCES Accounts(AccountNo);
ALTER TABLE DepositAccounts
ADD FOREIGN KEY (InterestId) REFERENCES Interests(InterestId);

