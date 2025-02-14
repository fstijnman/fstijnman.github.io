---
layout: page
title: Tags
permalink: /tags/
---

{% for tag in site.tags %}
  {% assign tag_name = tag[0] %}
  <h2 id="{{ tag_name | slugify }}">{{ tag_name }}</h2>
  <ul class="post-list">
    {% for post in site.tags[tag_name] %}
      <li>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
        <h3>
          <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
        </h3>
      </li>
    {% endfor %}
  </ul>
{% endfor %}
