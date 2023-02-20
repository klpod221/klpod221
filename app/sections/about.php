<div class="custom-header">
    <span class="header-text">
        <span class="first-letter">A</span>bout Me
    </span>
</div>

<div class="page-content-wrapper">
    <article class="page-content">
        <h2>Hello! I'm Ken Longbottom.</h2>
        <p>
            <?php 
                $date1 = new DateTime("2021-12-01");
                $date2 = new DateTime(date("Y-m-d"));
                $diff = $date1->diff($date2);
                $exp_years = $diff->y;
            ?>
            Full-Stack Web Developer from Hà Nội, Việt Nam. I'm a passionate and creative web developer with <?= $exp_years ?>+ years of experience in web development. I have a strong passion for web development and I'm always looking for new challenges. I'm a fast learner and I'm always looking for new opportunities to improve my skills.
        </p>
    </article>
</div>