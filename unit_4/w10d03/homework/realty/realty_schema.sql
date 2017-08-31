-- enter your schema for apartments, offices and storefronts below

CREATE TABLE  apartments (
  id serial primary key,
  apt_number integer,
  beds integer,
  bath integer,
  address varchar(255) not null,
  tenant varchar(255),
  occupied_status boolean,
  sqft integer,
  price integer
);

CREATE TABLE storefront (
  id serial primary key,
  address varchar(255),
  occupied_status boolean,
  price integer,
  kitchen boolean,
  sqft integer,
  owner varchar(255),
  outdoor_seating boolean default false
);
