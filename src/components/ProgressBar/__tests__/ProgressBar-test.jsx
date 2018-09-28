import React from 'react';
import renderer from 'react-test-renderer';
import ProgressBar from '../ProgressBar';

['primary', 'secondary', 'tertiary'].map((c) => {
  [0, 10, 10000].map((current) => {
    [10, 100, 100000].map((total) => {
      it(`${current}/${total} ${c} progress bar renders correctly`, () => {
          const tree = renderer.create(
                  <ProgressBar
                    color={c}
                    current={current}
                    total={total}
                  />
                  ).toJSON();
          expect(tree).toMatchSnapshot();
      });
    });
  });
});
