
DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(250) UNIQUE NOT NULL,
    user_password VARCHAR(32) NOT NULL,
    user_role VARCHAR(250) NOT NULL
);

DROP TABLE IF EXISTS bond;
CREATE TABLE bond (
    isin VARCHAR(12) NOT NULL PRIMARY KEY,
    cusip VARCHAR(9),
    issuer_name VARCHAR(250) NOT NULL,
    maturity_date DATE NOT NULL,
    coupon DECIMAL(65, 2) NOT NULL,
    bond_type VARCHAR(250) NOT NULL,
    face_value INT NOT NULL,
    currency VARCHAR(32) NOT NULL,
    bond_status VARCHAR(250) NOT NULL
);



DROP TABLE IF EXISTS book;
CREATE TABLE book (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(250) NOT NULL
);

DROP TABLE IF EXISTS book_user;
CREATE TABLE book_user (
    email VARCHAR(250) NOT NULL,
    book_id INT NOT NULL,
    FOREIGN key (email) REFERENCES users (email),
    FOREIGN key (book_id) REFERENCES book (id)
);

DROP TABLE IF EXISTS issuer;
CREATE TABLE issuer (
    id INT NOT NULL PRIMARY KEY,
    issuer_name VARCHAR(250) NOT NULL
);

DROP TABLE IF EXISTS trades;
CREATE TABLE trades (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    book_id INT NOT NULL,
    isin VARCHAR(12) NOT NULL,
    issuer_id INT NOT NULL,
    currency VARCHAR(250) NOT NULL,
    trade_status VARCHAR(250) NOT NULL,
    quantity INT NOT NULL,
    unit_price DECIMAL(65, 2) NOT NULL,
    order_type VARCHAR(250) NOT NULL,
    trade_date DATE NOT NULL,
    settle_date DATE NOT NULL,
    FOREIGN key (book_id) REFERENCES book (id),
    FOREIGN key (isin) REFERENCES bond (isin),
    FOREIGN key (issuer_id) REFERENCES issuer (id)
);
