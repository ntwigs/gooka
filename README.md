<div align="center">
  <img alt='gooka' src='https://user-images.githubusercontent.com/14088342/107887804-f4a7ef00-6f08-11eb-8325-8ea2e2d1f214.png' width='250'/>
</div>
<h1 align="center">Gooka for <a href="/">Linux</a> and <a href="/">Windows</a></h1>
<p align="center">The naive and simplified way to find unused css classes.</p>

---

### What's this?

Are you still using CSS-outside-JS (also known as just "CSS") - and you know that there _might_ be some old CSS classes that are no longer in use? Such as `.deleteLater` and `.testing123`? But you're also quite sure about not wanting something fully automatic - so you know that you're in control? Then **Gooka** is for you!

Gooka is an easy way to find unused CSS classes in your code. It takes a CSS file and some non-CSS files and searches for the selectors inside those files. If no unused selectors are found, **congratulations**. But if Gooka finds some unused selectors - you'll get a list of those selectors, and manually delete them.

// INSERT GIFS HERE.

### Why this?

Using scripts such as [PurgeCSS](https://github.com/FullHuman/purgecss), [PurifyCSS](https://github.com/purifycss/purifycss), and [UnCSS](https://github.com/uncss/uncss) is scary. Especially if you're working on a humongous project. Therefore, I created something more manual to be more selective in my selector deletions.

### Pitfalls

It's extremely naive. Let's say you have a selector called `.red` - and you add a file called `explaining-colors.ts` which contains a string `red`. It will take that as a "Ah, `.red` is being used here!". Which it isn't.
