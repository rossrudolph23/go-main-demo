-- Failed query:
-- /*
-- In Neon, databases are stored on branches. By default, a project has one branch and one database.
-- You can select the branch and database to use from the drop-down menus above.
-- 
-- Try generating sample data and querying it by running the example statements below, or click
-- New Query to clear the editor.
-- */
CREATE TABLE IF NOT EXISTS playing_with_neon (
id SERIAL PRIMARY KEY,
name TEXT NOT NULL,
value REAL
);

SELECT LEFT(md5(i :: TEXT), 10), random() FROM generate_series(1, 10) s(i);
SELECT * FROM playing_with_neon;

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
  addressZipCode TEXT NOT NULL, -- Changed to TEXT for leading zeros
  driverLicenseNumber TEXT NOT NULL UNIQUE
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
  lastUpdated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS locations (
  locationId SERIAL PRIMARY KEY,
  addressLine1 TEXT NOT NULL,
  addressLine2 TEXT,
  city TEXT NOT NULL,
  state CHAR(2) NOT NULL,
  zipCode TEXT NOT NULL,
  phone TEXT,
  website TEXT,
  hoursId INTEGER REFERENCES hours(hoursId)
);

CREATE TABLE IF NOT EXISTS autos (
  autoId UUID PRIMARY KEY DEFAULT gen_random_uuid(), 
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
  pickupLocation INTEGER REFERENCES locations(locationId),
  dropOffLocation INTEGER REFERENCES locations(locationId),
  pickupDatetime TIMESTAMP NOT NULL,
  dropOffDatetime TIMESTAMP NOT NULL,
  reservationDatetime TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  customerId UUID NOT NULL REFERENCES customers(customerId),
  autoId UUID NOT NULL REFERENCES autos(autoId) 
);



CREATE OR REPLACE FUNCTION updateLastUpdatedColumn() 
RETURNS trigger AS $$
BEGIN
    NEW.'lastUpdated' = NOW(); 
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

CREATE TABLE IF NOT EXISTS autoFeatures (
  autoId UUID REFERENCES autos(autoId), -- Changed to UUID
  featureId INTEGER REFERENCES features(featureId),
  value TEXT,
  PRIMARY KEY(autoId, featureId)
);

CREATE TABLE IF NOT EXISTS payments (
  paymentId UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  rentalId UUID REFERENCES rentals(rentalId),
  description TEXT,
  amount NUMERIC(7,2),
  method TEXT,
  paymentDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS rentals (
rentalId UUID PRIMARY KEY DEFAULT gen_random_uuid(),
pickupLocation INTEGER references locations(locationId),
drbpOffLocation INTEGER references locations(locationId),
pickupDatetime TIMESTAMP NOT NULL,
dropOffDatetime TIMESTAMP NOT NULL,
reservationDatetime TIMESTAMP NOT NULL,
customerId UUID NOT NULL references customers (customerId),
autoId UUID NOT NULL references autos (autoId)
);

INSERT INTO customers (
    firstName,
    lastName,
    email,
    phone,
    addressLine1,
    addressCity,
    addressState,
    addressZipCode,
    driverLicenseNumber
) VALUES (
'Linus',
'Torvalds',
'linus.torvalds@example.com',
'555-123-4567',
'123 Open Source St',
'Paris',
'TX',
12345,
'DL123456789'
);

INSERT INTO hours (
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday
) VALUES (
    '9:00 AM - 6:00 PM',
    '9:00 AM - 6:00 PM',  
    '9:00 AM - 6:00 PM',
    '9:00 AM - 6:00 PM',
    '9:00 AM - 6:00 PM',
    '10:00 AM - 4:00 PM',
    '10:00 AM - 4:00 PM'
);

INSERT INTO locations (
    addressLine1,
    city,
    state,
    zipCode,
    phone,
    website,
    hoursId
) VALUES (
    '456 Rental Ave',
    'Paris',
    'TX',
    '75460',
    '555-987-6543',
    'http://www.rentallocation.com',
    1
);

INSERT INTO rentals (
    pickupLocation,
    dropOffLocation,
    pickupDatetime,
    dropOffDatetime,
    reservationDatetime,
    customerId,
    autoId
) VALUES (
    1,
    1,
    '2026-07-01 10:00:00',
    '2026-07-05 10:00:00',
    NOW(),
    'a55ef1e2-9be4-49aa-9f78-02dcd36a9d6c',
    1 
);

SELECT rental FROM rentals
JOIN customers
ON rentals.customerId = 
customers.customerId;

SELECT rentalId, pickupLocation, dropOffLocation, pickupDateTime, autos.make, autos.model, customers.firstName, customers.lastName, email, driverLicenseNumber FROM rentals
JOIN customers
ON rentals.customerId = customers.customerId
JOIN autos
ON rentals.autoId = autos.autoId
JOIN locations
ON rentals.pickupLocation = locations.locationId;

--customerID = fab64718-b1c3-4094-92a9-70162071b867
--autoID = e9e5dfd9-ab33-42db-8c98-a682fa50a468
--rentalID = f35cb5de-0c4a-42e9-a577-b231882490bc