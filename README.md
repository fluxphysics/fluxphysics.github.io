# fluxphysics.github.io

[Flux Physics](https://fluxphysics.github.io) is a website dedicated to teaching resources for pre-university physics.

### Contributing

Contributions are welcome. Feel free to open a pull request with changes.

### Running it Locally

Preview changes locally before opening a pull request. *Flux Physics* runs on [Jekyll](http://jekyllrb.com/). After forking or cloning the repository, perform the following steps to generate the site and preview it:

- Make sure you have ruby installed on your computer. See https://www.ruby-lang.org/en/downloads/  
- In your terminal `cd` to the local repo, and run `bundle install`
- Next, run `bundle exec jekyll serve`
- Point your browser to http://127.0.0.1:4000/

### Deployment

Pull requests merged to the master branch are automatically deployed to the production website, hosted by [Github Pages](https://pages.github.com/).

### Roadmap:
**Meta:**   
- [x] _~Add analytics~_    
- [x] _~Exclude tracking the in dev environments~_
- [ ] Upgrade analytics to Google Tag Manager to track events

**Sitewide**
- [ ] Fix header & navigation
– [ ] Add Lato as font option
- [ ] Add next/prev./rand. to bottom of pages
– [ ] Refit essays as a layout with `.yaml` variables for masthead and next/prev/rand  
- [ ] Use JS to handle contents of essays, based on `IDs` of `sections` with new `.contents` class. Recommend use of `data-*`. Example [`liquid`](https://github.com/samjamead/samjamead.github.io/blob/master/_layouts/post.html).

**Exoplanets**
– [ ] Put questions into a digital quiz format  
