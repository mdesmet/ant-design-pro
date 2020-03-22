import React from 'react';
import { render } from 'enzyme';
import * as renderer from 'react-test-renderer';
import SelectLang from '@/components/SelectLang';

describe('SelectLang', () => {
  it('renders correctly', () => {
    const wrapper = render(<SelectLang />);
    expect(wrapper).toMatchSnapshot();
  });

  it('mount correctly', () => {
    expect(() => renderer.create(<SelectLang />)).not.toThrow();
  });
});
