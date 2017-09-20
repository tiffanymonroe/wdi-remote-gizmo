<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <header>
            <h1>Coffee Index Page</h1>
            <nav>
                <ul>
                    <li>
                        <a href="new">Add a Coffee</a>
                    </li>
                </ul>                
            </nav>
        </header>
        <section>
            <ul>
                <?php while($row = $drinks->fetch_object()): ?>
                    <li>
                        Pour a <?php echo $row->drink ?> for <?php echo $row->guest?>
                    </li>
                <?php endwhile; ?>
            </ul>
        </section>
    </body>
</html>