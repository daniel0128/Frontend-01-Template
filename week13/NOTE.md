# Notes for Week 13: Proxy, Range and Componentization
## Proxy
two way binding
## Range
### Dragable
```js
let ranges = [];
let container = document.getElementById('container');
for (let i = 0; i < container.childNodes[0].textContent.length; i++) {
  let range = document.createRange();
  range.setStart(container.childNodes[0], i);
  range.setEnd(container.childNodes[0], i);
  // console.log(range.getBoundingClientRect());
  ranges.push(range);
}
```
## Componententization
![Componententization](https://github.com/daniel0128/Frontend-01-Template/blob/master/week13/componentization.png)

| Markup set | JS set | JS Change | User Input Change |           |
| ---------- | ------ | --------- | ----------------- | --------- |
| ❌          | ✔️      | ✔️         | ❓                 | Property  |
| ✔️          | ✔️      | ✔️         | ❓                 | Attribute |
| ❌          | ❌      | ❌         | ✔️                 | State     |
| ❌          | ✔️      | ❌         | ❌                 | Config    |

### Example: Carousel

```js
Carousel
	state
  	activeIndex
	property
  	loop time imglist color forward
  attribute
  	startIndex loop time imglist autoplay color forward
  children
  	2
	event
  	change click hover swipe resize dbclick
  method
  	next() prev() goto() play() stop()
	config
  	mode: 'useRAF', 'useTimeout'

```
