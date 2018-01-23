import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import router from '../../utils/router';

describe("Router Tests", () => {
  it("Should render the Products component at path /", () => {
    expect(
      mount(
        <MemoryRouter initialEntries={[ '/' ]}>
          { router }
        </MemoryRouter>
      ).find('.Products__parent').length
    ).toBe( 1 );
  });

  it("Should render the Cart component at path /cart", () => {
    expect(
      mount(
        <MemoryRouter initialEntries={[ '/cart' ]}>
          { router }
        </MemoryRouter>
      ).find('.Cart__parent').length
    ).toBe( 1 );
  });

  it('Should render the AboutUs component at path /about-us', () => {
    expect(
      mount(
        <MemoryRouter initialEntries={[ '/about-us' ]}>
          { router }
        </MemoryRouter>
      ).find('.AboutUs__parent').length
    ).toBe( 1 );
  });
});