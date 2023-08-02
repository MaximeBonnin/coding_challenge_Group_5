-- Insert data into the users table
INSERT INTO users (email, user_password, user_role)
VALUES
    ('test@email.com', 'myPassword', 'user'),
    ('test2@email.com', 'myOtherPassword', 'user'),
    ('test3@email.com', 'myThirdPassword', 'user');

-- Insert data into the book table
INSERT INTO book (name)
VALUES
    ('Book A'),
    ('Book B'),
    ('Book C');

INSERT INTO issuer (id, issuer_name)
VALUES
    (1, 'Issuer 1'),
    (2, 'Issuer 2');

-- Insert data into the bond table
INSERT INTO bond (isin, cusip, issuer_name, maturity_date, coupon, bond_type, face_value, currency, bond_status)
VALUES
    ('US1234567890', 'CUSIP1', 'Issuer A', '2025-01-01', 5.50, 'Corporate', 1000, 'USD', 'Active'),
    ('US0987654321', 'CUSIP2', 'Issuer B', '2026-01-01', 4.75, 'Government', 500, 'USD', 'Active');

-- Insert data into the trades table
INSERT INTO trades (book_id, isin, issuer_id, currency, trade_status, quantity, unit_price, order_type, trade_date, settle_date)
VALUES
    (1, 'US1234567890', 1, 'USD', 'EXECUTED', 100, 1000.00, 'BUY', '2023-01-01', '2023-01-03'),
    (1, 'US0987654321', 2, 'USD', 'CANCELLED', 50, 1500.00, 'SELL', '2023-01-02', '2023-01-04'),
    (2, 'US1234567890', 1, 'EUR', 'EXECUTED', 200, 900.00, 'BUY', '2023-01-03', '2023-01-05'),
    (2, 'US0987654321', 2, 'EUR', 'PENDING', 300, 800.00, 'SELL', '2023-01-04', '2023-01-06');
