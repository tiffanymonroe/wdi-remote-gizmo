# Wordpress

## Set Up

1. Download from <https://wordpress.org/latest.zip>
1. Unzip the downloaded file.
1. Point MAMP to Wordpress Directory
	- Click on Preferences
	- Click on Web Server
	- Click the folder icon next to "Document Root" and find the unzipped wordpress directory
	- Click OK
1. Go to <http://localhost:8888/>
1. Choose your language
1. Click "Let's Go!"
1. Create a `wordpress` sub database in MySQL
	- Download a mysql GUI client: <http://www.sequelpro.com/download> and click download
	- Open downloaded .dmg file
	- Drag application icon to Applications directory and double click it.
	- Fill in the following info
		- Host: 127.0.0.1 (same as localhost)
		- Username: root
		- Password: root
	- Click Connect
	- In the terminal type `CREATE DATABASE wordpress;`
	- Click the "Run Previous" button (it might also be say "Run Current")
	- In the terminal type `SHOW DATABASES;`
	- Confirm that `wordpress` is listed in the output
1. Back in your web browser, fill out the info like so:
	- Database Name: wordpress
	- User Name: root
	- Password: root
	- Database Host: localhost
	- Table Prefix: wp_
1. Click "Run the intall"
1. Fill out the info on the next page and click "Install Wordpress"
1. Click "Log In"
1. Log In

## Notable GUI Elements

1. Posts
	- All - show all
	- New - create a new post
	- Categories - create categories that are assignable to your posts (e.g. deserts, politics)
	- Tags - elements covered in a post (e.g. sugar, chocolate, Vermin Supreme)
1. Media
	- Add media (images, audio, video) which can be referenced in posts
1. Pages
	- For things like About, Contact, Links, Resume, etc.
1. Comments
	- Can moderate.  It will email you for each new comment
1. Themes
	- Can add new themes
	- Can customize themes
	- Widget
		- Usually placed in a sidebar or someplace similar
	- Menus
		- A set of links to be placed anywhere
	- Header
		- Theme sets location
	- Background
		- Behind themes
	- Editor
		- Edit CSS and PHP Files
1. Plugins
	- Akismet
		- Checks for spam in comments
	- WooCommerce
		- Ecommerce!
	- Can write your own
1. Users
	- Administrator – somebody who has access to all the administration features within a single site.
	- Editor – somebody who can publish and manage posts including the posts of other users.
	- Author – somebody who can publish and manage their own posts.
	- Contributor – somebody who can write and manage their own posts but cannot publish them.
	- Subscriber – somebody who can only manage their profile.
1. Tools
	- Can import/export from/to other blogs
1. Settings
	- General
		- Site Name
		- URL
		- main point of contact
	- Reading
		- Have a static page (from Pages) instead of list of articles on your front page
		- How many posts on summary page
		- Content of feed
	- Discussion
		- Comment settings
			- Who can comment
			- How long the discussion is open for
			- Nesting comments
			- How many comments per page of comments
			- Comment notification
			- Comment moderation settings
	- Media
		- Small/Medium/Large sizes
	- Permalinks
		- URLs are generated based around SEO
		- You can customize
			- Post
			- Category
			- Tags

## Theming

### Set Up

1. Go to wp-content/themes/
1. Duplicate a theme directory
1. cd into new theme directory
1. open style.css and edit Theme Name and other values in comments
	- This affects how theme is displayed in wordpress admin panel
1. change screenshot.png

### Important Files

1. index.php
	- home
1. header.php
	- top part of site
1. sidebar.php
	- sidebar
1. sidebar-content-bottom.php
	- additional menu widgets
1. single.php
	- view a particular post`
1. page.php
	- view a page
1. content.php
	- content of a post
1. comments.php
	- comments section
1. footer.php
	- footer

### Important Functions

Functions that start with `the_` can usually be prepended with or replaced by `get_`.  When this is done, value is returned, not printed

1. `get_header()`
	- display header
1. `is_home()`
	- is home page
1. `is_front_page()`
	- is this the front page (single page to display, not containing articles
1. `get_sidebar()`
	- display sidebar
1. `get_footer()`
	- display footer
1. `bloginfo('name')`
	- name of blog
1. `bloginfo('description')`
	- description of blog
1. `have_posts()`
	- are there posts left to display?
1. `the_post()`
	- pull up the next post in the queue
1. `the_posts_pagination()`
	- how to show next/previous buttons
1. `have_comments()`
	- does the article have comments
1. `comments_open()`
	- are people allowed to comment
1. `get_comments_number()`
	- get the number of comments
1. `wp_list_comments()`
	- list comments
1. `the_comments_navigation()`
	- pagination for comments
1. `comment_form()`
	- create comment form
1. `the_author()`
	- display author of the article
1. `the_title()`
	- display the title of the article
1. `the_content()`
	- display the body of the article
1. `the_permalink()`
	- display permalink for the article
1. `get_template_part()`
	- use a sub template for some chunk of data

Basic comment listing:

```php
<section>
	<?php if ( comments_open() || get_comments_number() ): $comments = get_comments();?>
		<ul>
			<?php foreach ($comments as $comment): ?>
				<?php if($comment->comment_post_ID == get_the_id()): ?>
					<li>
						<?=$comment->comment_author;?> says: <?=$comment->comment_content;?>
					</li>
				<?php endif; ?>
			<?php endforeach; ?>
		</ul>
	<?php endif; ?>
</section>
```
