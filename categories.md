---
layout: page
title: Categories
permalink: /categories/
---

{% for category in site.categories %}
  {% assign category_name = category[0] %}
  <h2 id="{{ category_name | slugify }}">{{ category_name }}</h2>
  <ul class="post-list">
    {% for post in site.categories[category_name] %}
      <li>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
        <h3>
          <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
        </h3>
      </li>
    {% endfor %}
  </ul>
{% endfor %}
