---
layout: home
---

{% for post in site.posts %}
  <article>
    <time datetime="{{ post.date | date: "%Y-%m-%d" }}">{{ post.date | date: "%b %-d, %Y" }}</time>
    <h2>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </h2>
  </article>
{% endfor %}

<p>subscribe <a href="/feed.xml">via RSS</a></p>
