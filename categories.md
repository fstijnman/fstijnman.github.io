---
layout: default
title: Categories
permalink: /categories/
---

{% for category in site.categories %}
  <h2 id="{{ category[0] | slugify }}">{{ category[0] }}</h2>
  <ul>
    {% for post in category[1] %}
      <li>
        <a href="{{ post.url }}">{{ post.title }}</a>
        <span class="post-date">({{ post.date | date: "%B %d, %Y" }})</span>
      </li>
    {% endfor %}
  </ul>
{% endfor %}
