import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import Products from '../../components/Products/Products';

describe('Products component', () => {
  it("Should render an h2 element with the page's title", () => {
    expect(
      mount(
        <Products />
      ).find('h2').contains('Products')
    ).toEqual( true );
  });
});