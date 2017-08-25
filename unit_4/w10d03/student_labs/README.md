# Lab - Postgres

## Setup

1. Create a new database called `flights`, connect to it, and run the following code:

	```sql
	CREATE TABLE airlines (
		id int,
		name varchar(255) DEFAULT NULL,
		alias varchar(255) DEFAULT NULL,
		iata varchar(255) DEFAULT NULL,
		icao varchar(255) DEFAULT NULL,
		callsign varchar(255) DEFAULT NULL,
		country varchar(255) DEFAULT NULL,
		active varchar(255) DEFAULT NULL
	);

	CREATE TABLE airports (
		id int,
		name varchar(255) DEFAULT NULL,
		city varchar(255) DEFAULT NULL,
		country varchar(255) DEFAULT NULL,
		iata_faa varchar(255) DEFAULT NULL,
		icao varchar(255) DEFAULT NULL,
		latitude varchar(255) DEFAULT NULL,
		longitude varchar(255) DEFAULT NULL,
		altitude varchar(255) DEFAULT NULL,
		utc_offset varchar(255) DEFAULT NULL,
		dst varchar(255) DEFAULT NULL,
		tz varchar(255) DEFAULT NULL
	);

	CREATE TABLE routes (
		airline_code varchar(255) DEFAULT NULL,
		airline_id int DEFAULT NULL,
		origin_code varchar(255) DEFAULT NULL,
		origin_id int DEFAULT NULL,
		dest_code varchar(255) DEFAULT NULL,
		dest_id int DEFAULT NULL,
		codeshare varchar(255) DEFAULT NULL,
		stops int DEFAULT NULL,
		equipment varchar(255) DEFAULT NULL
	);
	```

1. Copy [airlines.csv](airlines.csv),  [airports.csv](airports.csv),  and [routes.csv](routes.csv) to your Desktop directory on your computer.

1. Run the following code, substituting your computer's username for mine.  If you're unsure of the full path, `cd` to your Desktop and `pwd`.

	```sql
	COPY routes FROM '/Users/matthuntington/Desktop/routes.csv' DELIMITER ',' CSV;
	COPY airports FROM '/Users/matthuntington/Desktop/airports.csv' DELIMITER ',' CSV;
	COPY airlines FROM '/Users/matthuntington/Desktop/airlines.csv' DELIMITER ',' CSV;
	```

1. You should now have seeded three tables with flight data.

## Goal

Find out how many flights go from NYC to Paris

## Stretch Goals

- Do this so that just the number appears as the result of only one SQL statement
- Which airlines travel from NYC to Paris?
- Find all the flights that leave NYC.  Give me a list of how many go to each destination city.

## Hints

- The routes table has a column called `origin_id` and another called `destination_id`.  These map to the `id` column in the airport table.
- You're going to have to use the airports table twice in the same SQL statement.  In order to tell which airport is the `destination` and which is the `origin`, you're going to have to temporarily rename the airports table like so:

	```sql
		/* note that once you rename a table, you MUST refer to it by its new name */
		SELECT * FROM airports AS origin WHERE origin.city = 'New York';
		/* later on in the SQL statement, when dealing with the destination, you should do the same for airports AS destination */
	```
