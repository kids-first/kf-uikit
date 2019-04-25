/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, select } from '@storybook/addon-knobs';
import { generateVariantsFor } from '../../utils/propsVariants';
import InputText from './InputText';

const stories = storiesOf('InputText', module);
const inputType = [
  'date',
  'datetime-local',
  'month',
  'number',
  'password',
  'search',
  'text',
  'time',
  'week',
];
stories.add(
  'InputText',
  () => {
    const variants = generateVariantsFor({
      fieldLabel: ['', 'label'],
      fieldName: ['', 'name'],
      type: [null, ...inputType],
      placeholder: [null, '', 'placeholder'],
      required: [null, true, false],
      disabled: [null, true, false],
      error: [null, '', 'error'],
      prefix: [null, '', 'prefix'],
      suffix: [null, '', 'suffix'],
    });
    return (
      <section>
        <InputText
          className="hide-in-tests"
          fieldLabel={text('Field Label', 'Input Text')}
          fieldName={text('Field Name', 'field_name')}
          type={select('Field Type', inputType, 'text')}
          placeholder={text('Placeholder', 'Placeholder')}
          required={boolean('Required', false)}
          disabled={boolean('Disabled', false)}
          error={text('Error', null)}
          prefix={text('Prefix', null)}
          suffix={text('Suffix', null)}
        />
        {process.env.STORYBOOK_PERCY_ENV ? (
          <div className="show-in-tests">
            {variants.map(props => (
              <InputText className="m-20" {...props} />
            ))}
          </div>
        ) : null}
      </section>
    );
  },
  {
    info: {
      text: `
        The input field - one line input box with different input types.
        If want label above the input box, pass "display: table-caption;" to
        class "InputLabel".
        `,
    },
  },
);
