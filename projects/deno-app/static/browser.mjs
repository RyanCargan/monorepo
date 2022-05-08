import {E} from 'https://cdn.jsdelivr.net/npm/prax@0.7.4/dom.mjs'

document.body.append(
  E('p', {class: 'italic'}, `This text was rendered in the browser!`),
)
