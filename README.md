<div align="center">
  <img alt='gooka' src='https://user-images.githubusercontent.com/14088342/107887804-f4a7ef00-6f08-11eb-8325-8ea2e2d1f214.png' width='250'/>
</div>
<h1 align="center">Gooka for <a href="https://github.com/ntwigs/gooka/releases/download/v0.1.1/Gooka-0.1.1.AppImage">Linux</a> and <a href="https://github.com/ntwigs/gooka/releases/download/v0.1.1/Gooka.0.1.1.exe">Windows</a></h1>
<p align="center">The naive and simplified way to find unused css selectors.</p>
   <p align="center">
    <img alt='css badge' src='https://img.shields.io/badge/css-found!-green.svg?style=flat-square' />
    <img alt='build badge' src='https://img.shields.io/badge/build-passing-green.svg?style=flat-square' />
    <img alt='version badge' src='https://img.shields.io/badge/version-0.1.1-blue.svg?style=flat-square' />
  </p>

---

### What's this?

Are you still using CSS-outside-JS (also known as just "CSS") - and you know that there _might_ be some old CSS selectors that are no longer in use? Such as `.deleteLater` and `.testing123`? But you're also quite sure about not wanting something fully automatic - so you know that you're in control? Then **Gooka** is for you!

Gooka is an easy way to find unused CSS classes in your code. It takes a CSS file and some non-CSS files and searches for the selectors inside those files. If no unused selectors are found, **congratulations**. But if Gooka finds some unused selectors - you'll get a list of those selectors, and you'll be able to manually delete them. Also - there's a **dark mode**!


![gooka-gif](https://user-images.githubusercontent.com/14088342/115273038-5a9a3800-a13f-11eb-8118-8ccb3a60bcda.gif)


### Why this?

Using scripts such as [PurgeCSS](https://github.com/FullHuman/purgecss), [PurifyCSS](https://github.com/purifycss/purifycss), and [UnCSS](https://github.com/uncss/uncss) is scary. Especially if you're working on a humongous project. Therefore, I created something more manual to be more selective in my selector deletions.

### Pitfalls

It's extremely naive. Let's say you have a selector called `.red` - and you add a file called `explaining-colors.ts` which contains a string `red`. It will take that as a "Ah, `.red` is being used here!". Which it isn't.

### Development prerequisites

So you're going to join the fun world of Gooka - and you're going to give it everything you have? Nice! This is what you'll need.

1. [Node version manager](https://github.com/nvm-sh/nvm) (Optional)
2. [Node >= v12](https://nodejs.org/en/)
3. [Yarn](https://classic.yarnpkg.com/en/)

If you're going to be building the app - it easier with:
4. [Docker](https://docs.docker.com/get-docker/)

### Develop on Linux

It should be super simple to get going - as long as you have the prerequisites.

1. Open your terminal.
2. Install packages with `yarn`.
3. Start development with `yarn electron:dev`.

### Develop in windows

Basically the same as above. Except it's Windows.

1. Open your terminal.
2. Install packages with `yarn`.
3. Start development with `yarn electron:windows`.

### Build for production

We're building for Linux and Windows! *Woo!*

1. Start the script `build-with-docker` - with the command: `bash build-with-docker`.

  If it's your first build - 

2. Run `yarn && yarn electron:build`.

  else

2. Run `yarn electron:build`.
3. Now there should be a folder called `dist` containing both a `Gooka.x.x.x.exe` and a `Gooka-x.x.x.AppImage`.

