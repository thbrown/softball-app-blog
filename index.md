---
layout: default
title: "Welcome to Jekyll!"
published: true
---

## Softball.app Blog

This is a place to post updates about [https://softball.app](https://softball.app)

[https://softball.app](https://softball.app)

A Progressive Web App to optimize softball/baseball/kickball lineups via Monte Carlo simulations.

We used a bare bones version for slowpitch softball last season and it went pretty well.

Hoping to get something more polished out for the Spring '19 season. In the meantime, try it out and let me know what you think!

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>
