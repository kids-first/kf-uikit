/* eslint-disable import/no-extraneous-dependencies  */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { range } from 'lodash';
import { number, radios, boolean } from '@storybook/addon-knobs';
import GridContainer from './GridContainer';

const stories = storiesOf('Layout', module);

stories.add(
  'GridContainer',
  () => {
    const fullWidth = boolean('fullWidth', false);
    const centered = boolean('centered', true);
    return (
      <section className="bg-grey p-12" style={{ width: 2000 }}>
        <GridContainer className="border bg-teal" {...{ fullWidth, centered }}>
          {range(1, 13).map(() => (
            <div className="cell-1 row-1 h-12 text-black text-center border bg-white">
              <p className="mt-0 pt-12 text-xs">60px</p>
            </div>
          ))}
          {range(1, 13).map(() => (
            <div className="cell-1 row-2 h-12 text-black text-center border bg-white">
              <p className="mt-0 pt-12 text-xs">60px</p>
            </div>
          ))}
        </GridContainer>
      </section>
    );
  },
  {
    info: {
      text: `
       ## The GridContainer creates the foundation of a fluidly responsive 960px wide 12 column grid system. 

       > It’s built with [css grid](https://css-tricks.com/snippets/css/complete-guide-grid/), the most powerful layout system available in CSS.

      The GridContainer is the layout wrapper upon which all application designs and layouts are contained establishing style rules for grid columns, cells, and rows. It allows designers to rapdily compose complex layouts using simple mathematical rules to determine the relationships within interfaces, often necessary to manage complex systems and information hierarchies.      

      ---

      #### Grid Element Sizes
      *_As the grid scales the cells and gutters decrease in width while maintaing their relative proportions._
      
       ~~~
       |   Element     |   MaxWidth   |   Height   | Total (N)
       | ------------- |------------- | ---------- | ---------
       |   .cell-(N)   |    60px      |    auto    |    12
       |   gutter      |    20px      |    20px    |    13 (vertical and horizontal)  
       |   .row-(N)    |    100%      |    auto    |    100 (more rows will be auto added if the .row- is not declared on .cell- elements)

       ~~~
       
      ---
      
      ##### ❗️IE support
      **The grid system is supported down to Internet Explorer 11 only!!**

      Since IE 11 does **NOT** support grid **gap** property we create a 24 column grid with alternating "gap" columns. For further info on css grid support in IE see [CSS Tricks: CSS Grid in IE](https://css-tricks.com/css-grid-in-ie-css-grid-and-the-new-autoprefixer/) and the styles in **src/components/Grid/Grid.css**

      ---
      `,
    },
  },
);

stories.add(
  'cells',
  () => {
    const cSpan = number(
      'span',
      1,
      { range: true, min: 1, max: 12, step: 1 },
      'cell-<span>',
    );

    return (
      <section>
        <GridContainer>
          {range(1, 13).map(i => (
            <div className={`cell-${i} row-${i} h-12 text-white text-center border bg-grey`}>
              <p className="mt-0 pt-12 text-xs">.cell-{i}</p>
            </div>
          ))}
          <div className={`cell-${cSpan} row-13 h-12 text-white text-center border bg-purple`}>
            <p className="mt-0 pt-12 text-xs">.cell-{cSpan}</p>
          </div>
        </GridContainer>
      </section>
    )
  },
  {
    info: {
      text: `
        ## Cells 
        Use the .cell-N class to set the width of individual cells. Multi-cell elements span across gutters, so .cell-2 spans the first cell first gap and second cell stopping at before second gap. To see it in action use the knob to adjust the purple cell.

        ~~~css
          .cell-(N){
            grid-column: span (N);
          }
        
        Example: .cell-2
          |--------|---|----------|   |----------|
          | cell 1 |gap|  cell 2  |gap|  cell 3  |
          |--------|---|----------|   |----------|
        ~~~
        ---
        #### 📱 Responsive Design
        The grid system is mobile-first and utilizes the [TailwindCSS responsive class system](https://tailwindcss.com/docs/responsive-design) to adjust cells at 
        specifc breakpoints.

        ~~~css
        .cell-(N)    = 0 to 576px 
        .sm:cell-(N) = 576px to 768px
        .md:cell-(N) = 768px to 992px
        .lg:cell-(N) = 992px to 1200px
        .xl:cell-(N) = 1200px and beyyyyonnddd
        
        ~~~
        **Example:**
        ~~~HTML
        <div class="cell-12 md:cell-6 lg:cell-4"></div>

        | prefix |  Device Example    |   Viewport Width     |   Cell Span  |
        |--------|--------------------|--------------------- |--------------|
        |  none  | mobile             |     0 to 576px       |       12     |
        |   md:  | tablet & desktop   |     768px to 992px   |       6      |      
        |   lg:  | desktop & monitor  |     992px and up     |       4      |      
        
        ~~~
        
        ---

          ##### 😰 GOTCHAS
         **Row Wrapping**

         If **.cell-** elements add up to more than **12** and NOT have **.row-** declared the excess elements will wrap inside the container creating a new row.

         ~~~
         WRAPS: 
         <section class="grid-container">
           <div class="cell-12" ></div>
           <div class="cell-3" ></div>
         </section>
          
         OVERLAPS: 
         <section class="grid-container">
           <div class="row-1 cell-12" ></div>
           <div class="row-1 cell-3" ></div>
         </section>
         ~~~
         ___
        ##### ❗️IE support
        In IE11 we create a 24 cell grid and all .cell- classes are adjusted to compensate for the offset.
      `,
    },
  },
);

stories.add(
  'cell offsets',
  () => {
    const startN = number(
      'cell-start-',
      1,
      { range: true, min: 1, max: 12, step: 1 },
      'cell-<start>',
    );
    const cStart = number(
      'start',
      1,
      { range: true, min: 1, max: 12, step: 1 },
      'cell-<start>-<span>',
    );
    const cSpan = number(
      'span',
      1,
      { range: true, min: 1, max: 12, step: 1 },
      'cell-<start>-<span>',
    );
    return (
      <section>
        <GridContainer>
          <div
            className={`cell-2 cell-start-${startN} row-1 h-12 text-white text-center border bg-purple`}
          >
            <p className="mt-0 pt-0">
              .cell-2 <br />
              .cell-start-
              {startN}
            </p>
          </div>
          {range(1, 13).map(i => (
            <div className="cell-1 row-2 h-12 text-white text-center border bg-grey">
              <p className="mt-0 pt-0">
                .cell-
                {i}
              </p>
            </div>
          ))}
        </GridContainer>
        <h2>Shorthand syntax .cell-Start-Span</h2>
        <GridContainer>
          <div
            className={`cell-${cStart}-${cSpan} row-1 h-12 text-white text-center border bg-purple`}
          >
            <p className="mt-0 pt-0">
              .cell-
              {cStart}-{cSpan}{' '}
            </p>
          </div>
          {range(1, 13).map(i => (
            <div className="cell-1 row-2 h-12 text-white text-center border bg-grey">
              <p className="mt-0 pt-0">
                .cell-
                {i}
              </p>
            </div>
          ))}
        </GridContainer>
      </section>
    );
  },
  {
    info: {
      text: `
        
       ## Cell offset/start

       ~~~css
       .cell-start-(N)

       Shorthand:  .cell-<start>-<span>
       ~~~

       This specifies what column a cell should start at. For example you can start a cell at column 6 (.cell-start-6) and have it span 6 columns (.cell-6) making it go from the middle to the right edge of the grid. 

      ---

      ##### 😰 GOTCHAS
       **Overlapping/overloading Cells**

       If  **.cell-start-** or **.cell-<start>-<span>** elements of **the same .row-(N)**. intersect they will overlap inside that row without wrapping. 
       ~~~
       OVERLAPS: 
       8 + 5 = 13 cells in same row
       <section class="grid-container">
         <div class="row-1 cell-1-8" ></div>
         <div class="row-1 cell-1-5" ></div>
       </section>
       ~~~



      `,
    },
  },
);

stories.add(
  'rows/order',
  () => {
    const rowN = number('row-', 1, { range: true, min: 1, max: 12, step: 1 }, 'row-N');

    return (
      <section>
        <GridContainer>
          <div className={`cell-7-6 row-${rowN} h-12 text-white text-center border bg-purple`}>
            <p className="mt-0 pt-12 text-xs">
              (0) .row-
              {rowN} .cell-7-6
            </p>
          </div>
          {range(1, 12).map((i, idx) => (
            <div className={`cell-6 row-${i + 1} h-12 text-white text-center border bg-grey`}>
              <p className="mt-0 pt-12 text-xs">
                ({idx + 1}
                ).row-
                {i + 1} .cell-
                {i}
              </p>
            </div>
          ))}
        </GridContainer>
      </section>
    );
  },
  {
    info: {
      text: `

      ## Rows and source ordering

      ~~~
      .row-(N)
      ~~~

      Rows have an implicit height and will take on the height of their contents unless styled otherwise. If **.cell-** elements do not explicity declare a row class, rows will be auto 
      created. 

      The row is expecially useful for accessiblity purposes as it allows you to maintain a semantically meaningful source order to your HTML documents while having granular control over the display order. To see this in action use the knobs to move the purple row and notice in the Story Source how the order of elements does not change.
      `,
    },
  },
);

stories.add('gutters', () => (
  <section>
    <GridContainer
      collapsed={radios(
        'collapse',
        { rows: 'rows', cells: 'cells', all: true, none: false },
        false,
      )}
    >
      {range(1, 13).map(i => (
        <div className={`cell-${i} row-${i} h-12 text-white text-center border bg-grey`}>
          <p className="mt-0 pt-0">
            .cell-
            {i}
          </p>
        </div>
      ))}

      {range(11, 0).map((i, idx) => (
        <div className={`cell-${i} row-${idx + 1} h-12 text-white text-center border bg-grey`}>
          <p className="mt-0 pt-0">
            .cell-
            {i}
          </p>
        </div>
      ))}
    </GridContainer>
  </section>
),{
  info: {
    text:`
     ## Collapsable gutters

     Our grid gaps or gutters are set to 20px both vertically and horizontally to maintain an elegant horizontal and veritcal rhythm to our layouts. However sometimes we may come across use cases where the gutters are not desireable so we can collapse them using the GridContainer **collapse** prop.
    `
  }
});

stories.add('nested Grids', () => {
  const collapsed = boolean('collapse gutters', false);
  return (
    <section>
      <GridContainer {...{ collapsed }}>
        <div className="cell-3 row-1 h-12 text-white text-center border bg-grey">
          <p className="mt-0 pt-0">.cell-3</p>
        </div>
        <div className="cell-9 row-1 h-12 text-white text-center border bg-grey">
          <p className="mt-0 pt-0">.cell-9</p>
        </div>
        <div className="cell-4 row-2 h-12 text-white text-center border bg-grey">
          <p className="mt-0 pt-0">.cell-4</p>
        </div>
        <div className="cell-4 row-2 h-12 text-white text-center border bg-grey">
          <p className="mt-0 pt-0">.cell-4</p>
        </div>
        <div className="cell-4 row-2 h-12 text-white text-center border bg-grey">
          <p className="mt-0 pt-0">.cell-4</p>
        </div>

        <div className="cell-12 row-3  text-white text-center border bg-grey">
          <p className="mt-0 pt-0">.cell-12</p>
          <GridContainer {...{ collapsed }}>
            {range(1, 10).map(i => (
              <div className={`cell-${i} row-${i} h-12 text-white text-center border bg-blue`}>
                <p className="mt-0 pt-0">
                  .cell-
                  {i}
                </p>
              </div>
            ))}
            <div className="cell-10 row-10  text-white text-center border bg-blue">
              <p className="mt-0 pt-0">.cell-10</p>
              <GridContainer {...{ collapsed }}>
                {range(1, 13).map(x => (
                  <div
                    className={`cell-${x} row-${x} h-12 text-white text-center border bg-purple`}
                  >
                    <p className="mt-0 pt-0">
                      .cell-
                      {x}
                    </p>
                  </div>
                ))}
                {range(11, 0).map((i, idx) => (
                  <div
                    className={`cell-${i} row-${idx +
                      1} h-12 text-white text-center border bg-purple`}
                  >
                    <p className="mt-0 pt-0">
                      .cell-
                      {i}
                    </p>
                  </div>
                ))}
              </GridContainer>
            </div>
            <div className="cell-11 row-11 h-12 text-white text-center border bg-blue">
              <p className="mt-0 pt-0">.cell-11</p>
            </div>
            <div className="cell-12 row-12 h-12 text-white text-center border bg-blue">
              <p className="mt-0 pt-0">.cell-12</p>
            </div>
          </GridContainer>
        </div>
        <div className="cell-3 row-4 h-12 text-white text-center border bg-grey">
          <p className="mt-0 pt-0">.cell-3</p>
        </div>
        <div className="cell-9 row-4 h-12 text-white text-center border bg-grey">
          <p className="mt-0 pt-0">.cell-9</p>
        </div>
        <div className="cell-4 row-5 h-12 text-white text-center border bg-grey">
          <p className="mt-0 pt-0">.cell-4</p>
        </div>
        <div className="cell-4 row-5 h-12 text-white text-center border bg-grey">
          <p className="mt-0 pt-0">.cell-4</p>
        </div>
        <div className="cell-4 row-5 h-12 text-white text-center border bg-grey">
          <p className="mt-0 pt-0">.cell-4</p>
        </div>
      </GridContainer>
    </section>
  );
}, {
  info: {
    text: `
      ## Grid Nesting

      To make our grid system even more powerful we can nest GridContianer(s) inside of our cells adding a great deal verstatiliy to our layouts. Nested grids have their outter margins collpased and take the full-width of their containing cells elements.
    `
  }
});
