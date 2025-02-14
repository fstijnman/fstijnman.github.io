---
layout: default
title: Tags
permalink: /tags/
---

{% for tag in site.tags %}
  <h2 id="{{ tag[0] | slugify }}">{{ tag[0] }}</h2>
  <ul>
    {% for post in tag[1] %}
      <li>
        <a href="{{ post.url }}">{{ post.title }}</a>
        <span class="post-date">({{ post.date | date: "%B %d, %Y" }})</span>
      </li>
    {% endfor %}
  </ul>
{% endfor %}
