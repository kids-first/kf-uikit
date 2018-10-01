import React from 'react';
import renderer from 'react-test-renderer';
import Card from '../Card';

['Testing', <em>Test</em>].map((title) => {
  it(`${title} Card renders correctly`, () => {
      const tree = renderer.create(
              <Card title={title}>
                Hello
              </Card>
              ).toJSON();
        expect(tree).toMatchSnapshot();
  });
});
