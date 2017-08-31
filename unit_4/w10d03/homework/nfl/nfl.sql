-- 0. Seeded Data
-- \i nfl_seed_data/teams.SQL
-- \i nfl_seed_data/players.SQL

-- 1. List the names of all NFL teams'

SELECT name FROM teams;

--          name
-- ----------------------
--  Buffalo Bills
--  Miami Dolphins
--  New England Patriots
--  New York Jets
--  Baltimore Ravens
--  Cincinnati Bengals
--  Cleveland Browns
--  Pittsburgh Steelers
--  Houston Texans
--  Indianapolis Colts
--  Jacksonville Jaguars
--  Tennessee Titans
--  Denver Broncos
--  Kansas City Chiefs
--  Oakland Raiders
--  San Diego Chargers
--  Dallas Cowboys
--  New York Giants
--  Philadelphia Eagles
--  Washington Redskins
--  Chicago Bears
--  Detroit Lions
--  Green Bay Packers
--  Minnesota Vikings
--  Atlanta Falcons
--  Carolina Panthers
--  New Orleans Saints
--  Tampa Bay Buccaneers
--  Arizona Cardinals
--  St. Louis Rams
--  San Francisco 49ers
--  Seattle Seahawks

-- 2. List the stadium name and head coach of all NFC teams

SELECT stadium, head_coach FROM teams WHERE conference = 'NFC';

--             stadium            |  head_coach
-- -------------------------------+---------------
--  AT&T Stadium                  | Jason Garrett
--  MetLife Stadium               | Tom Coughlin
--  Lincoln Financial Field       | Chip Kelly
--  FedExField                    | Jay Gruden
--  Soldier Field                 | Marc Trestman
--  Ford Field                    | Jim Caldwell
--  Lambeau Field                 | Mike McCarthy
--  TCF Bank Stadium              | Mike Zimmer
--  Georgia Dome                  | Mike Smith
--  Bank of America Stadium       | Ron Rivera
--  Mercedes-Benz Superdome       | Sean Payton
--  Raymond James Stadium         | Lovie Smith
--  University of Phoenix Stadium | Bruce Arians
--  Edward Jones Dome             | Jeff Fisher
--  Levis Stadium                 | Jim Harbaugh
--  CenturyLink Field             | Pete Carroll

-- 3. List the head coaches of the AFC South

SELECT head_coach FROM teams WHERE division = 'South' AND conference = 'AFC';

--    head_coach
-- ----------------
--  Bill OBrien
--  Chuck Pagano
--  Gus Bradley
--  Ken Whisenhunt


-- 4. The total number of players in the NFL

SELECT COUNT(*) FROM players;

--  count
-- -------
--   1532

-- 5. The team names and head coaches of the NFC North and AFC East

SELECT name, head_coach FROM teams WHERE division = 'East' AND conference = 'AFC' OR  division = 'North' AND conference = 'NFC';

--          name         |   head_coach
-- ----------------------+----------------
--  Buffalo Bills        | Doug Marrone
--  Miami Dolphins       | Joe Philbin
--  New England Patriots | Bill Belichick
--  New York Jets        | Rex Ryan
--  Chicago Bears        | Marc Trestman
--  Detroit Lions        | Jim Caldwell
--  Green Bay Packers    | Mike McCarthy
--  Minnesota Vikings    | Mike Zimmer


-- 6. The 50 players with the highest salaries

SELECT name FROM players ORDER BY salary DESC LIMIT 50;

--           name
-- -------------------------
 -- Peyton Manning
 -- Drew Brees
 -- Dwight Freeney
 -- Elvis Dumervil
 -- Michael Vick
 -- Sam Bradford
 -- Jared Allen
 -- Matt Ryan
 -- Matthew Stafford
 -- Tamba Hali
 -- Jake Long
 -- Trent Williams
 -- Nnamdi Asomugha
 -- Vincent Jackson
 -- Cliff Avril
 -- Calais Campbell
 -- Joe Thomas
 -- Brent Grimes
 -- Peyton Manning (buyout)
 -- Chris Long
 -- Philip Rivers
 -- Jason Smith
 -- David Harris
 -- Wes Welker
 -- Davin Joseph
 -- Dwayne Bowe
 -- Asante Samuel
 -- Brandon Marshall
 -- Ndamukong Suh
 -- Tony Romo
 -- Julius Peppers
 -- Anthony Spencer
 -- Karlos Dansby
 -- Jordan Gross
 -- Tyson Jackson
 -- Adrian Peterson
 -- Champ Bailey
 -- Aaron Rodgers
 -- Chris Johnson
 -- Jason Peters
 -- Santonio Holmes
 -- Eric Wright
 -- Steve Smith
 -- Jay Cutler
 -- Matt Forte
 -- Ray Rice
 -- Brian Urlacher
 -- Johnathan Joseph
 -- Gary Brackett
 -- Ed Reed

-- 7. The average salary of all NFL players

SELECT AVG(salary) FROM players;

--          avg
-- ----------------------
--  1579692.539817232376


-- 8. The names and positions of players with a salary above 10_000_000

SELECT name, position FROM players  WHERE salary > 10000000;

--           name           | position
-- -------------------------+----------
--  Jake Long               | T
--  Joe Thomas              | T
--  Dwight Freeney          | DE
--  Peyton Manning (buyout) | QB
--  Peyton Manning          | QB
--  Elvis Dumervil          | DE
--  Tamba Hali              | DE
--  Philip Rivers           | QB
--  Michael Vick            | QB
--  Nnamdi Asomugha         | CB
--  Trent Williams          | T
--  Matthew Stafford        | QB
--  Cliff Avril             | DE
--  Jared Allen             | DE
--  Matt Ryan               | QB
--  Brent Grimes            | CB
--  Drew Brees              | QB
--  Vincent Jackson         | WR
--  Calais Campbell         | DE
--  Sam Bradford            | QB
--  Chris Long              | DE

-- 9. The player with the highest salary in the NFL

SELECT name FROM players ORDER BY salary DESC LIMIT 1;

--       name
-- ----------------
--  Peyton Manning


-- 10. The name and position of the first 100 players with the lowest salaries

SELECT name, position FROM players ORDER BY salary ASC LIMIT 100;

--           name          | position
-- ------------------------+----------
--  Phillip Dillard        |
--  Eric Kettani           | RB
--  Greg Orton             | WR
--  Jeremy Beal            | DE
--  Jamie McCoy            | TE
--  Kevin Cone             | WR
--  Caleb King             | RB
--  Travon Bellamy         | CB
--  Derrick Jones          | WR
--  Sealver Siliga         | DT
--  Ricky Sapp             | DE
--  Tyler Beiler           |
--  Corbin Bryant          | DT
--  Nathan Bussey          | LB
--  Markell Carter         | DE
--  Armando Allen          | RB
--  Garrett Chisolm        | G
--  Jonathan Crompton      | QB
--  McLeod Bethel-Thompson | QB
--  Dontavia Bogan         | WR
--  Shaun Draughn          | RB
--  Curtis Holcomb         | CB
--  Konrad Reuland         | TE
--  Michael Wilhoite       | LB
--  Marshall McFadden      | LB
--  Joe Hastings           | WR
--  Mike Hartline          | QB
--  Chad Spann             | RB
--  Ben Guidugli           | TE
--  Justin Medlock         | KR
--  Mark Dell              | WR
--  Shaky Smithson         | WR
--  DAndre Goodwin         | WR
--  Austin Sylvester       | RB
--  Jimmy Young            | WR
--  Mike Mohamed           | LB
--  Ronald Johnson         | WR
--  Brett Brackett         | TE
--  John Clay              | RB
--  Tristan Davis          | RB
--  Armon Binns            | WR
--  Jerrod Johnson         | QB
--  Robert James           | LB
--  Derek Hall             | T
--  Chase Beeler           | C
--  Cory Nelms             | CB
--  Juamorris Stewart      | WR
--  Kenny Wiggins          | T
--  Mark LeGree            | S
--  John Malecki           | G
--  Kyle Hix               | T
--  Kade Weston            | DT
--  Kyle Nelson            | LS
--  Jameson Konz           | WR
--  Mike Rivera            | LB
--  Trevis Turner          | T
--  Aaron Lavarias         | DT
--  Michael Jasper         | DT
--  Mike Blanc             | DT
--  Pat Devlin             | QB
--  Jerome Messam          | RB
--  David Gilreath         | WR
--  Malcolm Williams       | CB
--  Lestar Jean            | WR
--  Rashad Carmichael      | CB
--  Doug Worthington       | DT
--  Alex Silvestro         | DT
--  Jammie Kirlew          | DE
--  Adam Grant             | T
--  Adam Weber             | QB
--  Joe Reitz              | T
--  Brandon Browner        | CB
--  Jeff Byers             | C
--  Jed Collins            | TE
--  Marcus Sherels         | CB
--  Emmanuel Stephens      | DT
--  Aaron Berry            | CB
--  Logan Payne            | WR
--  Cameron Sheffield      | LB
--  T.J. Conley            | PR
--  Kyle Bosworth          | LB
--  John Estes             | C
--  Thomas Austin          | G
--  Garrett McIntyre       | DT
--  Markus White           | DE
--  Ricardo Matthews       | DT
--  Quinten Lawrence       | WR
--  Jimmy Wilson           | CB
--  Nick Bellore           | LB
--  Taylor Boggs           | C
--  Kamar Aiken            | WR
--  Justin Rogers          | CB
--  Johnny White           | RB
--  Dexter Jackson         | WR
--  DaNorris Searcy        | S
--  Chris White            | LB
--  Sterling Moore         | CB
--  Chris Hairston         | T
--  Brett Hartmann         | P
--  Caleb Schlauderaff     | G

-- 11. The average salary for a DE in the nfl

SELECT AVG(salary) FROM players WHERE position = 'DE';

--          avg
-- ----------------------
--  2161326.377049180328

-- 12. The names of all the players on the Buffalo Bills

--couldn't figure this one out in one query

SELECT * FROM teams WHERE name = 'Buffalo Bills';

--  id |     name      |       stadium        | division | conference |  head_coach  | active
-- ----+---------------+----------------------+----------+------------+--------------+--------
--   1 | Buffalo Bills | Ralph Wilson Stadium | East     | AFC        | Doug Marrone | t
-- (1 row)

nfl=# SELECT players.name FROM players WHERE team_id = 1;

--         name
-- --------------------
--  Mario Williams
--  Drayton Florence
--  Shawne Merriman
--  Dwan Edwards
--  Chris Kelsay
--  Kyle Williams
--  Nick Barnett
--  Spencer Johnson
--  Ryan Fitzpatrick
--  Steve Johnson
--  Tyler Thigpen
--  Lee Evans (Buyout)
--  Brad Smith
--  Fred Jackson
--  Scott Chandler
--  George Wilson
--  Erik Pears
--  Leodis McKelvin
--  Brian Moorman
--  Terrence McGee
--  Marcell Dareus
--  Chad Rinehart
--  Kraig Urbik
--  Rian Lindell
--  Kirk Morrison
--  Corey McIntyre
--  C.J. Spiller
--  Garrison Sanborn
--  Eric Wood
--  Lionel Dotson
--  Ruvell Martin
--  Andy Levitre
--  Jairus Byrd
--  Jarron Gilbert
--  Kyle Moore
--  Aaron Williams
--  Donald Jones
--  Fendi Onobun
--  Kellen Heard
--  Mike Caussin
--  Naaman Roosevelt
--  Alex Carrington
--  Arthur Moats
--  Colin Brown
--  Cordaro Howard
--  Dan Batten
--  David Nelson
--  Marcus Easley
--  Sam Young
--  Torell Troup
--  Kelvin Sheppard
--  Lee Smith
--  Chris Hairston
--  Chris White
--  DaNorris Searcy
--  Johnny White
--  Justin Rogers
--  Kamar Aiken
--  Michael Jasper

-- 13. The total salary of all players on the New York Giants

SELECT id FROM teams WHERE name = 'New York Giants';

--  id
-- ----
--  18


nfl=# SELECT SUM(salary) from players WHERE team_id = 18;

--    sum
-- ----------
--  74179466

-- 14. The player with the lowest salary on the Green Bay Packers

SELECT id FROM teams WHERE name = 'Green Bay Packers';

--  id
-- ----
--  23



nfl=# SELECT name FROM players WHERE team_id = 23 ORDER BY salary ASC LIMIT 1;

--       name      
-- ----------------
--  Shaky Smithson
