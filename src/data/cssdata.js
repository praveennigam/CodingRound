// src/data/cssData.js
export const css = [
  {
    "question": "How do you center a div using CSS?",
    "answer": "To center a div horizontally and vertically, use the following CSS:\n\n```css\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n```",
    "output": "The div will be centered in the middle of the viewport."
  },
  {
    "question": "How do you change the background color in CSS?",
    "answer": "Use the `background-color` property:\n\n```css\nbody {\n  background-color: lightblue;\n}\n```",
    "output": "Changes the background color to light blue."
  },
  {
    "question": "How do you change font size in CSS?",
    "answer": "Use the `font-size` property:\n\n```css\np {\n  font-size: 20px;\n}\n```",
    "output": "Changes the font size to 20px."
  },
  {
    "question": "How do you make text bold in CSS?",
    "answer": "Use the `font-weight` property with the `bold` value:\n\n```css\np {\n  font-weight: bold;\n}\n```",
    "output": "Makes the text bold."
  },
  {
    "question": "How do you make text italic in CSS?",
    "answer": "Use the `font-style` property with the `italic` value:\n\n```css\np {\n  font-style: italic;\n}\n```",
    "output": "Makes the text italic."
  },
  {
    "question": "How do you add a border to an element in CSS?",
    "answer": "Use the `border` property:\n\n```css\ndiv {\n  border: 1px solid black;\n}\n```",
    "output": "Adds a black border around the `<div>`."
  },
  {
    "question": "How do you add padding to an element in CSS?",
    "answer": "Use the `padding` property:\n\n```css\ndiv {\n  padding: 10px;\n}\n```",
    "output": "Adds 10px padding inside the `<div>`."
  },
  {
    "question": "How do you add margin to an element in CSS?",
    "answer": "Use the `margin` property:\n\n```css\ndiv {\n  margin: 20px;\n}\n```",
    "output": "Adds 20px margin around the `<div>`."
  },
  {
    "question": "How do you change text color in CSS?",
    "answer": "Use the `color` property:\n\n```css\np {\n  color: red;\n}\n```",
    "output": "Changes the text color to red."
  },
  {
    "question": "How do you hide an element in CSS?",
    "answer": "Use the `display` property with the `none` value:\n\n```css\n.element {\n  display: none;\n}\n```",
    "output": "Hides the element from the page."
  },
  {
    "question": "How do you show an element in CSS after hiding it?",
    "answer": "Use the `display` property with the `block` or `inline` value depending on the element:\n\n```css\n.element {\n  display: block;\n}\n```",
    "output": "Makes the element visible again."
  },
  {
    "question": "How do you create a flexbox layout in CSS?",
    "answer": "Use the `display: flex` property on the container:\n\n```css\n.container {\n  display: flex;\n}\n```",
    "output": "The container will use a flexbox layout."
  },
  {
    "question": "How do you align items horizontally in flexbox?",
    "answer": "Use the `justify-content` property:\n\n```css\n.container {\n  display: flex;\n  justify-content: center;\n}\n```",
    "output": "Aligns items horizontally in the center."
  },
  {
    "question": "How do you align items vertically in flexbox?",
    "answer": "Use the `align-items` property:\n\n```css\n.container {\n  display: flex;\n  align-items: center;\n}\n```",
    "output": "Aligns items vertically in the center."
  },
  {
    "question": "How do you create a grid layout in CSS?",
    "answer": "Use the `display: grid` property and define grid columns and rows:\n\n```css\n.container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n```",
    "output": "Creates a grid layout with 3 equal-width columns."
  },
  {
    "question": "How do you make a div full-width in CSS?",
    "answer": "Use the `width` property with `100%`:\n\n```css\ndiv {\n  width: 100%;\n}\n```",
    "output": "Makes the `<div>` take the full width of its parent."
  },
  {
    "question": "How do you add a background image in CSS?",
    "answer": "Use the `background-image` property:\n\n```css\nbody {\n  background-image: url('image.jpg');\n}\n```",
    "output": "Sets an image as the background."
  },
  {
    "question": "How do you make a CSS transition?",
    "answer": "Use the `transition` property:\n\n```css\nbutton {\n  transition: background-color 0.3s ease;\n}\n```",
    "output": "Smoothly transitions the background color of the button."
  },
  {
    "question": "How do you add a shadow to an element in CSS?",
    "answer": "Use the `box-shadow` property:\n\n```css\ndiv {\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);\n}\n```",
    "output": "Adds a shadow to the element."
  },
  {
    "question": "How do you make a circular image in CSS?",
    "answer": "Use the `border-radius` property with a value of `50%`:\n\n```css\nimg {\n  border-radius: 50%;\n}\n```",
    "output": "Makes the image circular."
  },
  {
    "question": "How do you create a responsive layout in CSS?",
    "answer": "Use media queries to adjust styles based on screen size:\n\n```css\n@media (max-width: 600px) {\n  body {\n    background-color: lightgray;\n  }\n}\n```",
    "output": "Applies styles for smaller screens."
  },
  {
    "question": "How do you change the font family in CSS?",
    "answer": "Use the `font-family` property:\n\n```css\nbody {\n  font-family: 'Arial', sans-serif;\n}\n```",
    "output": "Changes the font to Arial."
  },
  {
    "question": "How do you make text uppercase in CSS?",
    "answer": "Use the `text-transform` property with the `uppercase` value:\n\n```css\np {\n  text-transform: uppercase;\n}\n```",
    "output": "Transforms the text to uppercase."
  },
  {
    "question": "How do you remove underline from a link in CSS?",
    "answer": "Use the `text-decoration` property with the `none` value:\n\n```css\na {\n  text-decoration: none;\n}\n```",
    "output": "Removes the underline from links."
  },
  {
    "question": "How do you create a hover effect in CSS?",
    "answer": "Use the `:hover` pseudo-class:\n\n```css\nbutton:hover {\n  background-color: green;\n}\n```",
    "output": "Changes the background color when the button is hovered."
  },
  {
    "question": "How do you make a responsive image in CSS?",
    "answer": "Use the `max-width` and `height` properties:\n\n```css\nimg {\n  max-width: 100%;\n  height: auto;\n}\n```",
    "output": "Makes the image responsive."
  },
  {
    "question": "How do you align text to the center in CSS?",
    "answer": "Use the `text-align` property with the `center` value:\n\n```css\np {\n  text-align: center;\n}\n```",
    "output": "Aligns the text to the center."
  },
  {
    "question": "How do you use `position: absolute;` in CSS?",
    "answer": "`position: absolute;` positions an element relative to its nearest positioned ancestor:\n\n```css\n.element {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n}\n```",
    "output": "Positions the element absolutely within its container."
  },
  {
    "question": "How do you create a CSS triangle?",
    "answer": "Use the `border` property:\n\n```css\n.triangle {\n  width: 0;\n  height: 0;\n  border-left: 50px solid transparent;\n  border-right: 50px solid transparent;\n  border-bottom: 50px solid blue;\n}\n```",
    "output": "Creates a triangle shape using borders."
  },
  {
    "question": "How do you create a simple animation in CSS?",
    "answer": "Use the `@keyframes` rule and the `animation` property:\n\n```css\n@keyframes example {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\ndiv {\n  animation: example 2s infinite;\n}\n```",
    "output": "Creates a rotating animation."
  }
  ,
  {
    "question": "How do you create a CSS animation delay?",
    "answer": "Use the `animation-delay` property:\n\n```css\n.element {\n  animation: move 2s ease-in-out 1s;\n}\n```",
    "output": "The animation will start after a 1-second delay."
  },
  {
    "question": "How do you make a CSS animation repeat?",
    "answer": "Use the `animation-iteration-count` property:\n\n```css\n.element {\n  animation: move 2s infinite;\n}\n```",
    "output": "The animation will repeat indefinitely."
  },
  {
    "question": "How do you add a shadow to text in CSS?",
    "answer": "Use the `text-shadow` property:\n\n```css\nh1 {\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);\n}\n```",
    "output": "Adds a shadow to the text."
  },
  {
    "question": "How do you create a gradient background in CSS?",
    "answer": "Use the `background-image` property with `linear-gradient` or `radial-gradient`:\n\n```css\nbody {\n  background-image: linear-gradient(to right, red, yellow);\n}\n```",
    "output": "Creates a gradient background from red to yellow."
  },
  {
    "question": "How do you create a box-shadow in CSS?",
    "answer": "Use the `box-shadow` property:\n\n```css\ndiv {\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n}\n```",
    "output": "Adds a shadow to the div."
  },
  {
    "question": "How do you remove the default margin in CSS?",
    "answer": "Use the `margin` property:\n\n```css\nbody {\n  margin: 0;\n}\n```",
    "output": "Removes the default margin from the body element."
  },
  {
    "question": "How do you change the cursor in CSS?",
    "answer": "Use the `cursor` property:\n\n```css\nbutton {\n  cursor: pointer;\n}\n```",
    "output": "Changes the cursor to a pointer when hovering over the button."
  },
  {
    "question": "How do you hide an element but keep it in the document flow?",
    "answer": "Use the `visibility` property with the `hidden` value:\n\n```css\n.element {\n  visibility: hidden;\n}\n```",
    "output": "The element will be hidden but still occupy space."
  },
  {
    "question": "How do you create a CSS sticky header?",
    "answer": "Use the `position: sticky` property:\n\n```css\nheader {\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n}\n```",
    "output": "Makes the header stick to the top of the page when scrolling."
  },
  {
    "question": "How do you create a rounded button in CSS?",
    "answer": "Use the `border-radius` property:\n\n```css\nbutton {\n  border-radius: 10px;\n}\n```",
    "output": "Creates a button with rounded corners."
  },
  {
    "question": "How do you make an element fixed in place on the page?",
    "answer": "Use the `position: fixed` property:\n\n```css\ndiv {\n  position: fixed;\n  top: 10px;\n  right: 10px;\n}\n```",
    "output": "Positions the element fixed at 10px from the top-right corner of the page."
  },
  {
    "question": "How do you create a CSS tooltip?",
    "answer": "Use the `:hover` pseudo-class and the `::after` pseudo-element:\n\n```css\n.tooltip {\n  position: relative;\n}\n.tooltip::after {\n  content: 'Tooltip text';\n  position: absolute;\n  top: -30px;\n  left: 50%;\n  transform: translateX(-50%);\n  background-color: black;\n  color: white;\n  padding: 5px;\n}\n```",
    "output": "Shows a tooltip when hovering over an element."
  },
  {
    "question": "How do you make a link open in a new tab using CSS?",
    "answer": "Use the `target` attribute in the HTML, as CSS doesn't control this:\n\n```html\n<a href='https://example.com' target='_blank'>Open in new tab</a>\n```",
    "output": "The link will open in a new browser tab."
  },
  {
    "question": "How do you make a responsive container in CSS?",
    "answer": "Use `max-width` and `width` properties:\n\n```css\n.container {\n  width: 100%;\n  max-width: 1200px;\n}\n```",
    "output": "The container is responsive and won't exceed 1200px in width."
  },
  {
    "question": "How do you create a flexbox row in CSS?",
    "answer": "Use the `display: flex` property on the container:\n\n```css\n.container {\n  display: flex;\n}\n```",
    "output": "The container will use a flex layout, with items in a row by default."
  },
  {
    "question": "How do you create a flexbox column in CSS?",
    "answer": "Use the `flex-direction: column` property on the container:\n\n```css\n.container {\n  display: flex;\n  flex-direction: column;\n}\n```",
    "output": "The container will use a flex layout with items in a column."
  },
  {
    "question": "How do you create a transparent background in CSS?",
    "answer": "Use the `rgba` function with an alpha value of 0:\n\n```css\ndiv {\n  background-color: rgba(0, 0, 0, 0);\n}\n```",
    "output": "Creates a fully transparent background."
  },
  {
    "question": "How do you add a CSS transition to a hover effect?",
    "answer": "Use the `transition` property:\n\n```css\nbutton {\n  transition: background-color 0.3s ease;\n}\nbutton:hover {\n  background-color: green;\n}\n```",
    "output": "Smoothly transitions the background color when hovering."
  },
  {
    "question": "How do you center an image horizontally in CSS?",
    "answer": "Use `margin: 0 auto` on the image:\n\n```css\nimg {\n  display: block;\n  margin: 0 auto;\n}\n```",
    "output": "Centers the image horizontally."
  },
  {
    "question": "How do you add a background image to a button in CSS?",
    "answer": "Use the `background-image` property:\n\n```css\nbutton {\n  background-image: url('button-bg.jpg');\n}\n```",
    "output": "Adds an image as the background of the button."
  },
  {
    "question": "How do you add a hover effect on text color in CSS?",
    "answer": "Use the `:hover` pseudo-class to change text color:\n\n```css\np:hover {\n  color: red;\n}\n```",
    "output": "Changes the text color to red when hovering."
  },
  {
    "question": "How do you create a CSS progress bar?",
    "answer": "Use the `progress` element and style it with CSS:\n\n```css\nprogress {\n  width: 100%;\n  height: 30px;\n}\n```",
    "output": "Creates a basic progress bar."
  },
  {
    "question": "How do you create a CSS circular progress bar?",
    "answer": "Use `conic-gradient` for a circular progress:\n\n```css\n.circle {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  background: conic-gradient(blue 0% 50%, lightgray 50% 100%);\n}\n```",
    "output": "Creates a circular progress bar."
  },
  {
    "question": "How do you add custom fonts in CSS?",
    "answer": "Use the `@font-face` rule or `font-family`:\n\n```css\n@font-face {\n  font-family: 'MyCustomFont';\n  src: url('font.ttf');\n}\nbody {\n  font-family: 'MyCustomFont';\n}\n```",
    "output": "Loads and applies a custom font."
  },
  {
    "question": "How do you set the font weight to normal in CSS?",
    "answer": "Use the `font-weight` property with the `normal` value:\n\n```css\np {\n  font-weight: normal;\n}\n```",
    "output": "Sets the font weight to normal."
  },
  {
    "question": "How do you change the color of a link in CSS?",
    "answer": "Use the `color` property:\n\n```css\na {\n  color: blue;\n}\n```",
    "output": "Changes the color of links to blue."
  },
  {
    "question": "How do you create a dropdown menu in CSS?",
    "answer": "Use the `:hover` pseudo-class and `display` property:\n\n```css\nul {\n  list-style-type: none;\n}\nul li:hover > ul {\n  display: block;\n}\nul ul {\n  display: none;\n}\n```",
    "output": "Creates a dropdown menu that appears on hover."
  },
  {
    "question": "How do you make text bold in CSS?",
    "answer": "Use the `font-weight` property with the `bold` value:\n\n```css\np {\n  font-weight: bold;\n}\n```",
    "output": "Makes the text bold."
  },
  {
    "question": "How do you change the background color of a div in CSS?",
    "answer": "Use the `background-color` property:\n\n```css\ndiv {\n  background-color: red;\n}\n```",
    "output": "Changes the background color of the div to red."
  },
  {
    "question": "How do you make a CSS element responsive?",
    "answer": "Use the `@media` rule:\n\n```css\n@media (max-width: 768px) {\n  .container {\n    width: 100%;\n  }\n}\n```",
    "output": "Makes the container responsive on screens smaller than 768px."
  },
  {
    "question": "How do you hide an element in CSS?",
    "answer": "Use the `display: none` property:\n\n```css\n.element {\n  display: none;\n}\n```",
    "output": "Hides the element completely."
  },
  {
    "question": "How do you align text to the center in CSS?",
    "answer": "Use the `text-align` property with the `center` value:\n\n```css\np {\n  text-align: center;\n}\n```",
    "output": "Aligns the text to the center."
  },
  {
    "question": "How do you create a full-screen background image in CSS?",
    "answer": "Use `background-size: cover`:\n\n```css\nbody {\n  background-image: url('background.jpg');\n  background-size: cover;\n  background-position: center;\n}\n```",
    "output": "Sets a full-screen background image."
  },
  {
    "question": "How do you create a border-radius for a button in CSS?",
    "answer": "Use the `border-radius` property:\n\n```css\nbutton {\n  border-radius: 12px;\n}\n```",
    "output": "Creates rounded corners for the button."
  },
  {
    "question": "How do you change the text color on hover in CSS?",
    "answer": "Use the `:hover` pseudo-class to change text color:\n\n```css\nbutton:hover {\n  color: red;\n}\n```",
    "output": "Changes the text color to red when hovering."
  },
  {
    "question": "How do you create a CSS grid layout?",
    "answer": "Use `display: grid` and define the grid properties:\n\n```css\n.container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n```",
    "output": "Creates a 3-column grid layout."
  }
  ,

  {
    "question": "How do you create a CSS flexbox with equal space between items?",
    "answer": "Use the `justify-content: space-between` property:\n\n```css\n.container {\n  display: flex;\n  justify-content: space-between;\n}\n```",
    "output": "Items are spaced evenly with equal space between them."
  },
  {
    "question": "How do you make an element invisible but still take up space?",
    "answer": "Use `visibility: hidden`:\n\n```css\n.element {\n  visibility: hidden;\n}\n```",
    "output": "Makes the element invisible but still takes up space in the layout."
  },
  {
    "question": "How do you make text italic in CSS?",
    "answer": "Use the `font-style` property:\n\n```css\np {\n  font-style: italic;\n}\n```",
    "output": "Makes the text italic."
  },
  {
    "question": "How do you make an element take up the full width of its parent?",
    "answer": "Use `width: 100%`:\n\n```css\n.element {\n  width: 100%;\n}\n```",
    "output": "Makes the element take up the full width of its parent container."
  },
  {
    "question": "How do you change the font size in CSS?",
    "answer": "Use the `font-size` property:\n\n```css\np {\n  font-size: 18px;\n}\n```",
    "output": "Changes the font size of the text to 18px."
  },
  {
    "question": "How do you create a border around an element in CSS?",
    "answer": "Use the `border` property:\n\n```css\ndiv {\n  border: 2px solid black;\n}\n```",
    "output": "Creates a 2px solid black border around the element."
  },
  {
    "question": "How do you create a CSS hover effect with a color change?",
    "answer": "Use the `:hover` pseudo-class:\n\n```css\nbutton:hover {\n  background-color: blue;\n}\n```",
    "output": "Changes the background color of the button to blue on hover."
  },
  {
    "question": "How do you create a drop shadow effect on an image?",
    "answer": "Use the `box-shadow` property:\n\n```css\nimg {\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);\n}\n```",
    "output": "Adds a shadow to the image."
  },
  {
    "question": "How do you make a CSS element appear fixed while scrolling?",
    "answer": "Use the `position: fixed` property:\n\n```css\n.element {\n  position: fixed;\n  top: 20px;\n  left: 20px;\n}\n```",
    "output": "Fixes the element at 20px from the top-left of the viewport."
  },
  {
    "question": "How do you remove bullets from a list in CSS?",
    "answer": "Use `list-style-type: none`:\n\n```css\nul {\n  list-style-type: none;\n}\n```",
    "output": "Removes the bullets from the list items."
  },
  {
    "question": "How do you apply CSS styles to the first child of an element?",
    "answer": "Use the `:first-child` pseudo-class:\n\n```css\nul li:first-child {\n  color: red;\n}\n```",
    "output": "Styles the first list item with a red color."
  },
  {
    "question": "How do you center text vertically and horizontally in CSS?",
    "answer": "Use Flexbox:\n\n```css\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n```",
    "output": "Centers the text both horizontally and vertically."
  },
  {
    "question": "How do you make an element transparent in CSS?",
    "answer": "Use `opacity` property:\n\n```css\n.element {\n  opacity: 0.5;\n}\n```",
    "output": "Makes the element 50% transparent."
  },
  {
    "question": "How do you add space between items in a flexbox layout?",
    "answer": "Use `gap` property:\n\n```css\n.container {\n  display: flex;\n  gap: 20px;\n}\n```",
    "output": "Adds a 20px space between flex items."
  },
  {
    "question": "How do you add an image as a background in CSS?",
    "answer": "Use the `background-image` property:\n\n```css\nbody {\n  background-image: url('background.jpg');\n}\n```",
    "output": "Adds an image as the background of the body."
  },
  {
    "question": "How do you create a CSS circle?",
    "answer": "Use `border-radius` with `50%`:\n\n```css\n.circle {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  background-color: red;\n}\n```",
    "output": "Creates a red circle."
  },
  {
    "question": "How do you make a button look flat in CSS?",
    "answer": "Use `border` and `background` properties:\n\n```css\nbutton {\n  background-color: transparent;\n  border: 1px solid black;\n  padding: 10px 20px;\n}\n```",
    "output": "Creates a flat, border-only button."
  },
  {
    "question": "How do you make a CSS button appear raised on hover?",
    "answer": "Use `box-shadow` and `:hover` pseudo-class:\n\n```css\nbutton {\n  transition: box-shadow 0.3s;\n}\nbutton:hover {\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);\n}\n```",
    "output": "Makes the button appear raised when hovered."
  },
  {
    "question": "How do you create a full-screen overlay in CSS?",
    "answer": "Use `position: fixed` and `top`, `left`, `right`, `bottom` properties:\n\n```css\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n```",
    "output": "Creates a full-screen overlay with semi-transparent background."
  },
  {
    "question": "How do you set a fixed width for an element in CSS?",
    "answer": "Use the `width` property:\n\n```css\n.element {\n  width: 300px;\n}\n```",
    "output": "Sets the element width to 300px."
  },
  {
    "question": "How do you align items to the end in a flexbox container?",
    "answer": "Use `justify-content: flex-end` property:\n\n```css\n.container {\n  display: flex;\n  justify-content: flex-end;\n}\n```",
    "output": "Aligns items to the end of the flexbox container."
  },
  {
    "question": "How do you add padding to an element in CSS?",
    "answer": "Use the `padding` property:\n\n```css\n.element {\n  padding: 20px;\n}\n```",
    "output": "Adds 20px padding to all sides of the element."
  },
  {
    "question": "How do you make text bold on hover in CSS?",
    "answer": "Use `:hover` and `font-weight` properties:\n\n```css\np:hover {\n  font-weight: bold;\n}\n```",
    "output": "Makes the text bold when hovering."
  },
  {
    "question": "How do you make an element with a fixed height and width responsive?",
    "answer": "Use percentage values for width and height:\n\n```css\n.element {\n  width: 100%;\n  height: 50%;\n}\n```",
    "output": "Makes the element responsive to the parent container's size."
  },
  {
    "question": "How do you create a rounded rectangle in CSS?",
    "answer": "Use `border-radius`:\n\n```css\n.element {\n  border-radius: 20px;\n}\n```",
    "output": "Creates a rounded rectangle with 20px radius."
  },
  {
    "question": "How do you hide an element from the layout in CSS?",
    "answer": "Use `display: none` property:\n\n```css\n.element {\n  display: none;\n}\n```",
    "output": "Completely removes the element from the layout."
  },
  {
    "question": "How do you change the cursor to a pointer on hover in CSS?",
    "answer": "Use `cursor: pointer` property:\n\n```css\nbutton:hover {\n  cursor: pointer;\n}\n```",
    "output": "Changes the cursor to a pointer when hovering over the button."
  },
  {
    "question": "How do you make a text box resizeable in CSS?",
    "answer": "Use `resize: both` property:\n\n```css\ntextarea {\n  resize: both;\n}\n```",
    "output": "Makes the text area resizable both horizontally and vertically."
  },
  {
    "question": "How do you create a CSS layout with multiple columns?",
    "answer": "Use `column-count` property:\n\n```css\n.container {\n  column-count: 3;\n}\n```",
    "output": "Creates a layout with 3 columns."
  },
  {
    "question": "How do you center a block element horizontally?",
    "answer": "Use `margin: auto`:\n\n```css\n.element {\n  width: 50%;\n  margin: auto;\n}\n```",
    "output": "Centers the block element horizontally."
  },
  {
    "question": "How do you add a shadow to text in CSS?",
    "answer": "Use `text-shadow` property:\n\n```css\np {\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);\n}\n```",
    "output": "Adds a shadow effect to the text."
  },
  {
    "question": "How do you make a CSS element draggable?",
    "answer": "Use `draggable` attribute in HTML and CSS:\n\n```css\n.element {\n  cursor: move;\n}\n```",
    "output": "Makes the element draggable."
  },
  {
    "question": "How do you change the background color of an element on hover?",
    "answer": "Use `:hover` pseudo-class:\n\n```css\nbutton:hover {\n  background-color: green;\n}\n```",
    "output": "Changes the background color of the button to green on hover."
  }
];

