import React from 'react';
import renderer from 'react-test-renderer';
import GridContainer from '../GridContainer'

[true, 'rows','cells'].map((collapsed)=>{
  [true, false].map((centered)=>{
    [true, false].map((fullWidth)=>{
    

      it(`GridContainer collapsed:${collapsed} ${centered? 'centered': ''} ${fullWidth? 'fullWidth': ''} renders correctly`,()=>{
        const tree = renderer.create(
          <GridContainer {...{collapsed, centered, fullWidth}}>
            <div>Grid Container content</div>
          </GridContainer>
         )
        expect(tree).toMatchSnapshot();
      })


    })
  })
})