CREATE TABLE IF NOT EXISTS customers (
 customerId UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 firstName TEXT NOT NULL,
 lastName TEXT NOT NULL,
 email TEXT NOT NULL UNIQUE,
 phone TEXT,
 addressLine1 TEXT NOT NULL,
 addressLine2 TEXT,
 addressCity TEXT NOT NULL,
 addressState CHAR(2) NOT NULL,
 addressZipCode INTEGER NOT NULL,
 driver_license_number TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS hours (
    hoursId SERIAL PRIMARY KEY,
    monday TEXT,
    tuesday TEXT,
    wednesday TEXT,
    thursday TEXT,
    friday TEXT,
    saturday TEXT,
    sunday TEXT,
    lastUpdated TIMESTAMP
);

CREATE TABLE IF NOT EXISTS locations (
    locationId SERIAL PRIMARY KEY,
    addressLine1 TEXT NOT NULL,
 addressLine2 TEXT,
 city TEXT NOT NULL,
 state CHAR(2) NOT NULL,
 zipCode INTEGER NOT NULL,
    phone TEXT,
    website TEXT,
    hoursId INTEGER references hours(hoursId)
);

CREATE TABLE IF NOT EXISTS autos (
 autoId SERIAL PRIMARY KEY,
 make TEXT NOT NULL,
 model TEXT NOT NULL,
 year SMALLINT NOT NULL,
 odometer INTEGER NOT NULL,
 lastOilChangeDate TIMESTAMP,
 lastOilChangeOdometer INTEGER,
 licensePlateNo TEXT NOT NULL UNIQUE,
 vin TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS rentals (
 rentalId UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 pickupLocation INTEGER references locations(locationId),
 dropOffLocation INTEGER references locations(locationId),
 pickupDatetime TIMESTAMP NOT NULL,
 dropOffDatetime TIMESTAMP NOT NULL,
 reservationDatetime TIMESTAMP NOT NULL,
 customerId UUID NOT NULL references customers(customerId),
 autoId UUID NOT NULL references autos(autoId)
);

CREATE FUNCTION updateLastUpdatedColumn()
RETURNS trigger AS $$
BEGIN
    NEW.last_updated = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER updateHoursTableLastUpdated
BEFORE UPDATE ON hours
FOR EACH ROW
EXECUTE FUNCTION updateLastUpdatedColumn();

CREATE TABLE IF NOT EXISTS features (
    featureId SERIAL PRIMARY KEY,
    name TEXT,
    description TEXT
);

INSERT INTO features (name, description) VALUES
('Exterior Color', 'Color of the car exterior');

INSERT INTO autos (
    autoId,
    make, 
    model, 
    year, 
    odometer, 
    licensePlateNo, 
    vin) 
VALUES (
    'e9e5dfd9-ab33-42db-8c98-a682fa50a4681',
    'BMW', 
    '228i xDrive', 
    2022, 
    39000, 
    '888RRR', 
    '3HGCM82633A987654'
    );

ALTER TABLE autos
ALTER COLUMN lastOilChangeDate TYPE DATE;

UPDATE autos
SET odometer = 100
WHERE autoId = 'e9e5dfd9-ab33-42db-8c98-a682fa50a4681';


CREATE TABLE IF NOT EXISTS autoFeatures (
    autoId INTEGER references autos(autoId),
    featureId INTEGER references features(featureId),
    value TEXT,
    PRIMARY KEY(autoId, featureId)
);

CREATE TABLE IF NOT EXISTS payments (
 paymentId UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 rentalId UUID references rentals(rentalId),
 description TEXT,
 amount NUMERIC(7,2),
 method TEXT,
 paymentDate TIMESTAMP
);