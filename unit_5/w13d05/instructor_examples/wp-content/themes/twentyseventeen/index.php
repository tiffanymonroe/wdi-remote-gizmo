<h1><?php bloginfo('name'); ?></h1>
<ul>
	<?php while ( have_posts() ) : the_post(); ?>
		<li>
			<h2>
				<a href="<?php the_permalink(); ?>">
					<?php the_title(); ?>
				</a>
			</h2>
			<small><?php the_author(); ?></small>
			<p><?php the_content(); ?></p>
			<section>!
				<?php
					if ( comments_open() || get_comments_number() ) :
						comments_template();
					endif;
				?>!
			</section>
			<section>
				<?php comment_form(); ?>
			</section>
		</li>
	<?php endwhile; ?>
</ul>
