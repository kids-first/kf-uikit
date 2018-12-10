import React from 'react';
import renderer from 'react-test-renderer';
import Stats from '../Stats';

[true, false].map((small) => {
  [true, false].map((transparent) => {
    [0,1,2,3].map((n) => {
      it(`${small ? 'small' : ''} ${transparent ? 'transparent' : ''} stats bar with ${n} metrics renders correctly`, () => {
          const tree = renderer.create(
                  <Stats
                    small={small}
                    transparent={transparent}
                    stats={Array(n).map((n, i) => ({
                      icon: 'Participant',
                      label: 'Participants',
                      metric: i,
                    }))}
                  />
                  ).toJSON();
            expect(tree).toMatchSnapshot();
      });
    });
  });
});
