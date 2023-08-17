import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
${
  '' /* @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Montserrat:wght@400;500;700&display=swap'); */
}

:root {
  --clr-primary-1: hsl(224, 44%, 8%);
  --clr-primary-2: hsl(225, 46%, 17%);
  --clr-primary-3: hsl(224, 45%, 25%);
  --clr-primary-4: hsl(225, 46%, 33%);

  --clr-primary-5: hsl(225, 46%, 42%);
  --clr-primary-6: hsl(225, 36%, 48%);
  --clr-primary-7: hsl(224, 33%, 59%);
  --clr-primary-8: hsl(225, 32%, 71%);
  --clr-primary-9: hsl(226, 33%, 83%);
  --clr-primary-10: hsl(222, 33%, 94%);

  --clr-grey-1: hsl(0, 0%, 5%);
  --clr-grey-2: hsl(0, 0%, 11%);
  --clr-grey-3: hsl(0, 0%, 16%);
  --clr-grey-4: hsl(0, 0%, 21%);

  --clr-grey-5: hsl(0, 0%, 27%);
  --clr-grey-6: hsl(0, 0%, 34%);
  --clr-grey-7: hsl(0, 0%, 49%);
  --clr-grey-8: hsl(0, 0%, 64%);
  --clr-grey-9: hsl(0, 0%, 78%);
  --clr-grey-10: hsl(0, 0%, 93%);

  --clr-white: hsl(0, 0%, 100%);
  --clr-black: hsl(0, 0%, 13%);
  --transition: all 0.3s linear;
  --spacing: 0.1rem;
  --radius: 0.25rem;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  --max-width: 1170px;
  --font-family-body: 'Montserrat', sans-serif;
  --font-family-heading: 'Merriweather', serif;
}
/*
=============== 
Global Styles
===============
*/

.dark-mode {
  --clr-bcg: #1d1d1d;
  --clr-bcg-2: var(--clr-grey-3);
  /* --clr-font: hsl(0, 0%, 82%); */
  --clr-font: rgb(183, 183, 183);
  --clr-primary: var(--clr-primary-7);
  --clr-hover: var(--clr-primary-5);
}
.light-mode {
  --clr-bcg: var(--clr-white);
  --clr-bcg-2: var(--clr-grey-10);
  --clr-font: var(--clr-grey-5);
  --clr-primary: var(--clr-primary-5);
  --clr-hover: var(--clr-primary-7);
}

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: var(--font-family-body);
  background: var(--clr-white);
  color: var(--clr-grey-1);
  line-height: 1.5;
  font-size: 0.875rem;
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}
img {
  width: 100%;
  display: block;
}

h1,
h2,
h3,
h4 {
  letter-spacing: var(--spacing);
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
  font-weight: 400;
  font-family: var(--font-family-heading);
}
h1 {
  font-size: 2.5rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.5rem;
}
h4 {
  font-size: 1rem;
}
p {
  margin-bottom: 1.25rem;
  color: var(--clr-grey-3);
}
@media screen and (min-width: 800px) {
  h1 {
    font-size: 3.5rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1rem;
  }
  body {
    font-size: 1rem;
  }
  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
}
/*  global classes */

.btn {
  text-transform: uppercase;
  background: var(--clr-primary-7);
  color: var(--clr-white);
  padding: 0.375rem 0.75rem;
  letter-spacing: var(--spacing);
  display: inline-block;
  font-weight: 700;
  transition: var(--transition);
  font-size: 0.875rem;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);
}
.btn:hover {
  background: var(--clr-primary-5);
  color: var(--clr-white);
}

/* section */
.section {
  padding: 5rem 0;
  position: relative;
}

.section-center {
  width: 90vw;
  margin: 0 auto;
  max-width: var(--max-width);
}
@media screen and (min-width: 992px) {
  .section-center {
    width: 95vw;
  }
}

.survey-icon:hover {
  color: var(--clr-primary-5);
}

.event-link {
  display: contents !important;
}
.event-link a {
  display: contents;
}

.underline {
  width: 5rem;
  height: 0.25rem;
  margin-bottom: 1.25rem;
  background: var(--clr-primary-5);
  margin-left: auto;
  margin-right: auto;
}

@media screen and (min-width: 1200px) {
  .footer-container {
    padding-left: 100px;
    padding-right: 100px;
  }
}

@media screen and (min-width: 960px) {
  .footer-container {
    padding-left: 50px;
    padding-right: 50px;
  }
}

`

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <GlobalStyles />
      {element}
    </>
  )
}
