---
layout: default
title: "Blog Softball.app"
published: true
---

## Welcome to Softball.app!

Softball.app is a [Progressive web app](https://en.wikipedia.org/wiki/Progressive_web_application) for optimizing softball/baseball/kickball lineups via Monte Carlo simulations.

Watch the video to find out more or just try it out here [https://softball.app](https://softball.app). Getting started is free (heck, everything is free at this point) and doesn't require an account.

<iframe
  width="560"
  height="370"
  src="https://www.youtube.com/embed/XzFc3eDHfk4"
  frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>

### Current Features: 

* **Batting lineup optimization** using an open source set of optimization algorithms (https://github.com/thbrown/softball-sim)
* **YouTube video walkup songs**
* **Cloud backup and cross-device sync** (requires an account)
* **Data export** as a json file
* **Works offline**

### All 'About Softball.app' Pages: 
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
