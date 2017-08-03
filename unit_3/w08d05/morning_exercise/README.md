![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-Gizmo

---
Title: Managing your Projects<br>
Type: Morning Exercise <br>
Duration: "0:45"<br>
Creator:<br>
    Original creator: Kristyn Bryan for WDIR-Panthalassa<br>
    Course: WDIR-Gizmo<br>
Competencies: Agile, Scrum, Trello, estimating stories<br>
Prerequisites: none <br>

---

# Morning Exercise

In this morning's exercise, I want to introduce you to some of the product management tools that you will be encountering on the job and also get you familiar with Trello. You will be using Trello to keep track of your 3rd project (and beyond!).

## Agile Development
References can be found [here](https://www.atlassian.com/agile/delivery-vehicles)

Agile development uses four clear delivery vehicles to bring structure to any agile project:
- user stories
- sprints
- epics
- versions

By working with these vehicles, software teams are able to organize their work such that they can respond to customer feedback and change from the original plan of the project without feeling like the walls have crumbled around them. The ability to change and adapt future plans based on current insights is a hallmark of agility.

So let's talk about the basics of user stories.

<hr>

## User Stories

### What are they?
- Key component of the initial planning for an Agile project
- Defines small chunks of business value which can be implemented in a period of days to weeks
- Captures what a user does or needs
- Commonly formulated by questioning the customer/user
- Often initially written on 3x5 index cards
- NOT a programming To-Do List

Writing user stories is simple if you follow these simple steps:

1. As a [role], I can [feature] so that [reason]

When writing user stories, using this pattern will help you focus on what should be happening with your application:

>As an administrator, I want to approve photos before they are posted so that I can make sure that they are appropriate.

In some instances the suffix is redundant and can be be removed:

>As an account owner, I can check my balance online.

Feel free to use slight deviations of this template using synonyms:

- As a [role], I want [feature] because [reason]
- As a [role], I can [feature]
- As a [role], I can [feature] so that [reason]

More examples:

>As a player, I want to be able to view a list of high scores for inspiration and to impress my friends if I make the list.

>As a user, I want to be able to collapse the details of a note so that I can more easily focus on the notes I'm interested in.

![user stories](https://i.imgur.com/x5pzHPp.png)

## Activity
_In groups - 10 minutes_

1. Develop at least 4 user stories for an online dating application.

<hr>

## Scrum

#### History of Scrum
References can be found [here](https://en.wikipedia.org/wiki/Scrum_(software_development) )

Scrum was first defined as "a flexible, holistic product development strategy where a development team works as a unit to reach a common goal" as opposed to a "traditional, sequential approach" in 1986 by Hirotaka Takeuchi and Ikujiro Nonaka in the New Product Development Game.[5] Takeuchi and Nonaka later argued in The Knowledge Creating Company[6] that it is a form of "organizational knowledge creation, [...] especially good at bringing about innovation continuously, incrementally and spirally".

 They called this the holistic or rugby approach, as the whole process is performed by one cross-functional team across multiple overlapping phases, where the team "tries to go the distance as a unit, passing the ball back and forth".[7] (In rugby football, a scrum refers to a tight-packed formation of players with their heads down who attempt to gain possession of the ball.[8])

As developers, you will work with your team (developers, product managers, project managers, designers, etc.) to get a product out. With the Scrum method, everyone works on the same team and focuses on what needs to be done to reach the final goal.

#### Daily Scrum

This might look familiar - we do a version of this during your project week:

Each day during a sprint, the team holds a daily scrum (or stand-up) with specific guidelines:

All members of the development team come prepared. The daily scrum...

  ...starts precisely on time even if some development team members are missing<br>
  ...should happen at the same time and place every day<br>
  ...is limited (timeboxed) to fifteen minutes<br>

Anyone is welcome, though normally only scrum team roles contribute.
During the daily scrum, each team-member answers three questions:
- What did I do yesterday that helped the development team meet the sprint goal?
- What will I do today to help the development team meet the sprint goal?
- Do I see any impediment that prevents me or the development team from meeting the sprint goal?
Any impediment (stumbling block, risk or issue) identified in the daily scrum should be captured by the scrum master and displayed on the team's scrum board, with an agreed person designated to working toward a resolution (outside of the daily scrum). No detailed discussions should happen during the daily scrum.

### Other Agile Development - Kanban
Another popular approach to development is [Kanban](https://www.atlassian.com/agile/kanban)

![kanban v scrum](https://i.imgur.com/Cgm1DTi.png)

The work of all Kanban teams revolves around a Kanban board, a tool used to visualize work and optimize the flow of the work among the team.

Regardless of whether a team's board is physical or digital, their function is to ensure the team's work is visualized, their workflow is standardized, and all blockers and dependencies are immediately identified and resolved. A basic kanban board has a three-step workflow: To Do, In Progress, and Done.

The Kanban methodology relies upon full transparency of work and real-time communication of capacity, therefore the kanban board should be seen as the single source of truth for the team's work.

![kanban board](https://i.imgur.com/4kfEDN2.png)

## Using a tracker in Agile Development

There are a few different tools that can be used to plan scrum development.


We're going to look at briefly at a few of them, but here's a more comprehensive [list](https://en.wikipedia.org/wiki/Comparison_of_Scrum_software) of what might be used and the features that come with them.


Real-world projects could have the following lists on their boards organized from left-to-right:

- Ice Box (aka Backlog)
- Current (aka Planned or To-Do or Ready)
- Sprint (aka In Progress)
- Done

### Jira

![Jira Example](http://www.sm-cloud.com/content/images/2014/Jun/jiraagile-02_whyja_1_flexibleplanning.png)

### Trello

We're doing small applications and don't need all the fancy stuff that comes with Jira, so we'll use [*Trello*](https://trello.com/) to mimic the flow that most of you will be using during production!

![Trello Example](https://i.imgur.com/L6R0X82.png)

Each column is referred to as a "list" and inside the list sit "cards". Each of these cards is meant to contain information to create one feature of your application.

#### Using Trello for Project Progress

![in Progress](https://i.imgur.com/uVHY2Ml.png)

- Each User Story will be a Trello Card

- The User Story cards can contain:
  - The details for the Story in the Description section
  - Optional: You can document the Point value assigned to complete the story in parenthesis after the Title.
  - Use the Checklist to track tasks or steps necessary to complete the story. When creating a checklist, you are given the opportunity to name it.

- Only one person may take ownership of a card AND only one card should be claimed at a time.

- Depending how you decide to do this with your team, each card may also represent a branch in Github (this is how it works in Jira).

### Github Issues & Waffle.io

You can create issues inside your Github repo:

![what it looks like on Github](https://i.imgur.com/ZFtuGX5.png)

You can choose to just use the issues or you can work with it through [Waffle.io](waffle.io) which is a more visually appealing site (closer to what you see with Jira and Trello).

![waffle screen](https://i.imgur.com/cy2nesq.png)

### Github & Zenhub

Similar to the relationship between Waffle.io and Github, [Zenhub](https://www.zenhub.com/) is another Agile project management tool that you can use.

![zenhub](https://i.imgur.com/2LTpOKA.png)

For your projects in this class, you can choose what you like! When you start working for a company, they will dictate what you use for planning.

<hr>

## Scrum poker (Estimating Stories)

![scrum poker](http://www.coreworks.co/images/Scrum/PlanningPoker617x410.jpg)

References can be found [here](https://en.wikipedia.org/wiki/Planning_poker)

Planning poker, also called Scrum poker, is a consensus-based, gamified technique for estimating, mostly used to estimate effort or relative size of development goals in software development. In planning poker, members of the group make estimates by playing numbered cards face-down to the table, instead of speaking them aloud. The cards are revealed, and the estimates are then discussed.

If you are doing this remotely, you will count to three and then hold up your cards OR use the calculator on your smartphone to display your number to show your number estimation (kind of like rock, paper, scissors).

![phone](http://media.boingboing.net/wp-content/uploads/2017/05/screenshot-5.jpg)

By hiding the figures in this way, the group can avoid the cognitive bias of anchoring, where the first number spoken aloud sets a precedent for subsequent estimates.

### How to play
Planning poker is based on a list of features to be delivered, several copies of a deck of cards and optionally, an egg timer that can be used to limit time spent in discussion of each item.

The feature list, often a list of user stories, describes some software that needs to be developed.

The cards in the deck have numbers on them. A typical deck has cards showing the [Fibonacci sequence](https://en.wikipedia.org/wiki/Fibonacci_number) including a zero: 0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89.

Why is the Fibonacci sequence used? There are many [opinions on this](http://stackoverflow.com/questions/9362286/why-is-the-fibonacci-series-used-in-agile-planning-poker) and I've linked them here. Ultimately, I think that it's because it helps to represent the hours that it might take to complete the work. Something that might be a 1 would take you 2 hours while something that is a 3 would take you 6 hours... not just 1 extra hour, etc.

Doing planning poker will help you figure out how long your overall plan will take, sets time aside to discuss any unforseen problems before coding begins, and also might help you figure out who to assign to which task.

<hr>

### Your Turn to Practice

1. Decide with your partners whether to create Github Issues (with or without Waffle.io or Zenhub) OR create a Trello account.

**Github:** If you want to use Github issues, one person should create a repo (or use an old one) and add your partners as a Collaborators.

**Trello:** When making your Trello account, be sure to take note of your screenname OR update the screenname that they automatically assign to you to something that you will remember (and that is at least semi-professional).

2. Create the lists for "To-Do", "In Progress", "In Review", and "Done" (or the names that most make sense to you from the ones listed above).

3. With your dating site user stories, create cards that split up the work into pieces (stories) that can be individually tackled.

4. Discuss which card that you'd like to take and work on for your first stab at the project. Remember - only take **one card**! It's advisable to select things that won't have you working inside the same file - this way you won't have merge conflicts (so perhaps someone can do some styling while the other person works on some logic). *Add yourself* to the card and move it over to the "In Progress" List.

5. Have you run into any issues? Can you see how this might be advantageous to use when working with other people?

6. If you have extra time, try giving [Scrum poker](https://www.mountaingoatsoftware.com/tools/planning-poker) a try with your cards.
