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


-- 11. The average salary for a DE in the nfl


-- 12. The names of all the players on the Buffalo Bills


-- 13. The total salary of all players on the New York Giants


-- 14. The player with the lowest salary on the Green Bay Packers
