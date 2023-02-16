<?php
include 'app/vendor/autoload.php';
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>klpod221 | <?php echo $_SERVER['HTTP_HOST']; ?></title>
    <meta name="description" content="klpod221 | <?php echo $_SERVER['HTTP_HOST']; ?>">

    <link rel="stylesheet" href="public/css/main.css">

    <link rel="icon" href="public/images/favicon.png" type="image/x-icon">

    <link rel="preload" href="public/images/logo/logo_black_bg.png" as="image">
</head>

<body>
    <div id="tsparticles"></div>

    <main>
        <div class="container">
            <?php include 'app/sections/header.php'; ?>
            <?php include 'app/sections/profile.php'; ?>

            <div class="content-wrapper">
                <div class="content">
                    <div class="content-clip">
                        <section class="content-item my-scroll" data-section="comment">
                            <?php include 'app/sections/comment.php'; ?>
                        </section>
                        <section class="content-item my-scroll active" data-section="about">
                            <?php include 'app/sections/about.php'; ?>
                        </section>
                        <section class="content-item my-scroll" data-section="resume">
                            <?php include 'app/sections/resume.php'; ?>
                        </section>
                        <section class="content-item my-scroll" data-section="works">
                            <?php include 'app/sections/works.php'; ?>
                        </section>
                        <section class="content-item my-scroll" data-section="blog">
                            <?php include 'app/sections/blog.php'; ?>
                        </section>
                        <section class="content-item my-scroll" data-section="stats">
                            <?php include 'app/sections/stats.php'; ?>
                        </section>
                        <section class="content-item my-scroll" data-section="contact">
                            <?php include 'app/sections/contact.php'; ?>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <div class="loading">
        <h1 class="loading-title">
            <img src="public/images/logo/logo_black_bg.png" alt="logo">
            loading
            <span class="loading-dots">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
            </span>
        </h1>
        <div class="loading-bg"></div>
        <div class="loading-progress"></div>
    </div>

    <script src='public/lib/js/tsparticles.bundle.min.js'></script>
    <script src="public/js/main.js"></script>
</body>

</html>