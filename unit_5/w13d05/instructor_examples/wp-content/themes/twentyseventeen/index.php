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
			<section>
				<?php comment_form(); ?>
			</section>
		</li>
	<?php endwhile; ?>
</ul>
