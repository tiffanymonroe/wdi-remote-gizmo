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


-- 6. The 50 players with the highest salaries


-- 7. The average salary of all NFL players


-- 8. The names and positions of players with a salary above 10_000_000


-- 9. The player with the highest salary in the NFL


-- 10. The name and position of the first 100 players with the lowest salaries


-- 11. The average salary for a DE in the nfl


-- 12. The names of all the players on the Buffalo Bills


-- 13. The total salary of all players on the New York Giants


-- 14. The player with the lowest salary on the Green Bay Packers
