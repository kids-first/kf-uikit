/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, number } from '@storybook/addon-knobs';
import { generateVariantsFor } from '../../utils/propsVariants';
import InputText from './InputTextarea';

const stories = storiesOf('InputTextarea', module);
stories.add(
  'InputTextarea',
  () => {
    const variants = generateVariantsFor({
      fieldLabel: ['', 'label'],
      fieldName: ['', 'name'],
      placeholder: [null, '', 'placeholder'],
      required: [null, true, false],
      error: [null, '', 'error'],
      maxLength: [null, 10],
      inputCount: [null, true, false],
    });
    return (
      <section>
        <InputText
          className="hide-in-tests"
          fieldLabel={text('Field Label', 'Input Text')}
          fieldName={text('Field Name', 'field_name')}
          placeholder={text('Placeholder', 'Placeholder')}
          maxLength={number('Max Length', 100)}
          required={boolean('Required', false)}
          inputCount={boolean('If Count', false)}
          error={text('Error', null)}
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
        The input textarea field
        `,
    },
  },
);
