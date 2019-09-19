---
layout: default
title: "Blog Softball.app"
published: true
---

## Softball.app Blog

This is a place to post documentation and updates about [https://softball.app](https://softball.app)

A Progressive Web App to optimize softball/baseball/kickball lineups via Monte Carlo simulations.

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/XzFc3eDHfk4"
  frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
