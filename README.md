<p align="center">
  <a href="http://paradiseofcreativity.wordpress.com/">
    <img src="https://paradiseofcreativity.files.wordpress.com/2021/01/paradise.png" alt="Paradise of Creativity Logo" width="200" height="auto">
  </a>
</p>

<h3 align="center">Paradise of Creativity</h3>

<p align="center">
  Parimal Nakrani
</p>

# Login Form

**Login Form** is a basic responsive page. Developed by [Parimal Nakrani](http://paradiseofcreativity.wordpress.com/)

## Login Form Valid User Id and Password
* User Id: **`paradise2021`**
* Password: **`paradise`**

## Technologies and Dependencies

This simple login form page uses [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML),
[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS),
[Javascript](https://developer.mozilla.org/en-US/docs/Web/javascript),
[jQuery](https://jquery.com/), and [Bootstarp](https://getbootstrap.com/).

You will also need a code text editor, such as [VSCode](https://code.visualstudio.com/) or
[Sublime Text](https://www.sublimetext.com/3) or [Atom](https://atom.io/), and a [GitHub account](https://github.com/join).

## Getting Started

1. If
you're using [git](https://git-scm.com/) in your terminal,
[clone locally](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository) using
`git clone https://github.com/paradiseofcreativity/paradiseofcreativity.github.io.git`, otherwise click on the green **Clone or
download** button, then click **Download ZIP**
4. Unzip the downloaded file then open the new directory in your favorite text editor (I like
[VSCode](https://code.visualstudio.com/) and [Atom](https://atom.io/))
5. Open `index.html` in your browser to view the site. One way is to find the file, then select
"Open with..." and choose the browser you want to use. Another is to open your browser (eg, Chrome)
then select "Open file..." and find and select `index.html`.
6. Back in the text editor, add content to the `index.html` file, style it up in the
`assets/css/login.css` file, and make it interactive by adding JavaScript to `assets/js/login.js`
7. Go back to `index.html` in your web browser at any time and refresh the page to view changes

## Code Structure

* **`README.md`**
  * Includes information about this project, instructions on how to get the code running, etc.
  * Good practice to include if someone else is going to be looking at this code—or even for our
  future self!
* **`index.html`**
  * Where we put our main content
  * [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) describes the content and structure of a web page, and
  is the standard markup language for web pages
* **`/assets/css`**
  * Where we put our [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) files, which is how we style our HTML content
  * CSS is a language that describes how the web browser should display an HTML document’s content
  * Can include custom CSS files, eg `style.css` or `page.css`
  * Can include imported CSS files from other libraries, eg `bootstrap.min.css`
* **`/assets/js`**
  * Where we put our [JavaScript](https://developer.mozilla.org/en-US/docs/Web/javascript) code, which makes our site
  interactive
  * JavaScript is a language that allows us to program the behavior of web pages
  * Can include custom JS files, eg `script.js` or `page.js`
  * Can include imported JS files from other libraries, eg `bootstrap.min.js`
* **`/assets/images`**
  * Where we put any images that we want to save and display
  * Be sure to always use images you have permission for! [Unsplash](https://unsplash.com/) is a
  great resource for copyright-free photos.


## HTML: Make it say what you want

### Basic HTML document structure

```html
<!DOCTYPE html>
<html>
<head>
  <!-- <meta> info -->
  <!-- <title> -->
  <!-- import CSS files and fonts -->
</head>
<body>
  <!-- page content -->
  <!-- import scripts -->
</body>
</html>
```

## CSS: Make it look good

[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) controls the style of the HTML content


### Syntax

```css
.login-form {
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

h1, h2 {
  color: #ffffff;
  font-family: 'Libre Baskerville', serif;
}
```

### Responsiveness
Responsive design allows a site to look good on any device, regardless off the screen/browser size.
We can use CSS to make the appearance of our content adapt well to different browser widths, so that
it looks just as good on a phone as it does on a large desktop computer.

By applying a `media query`, we can specify at what browser size a certain style will apply.
For example:
```css
.form-error {
  font-size: 12px;
  padding: 5px 0 0;
  color: #dc3545;
}

/* On screens that are 767px wide or less */
@media only screen and (max-width: 767px) {
  .form-items {
    padding: 30px 20px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, .1);
    max-width: 440px;
    width: 100%;
    margin: 0 30px;
  }
}
```

## JavaScript: Make it do cool stuff

[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) makes the page interactive. We
can add this functionality between `<script></script>` tags at the bottom of the `<body>` tag in
index.html, but if we have a lot of JavaScript code, it's best to abstract it into a separate JavaScript file.
You may even choose to create multiple JS files so that the code is more manageable, organized, and
contained.

The [Bootstrap](https://getbootstrap.com/) framework included with this page.

[**jQuery**](https://jquery.com/) is a JavaScript library that provides utility functions for
common chunks of code used in JavaScript so we can skip to the fun stuff. When we use `$`, we're
calling jQuery. In order to use it, though, we need to import the library! That's what we're doing
at the bottom of index.html with
`<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>`.
Because loading the library takes work, you only want to include it if you need and are using it.
The Materialize CSS library we're using requires it for actions like opening the mobile menu, but
*if you're not using Materialize's JavaScript helpers and not using jQuery yourself*, then remove
that link from index.html for a slightly faster load time.

## Releasing site

Ready to take your site live? There are plenty of options, both free and paid. A simple free option
is [**GitHub Pages**](https://pages.github.com/), which will require you to create a
[GitHub](https://github.com/) account and a repository for this code. That's a very important step
for any developer, so don't be afraid to take it!

If you don't know [git](https://git-scm.com/) and aren't ready to learn yet, GitHub has made it easy
to create a code repository and deploy it to GitPages from within your GitHub dashboard without
entering the spooky terminal.
[This tutorial](https://medium.com/javascript-in-plain-english/how-to-host-a-static-website-for-free-7a2a959f5e4)
will take you through the steps.

If you already know a bit of git and are able to
[create a repository locally from your terminal](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository),
there's a nice [walk-through tutorial here](https://www.thinkful.com/learn/a-guide-to-using-github-pages/start/)
that will show you how to deploy your local repo to GitHub Pages.

If you own a custom domain name, you can even
[configure your GitHub Pages site](https://help.github.com/en/github/working-with-github-pages/configuring-a-custom-domain-for-your-github-pages-site)
to use it.

If you have a lot of content to host, note that GitHub has a limiy of 1GB. A highly rated service
for deploying static sites (frontend only, no backend) is [**Netlify**](https://www.netlify.com/), which
offers a lot for free. They even can help with managing forms without needing server-side code!

Amazon's [**AWS**](https://aws.amazon.com/) is also very popular, with many cloud hosting options
and both free and paid tiers. Here's a
[good guide](https://www.freecodecamp.org/news/a-beginners-guide-on-how-to-host-a-static-site-with-aws/)
on deploying to AWS.

Did you take your site way beyond the scope of this static site template and have an app with a
backend? Then check out [**Heroku**](https://www.heroku.com/)!
