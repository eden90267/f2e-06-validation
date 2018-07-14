import React from 'react';
import deepFreeze from 'deep-freeze';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

global.React = React;

global._data = deepFreeze([
  {

  }
]);