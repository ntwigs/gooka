

# Gooka for [Linux](/), [MacOS](/) and [Windows](/)
The naive and simplified way to find unused css classes.

---

### What's this?
Are you still using css-outside-JS (also known as just "css") - and you know that there *might* be some old css classes that are no longer in use? Such as `.deleteLater` and `.testing123`? But you're also quite sure about not wanting something fully automatic - so you know that you're in control? Then **Gooka** is for you!

Gooka is an easy way to find unused css classes in your code. It basically takes a css file and some non-css files and searches for the selectors inside those files. If no unused selectors are found, **congratulations**. But if Gooka finds some unused selectors - you'll get a list of those selectors, and manually delete them.

// INSERT GIFS HERE.

### Why this?
Using scripts such as [PurgeCSS](https://github.com/FullHuman/purgecss), [PurifyCSS](https://github.com/purifycss/purifycss), and [UnCSS](https://github.com/uncss/uncss) is scary. Especially if you're working in a humongus project. Therefore, I created something more manual in order to be more selective in my selector deletions.

### Pitfalls
It's extremely naive. Let's say you have a selector called `.red` - and you add a file called `explaining-colors.ts` which contains a string `red`. It will take that as a "Ah, `.red` is being used here!". Which it isn't. 