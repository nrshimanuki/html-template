<?php
	require_once($_SERVER['DOCUMENT_ROOT'].'/assets/templates/__constant.php');
	$page_slug        = INDEX_PAGE_SLUG;
	$meta_title       = INDEX_META_TITLE . '｜' . SITE_TITLE;
	$meta_description = INDEX_META_DESCRIPTION;
?>
<?php require_once($_SERVER['DOCUMENT_ROOT'].'/assets/templates/_header.php'); ?>
<?php require_once($_SERVER['DOCUMENT_ROOT'].'/assets/templates/_navi.php'); ?>
<?php require_once($_SERVER['DOCUMENT_ROOT'].'/assets/templates/_breadcrumbs.php'); ?>
<div class="site_content">
	<div class="site_container">
		<main class="site_main" role="main">


			<article>
				<h1>title</h1>
				<section>
					<h2>content</h2>
					<p>text.text.text.text.</p>
				</section>
				<section>
					<h2>content</h2>
					<p>text.text.text.text.</p>
				</section>
				<section>
					<h2>content</h2>
					<p>text.text.text.text.</p>
				</section>
			</article>


		</main><!-- site_main -->
	<?php require_once($_SERVER['DOCUMENT_ROOT'].'/assets/templates/_sidebar.php'); ?>
	</div><!-- site_container -->
</div><!-- site_content -->
<?php require_once($_SERVER['DOCUMENT_ROOT'].'/assets/templates/_footer.php'); ?>
