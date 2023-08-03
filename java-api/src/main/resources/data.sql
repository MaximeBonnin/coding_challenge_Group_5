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
MERGE INTO bond (isin, cusip, issuer_id, maturity_date, coupon, bond_type , face_value, currency, bond_status )
KEY(isin)
SELECT 
    isin, 
    cusip, 
    (SELECT id  FROM issuer WHERE issuer.issuer_name= ALL_DATA.issuer_name) as issuer, 
    PARSEDATETIME(bond_maturity_date, 'dd/MM/yyyy'), 
    coupon_percent, 
    type, 
    `face_value (mn)`, 
    bond_currency, 
    status
FROM ALL_DATA;





-- Insert data into the trades table
INSERT INTO trades (book_id, isin, issuer_id, currency, trade_status, quantity, unit_price, order_type, trade_date, settle_date)
SELECT
    (SELECT id  FROM book WHERE book.name= ALL_DATA.book_name ) as id_book, 
    isin, 
    (SELECT id  FROM issuer WHERE issuer.issuer_name= ALL_DATA.issuer_name) as id_issuer, 
    trade_currency, 
    trade_status, 
    quantity, 
    unit_price, 
    type, 
    PARSEDATETIME(trade_date, 'dd/MM/yyyy'), 
    PARSEDATETIME(trade_settlement_date, 'dd/MM/yyyy')
FROM ALL_DATA;