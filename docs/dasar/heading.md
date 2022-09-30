---
sidebar_position: 7
---


# Heading HTML 

HTML headings are titles or subtitles that you want to display on a webpage.

**Example**
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>


HTML headings are defined with the `<h1>` to `<h6>` tags.

`<h1>` defines the most important heading. `<h6>` defines the least important heading.

#### Example
```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```
:::note 
Browsers automatically add some white space (a margin) before and after a heading.
:::

## Headings Are Important

Search engines use the headings to index the structure and content of your web pages.

Users often skim a page by its headings. It is important to use headings to show the document structure.

`<h1>` headings should be used for main headings, followed by `<h2>` headings, then the less important `<h3>`, and so on.

:::note 
Use HTML headings for headings only. Don't use headings to make text BIG or bold.
:::

## Bigger Headings
Each HTML heading has a default size. However, you can specify the size for any heading with the style attribute, using the CSS font-size property:

#### Example
```html
<h1 style="font-size:60px;">Heading 1</h1>
```