
---
layout: default
title: Posts
---

<h1>Posts</h1>

{% for post in site.posts %}
  <article>
    <h2>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </h2>
    <time datetime="{{ post.date | date: "%Y-%m-%d" }}">{{ post.date | date: "%b %-d, %Y" }}</time>
  </article>
{% endfor %}

<p>subscribe <a href="/feed.xml">via RSS</a></p>
