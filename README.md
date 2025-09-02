# Emergency-hotline

1. getElementById: It returns a single element that matches the id given in getElementById function.
    getElementsByClassName: It returns all the classes that share same class name
    querySelector / querySelectorAll: For querySelector,it returns the first element that matches a CSS selector
2. Using createElement(), we can create any HTML tag. Along with this, we can also add this element with any existing HTML tags using appendChild().
3. In an event bubbling, when a child element receives an event, this event is transmitted to the parent element and it continues until it reaches the root of the DOM.

Working of event bubbling: Event listeners are included in both the parent and child element using addEventListener(). This is done so that the parent element can responsd after receiving the event from the child element.

4. Event delegation is a technique, in where a single event listener is added to the parent element, instead of adding it to multiple child elements.

It is useful because one event listener manages all the child elements. This prevents us from repeating  the code of event listener for each child. Also, if a new child element is added, we don't need to write a new event listener for it.

5.preventDefault(): It prevents the default behavior of an element. For instance, we can toggle a checkbox but using this method, the toogling option is disenabled.

stopPropagation(): This method prevents an event to propagate through the parent element. 