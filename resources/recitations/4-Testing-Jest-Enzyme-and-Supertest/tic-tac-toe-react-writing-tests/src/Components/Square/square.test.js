import React from 'react'
import Square from './square'
import {shallow} from 'enzyme'

it('renders without crashing', () => {
  shallow(<Square/>);
});
