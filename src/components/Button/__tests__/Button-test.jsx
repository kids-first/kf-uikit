import React from 'react';
import renderer from 'react-test-renderer';
import {generateVariantsFor}   from '../../../utils/propsVariants';
import {toPairs} from 'lodash';
import Button from '../Button';

const variants = generateVariantsFor({'size':['default', 'large'], 'color':  ['default', 'primary', 'secondary'], 'disabled': [true,false], 'type':['button', 'submit']});

variants.map(props => {
  
  it(`Button ${toPairs(props).map(prop => `${prop[0]}:${prop[1]}, `)} renders correctly`, () => {
            const tree = renderer.create(
                    <Button {...props}>
                      Hello
                    </Button>
                    ).toJSON();
              expect(tree).toMatchSnapshot();
        });
})

        