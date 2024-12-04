--liquibase formatted sql

--changeset database.admin:1 labels:1.0.0 context:dev,uat,prod
--comment: Initialize the base schemas.
CREATE SCHEMA [shop];
GO

--changeset database.admin:2 labels:1.0.0 context:dev,uat,prod
--comment: The following are tables to be released to the database.
CREATE TABLE [shop].[food] (
    [id] INT IDENTITY(1,1) PRIMARY KEY,
    [name] NVARCHAR(50) NOT NULL,
    [price] MONEY NOT NULL,
    [quantity] INT NOT NULL
);
GO

--changeset database.admin:3 labels:1.0.0 context:dev
--comment: The following inserts to populate fake test data into the database tables.

INSERT INTO [shop].[food]
(name, price, quantity)
VALUES
('Tomato', 0.99, 5),
('Bread', 2.00, 5),
('Cheese', 6.50, 10),
('Eggs', 2.25, 2),
('Peas', 2.25, 4);