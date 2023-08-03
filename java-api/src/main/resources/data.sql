-- Create all data
INSERT INTO all_data (trade_type, trade_currency, quantity, trade_settlement_date, trade_status, trade_date, unit_price, coupon_percent, bond_currency, cusip, `face_value (mn)`, isin, issuer_name, bond_maturity_date, status, type, book_name, bond_holder)
SELECT *
FROM CSVREAD('classpath:db-bonds-data.csv');

-- Insert data into the users table
INSERT INTO users (email, user_password, user_role)
VALUES
    ('test@email.com', 'myPassword', 'user'),
    ('test2@email.com', 'myOtherPassword', 'user'),
    ('test3@email.com', 'myThirdPassword', 'user');


-- Insert data into the book table
INSERT INTO book (name)
SELECT DISTINCT book_name
FROM ALL_DATA;



-- Insert data into the issuer table
INSERT INTO issuer (issuer_name)
SELECT DISTINCT issuer_name
FROM ALL_DATA;



-- Insert data into the bond table
MERGE INTO bond (isin, cusip, issuer_name, maturity_date, coupon, bond_type , face_value, currency, bond_status )
KEY(isin)
SELECT isin, cusip, issuer_name, PARSEDATETIME(bond_maturity_date, 'dd/MM/yyyy'), coupon_percent, type , `face_value (mn)`, bond_currency, status
FROM ALL_DATA;


-- Insert data into the trades table
INSERT INTO trades (book_id, isin, issuer_id, currency, trade_status, quantity, unit_price, order_type, trade_date, settle_date)
VALUES
    (1, 'XS1988387210', 1, 'USD', 'EXECUTED', 100, 1000.00, 'BUY', '2023-01-01', '2023-01-03'),
    (1, 'XS1988387210', 2, 'USD', 'CANCELLED', 50, 1500.00, 'SELL', '2023-01-02', '2023-01-04'),
    (2, 'XS1988387210', 1, 'EUR', 'EXECUTED', 200, 900.00, 'BUY', '2023-01-03', '2023-01-05'),
    (2, 'XS1988387210', 2, 'EUR', 'PENDING', 300, 800.00, 'SELL', '2023-01-04', '2023-01-06');
