# Lab - Includes and Custom Directives

For the following html:

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>
        <header>
            <h1>Welcome To The App</h1>
            <nav>
                <ul>
                    <li><a href="/some-path">Awesome Link</a></li>
                    <li><a href="http://www.google.com">Another Link</a></li>
                    <li><a href="a-relative-path">Fun With Links</a></li>
                    <li><a href="yassss.com">YASSSS</a></li>
                </ul>
            </nav>
        </header>
        <main>
            <section>
                <h2>Here's My Amazing Article</h2>
                <article>
                    <p>Bacon ipsum dolor amet shank corned beef frankfurter filet mignon t-bone capicola ball tip. Sausage corned beef tongue flank jowl salami andouille beef. Burgdoggen landjaeger tongue rump shank, pork loin biltong sirloin frankfurter meatball short loin filet mignon tenderloin porchetta. Burgdoggen cow fatback corned beef kevin.</p>
                    <p>Turducken frankfurter jowl t-bone pork boudin beef ribs prosciutto. Swine flank t-bone strip steak cow. Ham hock strip steak bacon short loin. Venison salami kevin cupim, landjaeger short ribs tongue rump sirloin frankfurter biltong chicken short loin pastrami ball tip. Drumstick picanha tongue chicken, biltong filet mignon pig.</p>
                    <p>Shank shoulder tongue tri-tip, ham hock sausage sirloin beef frankfurter pork shankle kielbasa pork belly. Boudin pork turducken, chuck short loin turkey tri-tip bresaola sirloin shank salami leberkas spare ribs ham. Venison pork loin ground round shank, porchetta ham leberkas cow tongue. Sausage corned beef rump, jerky swine short loin spare ribs.</p>
                    <p>Brisket hamburger corned beef sausage pig porchetta ball tip jowl salami flank. Tail shank corned beef kevin jerky. Tri-tip andouille strip steak ham hock leberkas, biltong chicken pancetta pork belly jowl short ribs ball tip boudin pastrami. Short loin capicola ground round biltong chicken drumstick beef kevin boudin pork belly. Capicola turducken porchetta, biltong ham hock cow flank pastrami spare ribs short loin cupim burgdoggen bacon short ribs. Doner tongue bacon pork loin ground round turducken alcatra cow tail short loin drumstick.</p>
                    <p>Pig short loin cupim pork belly pastrami pork chop. Turducken chicken drumstick, short loin porchetta t-bone pork belly jowl salami tail shank rump leberkas landjaeger pig. Meatloaf pig spare ribs tongue shank hamburger cupim andouille prosciutto jerky frankfurter kevin. Flank fatback jerky ribeye. Swine boudin capicola salami pastrami, leberkas jerky.</p>    
                </article>
            </section>
            <section>
                <h2>Comments</h2>
                <ul>
                    <li>Great Job!</li>
                    <li>You Rock!</li>
                    <li>Something Positive!</li>
                    <li>The beauty!  My eyes!  It burns!</li>
                </ul>
                <form>
                    <textarea></textarea>
                    <input type="submit" value="Post Comment"/>
                </form>
            </section>
        </main>
        <footer>
            <nav>
                <ul>
                    <li><a href="http://www.techcrunch.com"></a>Footer Link 1</li>
                    <li><a href="http://www.generalassemb.ly">Another Footer Link</a></li>
                    <li><a href="http://www.linkedin.com">Link 3</a></li>
                </ul>
            </nav>
        </footer>
    </body>
</html>
```

## External File Partials

1. Create a controller for header `HeaderCtrl`
    - In the html it should be instantiated `HeaderCtrl as nav`
1. Create a controller for footer `FooterCtrl`
    - In the html it should be instantiated `FooterCtrl as nav`
1. Move the nav elements into the same partial
    - Set up the partial so that it looks for a `links` property on the controller `nav` and does an `ng-repeat` to display the `li` elements
        - The `links` property should be an array of objects that each have a text and a link property
1. Move the `main` into its own partial
1. In the `main` partial, move each section into its own sub-partial
1. In the comments partial, put the comments `ul` into its own partial
    - Create a controller for the `ul` with a property called `comments`.  This property should be an array of strings
    - Use `ng-repeat` to print each of the `li` elements based on the `comments` property of the controller
1. In the comments partial, put the comment `form` into its own partial

## Custom Directives

Create custom directives which use each of the partials you created

- `<header-nav>`
- `<footer-nav>`
- `<content>`
    - `<article-section>`
    - `<comments-section>`
        - `<comments-list>`
        - `<comments-form>`

## Inline Partials

Take each of the partial files and change them to inline templates in your main html file
