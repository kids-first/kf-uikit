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
        </GridContainer>
      </section>
    );
  },
  {
    info: {
      text: ``,
    },
  },
);

stories.add(
  'cells',
  () => (
    <section>
      <GridContainer>
        {range(1, 13).map(i => (
          <div className={`cell-${i} row-${i} h-12 text-white text-center border bg-grey`}>
            <p className="mt-0 pt-12 text-xs">
              .row-
              {i} .cell-
              {i}
            </p>
          </div>
        ))}
      </GridContainer>
    </section>
  ),
  {
    info: {
      text: ``,
    },
  },
);

stories.add(
  'cell offsets',
  () => {
    const startN = number(
      '.cell-start-',
      1,
      { range: true, min: 1, max: 12, step: 1 },
      '.cell-<start>',
    );
    const cStart = number(
      'start',
      1,
      { range: true, min: 1, max: 12, step: 1 },
      '.cell-<start>-<span>',
    );
    const cSpan = number(
      'span',
      1,
      { range: true, min: 1, max: 12, step: 1 },
      '.cell-<start>-<span>',
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
      text: ``,
    },
  },
);

stories.add(
  'rows/order',
  () => {
    const rowN = number('.row-', 1, { range: true, min: 1, max: 12, step: 1 }, '.row-N');

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
      text: ``,
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
));

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
});
