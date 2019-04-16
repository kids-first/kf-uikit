import { toPairs } from 'lodash';
import React from 'react';
import { storiesOf } from '@storybook/react';
import * as tailwind from '../../tailwind.js';
import bgsIcon from './assets/bgs_icon.png';
const stories = storiesOf('Spacing', module);

stories.add(
  'spacing values',
  () => (
    <section className="container relative w-full mx-32 flex flex-wrap">
      <header className="w-2/3 inline-block float-left">
        <h2 className="pb-8">
          All Spacing (margin, padding) css classes utilize the{' '}
          <a taget="_blank" href="https://tailwindcss.com/docs/spacing/#app">
            Tailwind spacing convention
          </a>{' '}
          <code className="bg-lightGrey text-sm p-4">{`.{spacingClass}{side?}-{size(N)}`}</code>{' '}
          with the listed N space values.
        </h2>
        <p className="max-w-full pb-8">
          Consistent spacing creates visual balance and mathematical harmony that makes the user
          interface (UI) easier to scan. All spacing for components and typography is done in
          increments of 4 pixels using rem values,{' '}
          <code className="bg-lightGrey text-sm p-4">1rem = 14px to 16px</code>{' '} 
          on the same fluid scale used for typography. This 4px value forms the basic unit of measurement for spacing.
          Therefore, 4 is the magic number in all of our rules. It drives how column layouts are
          determined, elements are designed, how components interact with each other. The success of
          a digital design system lies in the intelligence of its math.
        </p>
        
      </header>

      <div className="w-2/3 ml-32">
        <h4 className="text-center pb-8">Spacing Class Values</h4>
        <table className="table-fixed m-auto text-center bg-lightGrey" style={{ width: 400 }}>
          <thead>
            <th>value (N)</th>
            <th>rem</th>
            <th>px</th>
          </thead>
          <tbody>
            {toPairs(tailwind.margin).map((spacing) => (
              <tr className="border-b">
                <td>{spacing[0]}</td> 
                <td className="text-xs">{spacing[1].replace('rem', '')}</td>
                <td> 
                  {+spacing[1].replace('rem', '') * 16} 
                 </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="relative overflow-hidden w-full  mb-16" style={{ height: 375 }}>
        <h2 className="mt-32 pb-16">Examples</h2>
        <p className="italic font-bold">
          To see the grid in action change the background by using the <img src={bgsIcon} style={{width: 30, marginBottom: -15}} alt=""/> icon in the top bar 
        </p>
        <h3 className="z-20">
          <a target="_blank" href="https://tailwindcss.com/docs/spacing/#app">
            padding values (.p-N)
          </a>
          <br />
          <small className="text-grey ">4px x 4px cells</small> 
            &nbsp;
          <small>
            <span className="inline-block bg-red opacity-75" style={{ width: 8, height: 8 }} />
            padding box &nbsp;
            <span
              className="inline-block bg-lightBlue opacity-75"
              style={{ width: 8, height: 8 }}
            />
            inner box content
          </small>
        </h3>

        <section className="w-full relative flex flex-wrap" style={{ height: 275 }}>
          {[4, 8, 12, 16, 20, 32, 40, 60].map((i) => (
            <div
              className={`flex items-center content-center text-center relative z-10 mr-${i} p-${i} ${
                i === 4 ? 'ml-12' : null
              } my-12 border border-lightBlue bg-red opacity-75`}
              style={{ width: i * 3, height: i * 3 }}
            >
              <span className="w-full h-full bg-lightBlue" />
              <span style={{ fontSize: 12, bottom: -20 }} className="absolute pin-l pin-b" >
                {i}
              </span>
            </div>
          ))}
        </section>
      </div>

      <div className="relative overflow-hidden w-1/3 mb-16 text-sm" style={{ height: 175 }}>
        <h3 className="z-20">
          
          <a target="_blank" href="https://tailwindcss.com/docs/spacing/#app">
            margin right values (.mr-N)
          </a>
          <br /> 
          <small className="text-grey">4px x 4px cells</small>
        </h3>

        <section className="w-full relative flex flex-wrap">
          {[4, 8, 12, 16, 20, 32, 40, 60].map((i) => (
            <div
              className={`flex items-center content-center text-center relative z-10 mr-${i} ${
                i === 4 ? 'ml-12' : null
              } my-12 border border-lightBlue`}
              style={{ width: i, height: i }}
            >
              <span style={{ fontSize: 12, bottom: -20 }} className="absolute pin-l pin-b">
                {i}
              </span>
            </div>
          ))}
        </section>
      </div>

      <div className="relative overflow-hidden w-1/3 pl-40 mb-16" style={{ height: 175 }}>
        <h3 className="z-20">
          Large Button 
          <br /> 
          <small className="text-grey">4px x 4px cells</small>
        </h3>

        <section className="w-full relative flex flex-wrap">
          <button className="Button Button--large Button--secondary m-20">
            Large Button HERE
          </button>
        </section>
      </div>
    </section>
  ),
  {
    info: { source: false },
  },
);
