Ans No 1:
getElementById - There is only one Id given in html tags. Can't use same ID in different tags.

getElementsByClassName: There are many class with same name. By using this method we can call all elements with same class name.

querySelector: Select and return only first css selectors like id or class or tag etc.

querySelectorAll: Select all elements matching css selectors and return NodeList.
-------------------

Ans No 2:
First we will create element using document.createElement() and append it using appendChild()
----------------

Ans No 3:
Event bubbling is setting a listener on a parent element. It bubbles up to parent to grandparent to document.
----------------

Ans no 4:

Event Delegation is basically a pattern to handle events efficiently. Event delegation is a technique where we can attach a single event listener to a parent element to handle events on its child elements. It improves performance, reduces event listener.
-----------------

Ans no 5:
preventDefault() Stop a form from submitting or a link from navigating

stopPropagation() Prevent a parent’s click handler from firing.