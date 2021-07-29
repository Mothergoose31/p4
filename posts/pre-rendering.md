---
title: ' Notes On : Next.js and its two forms of pre-rendering'
date: '2021-07-22'
---


Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.

There is also 

**Per Page Pre-rendering**

Next.JS allows to set pre-rendering method for each page where most of pages follow static generation and other pages will use server side rendering.

**Static Generation With or Without Data**

Static generation can be done without data in which case, HTML pages will be ready without need to prefetch the data and then start rendering. Data can be fetched later or on request. This technique helps in showing user an User Interface without any data in case data takes time to come.

when its done with data, in which case HTML pages will not be ready until data is fetched, as HTML may be dependent on data. Each component has a special method getStaticProps which can be used to fetch data and pass data as props of the page so that page can render accordings to passed props.

_getStaticProps()_ function runs at build time in production and runs for every request in dev mode.

