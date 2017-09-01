-- - The average square footage of all offices.
SELECT AVG(sq_ft) FROM offices;

-- - The total number of apartments.
SELECT COUNT(*) FROM apartments;

-- - The apartments where there is no tenant
SELECT * FROM apartments WHERE occupied = false;

-- - The names of all of the companies
SELECT name FROM offices;

-- - The number of cubicles and bathrooms in the 3rd office
SELECT cubicles, bathrooms FROM offices WHERE id=3;

-- - The storefronts that have kitchens
SELECT * from storefronts WHERE kitchen = true;

-- - The storefront with the highest square footage and outdoor seating
SELECT owner, sq_ft FROM storefronts ORDER BY sq_ft DESC LIMIT 1;

-- - The office with the lowest number of cubicles
SELECT name, cubicles FROM offices ORDER BY cubicles ASC LIMIT 1;

-- - The office with the most cubicles and bathrooms
SELECT name, cubicles, bathrooms FROM offices ORDER BY cubicles + bathrooms DESC LIMIT 1;
