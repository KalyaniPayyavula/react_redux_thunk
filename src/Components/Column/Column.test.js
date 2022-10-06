import { screen, render } from '@testing-library/react';
import { Column } from './Column';

test('column component', () => {
  render(
    <Column dataTestId='test-column'>
      <p>hi</p>
      <p>hello</p>
    </Column>
  );
  expect(screen.getByTestId('test-column').textContent).toBe('hihello');
});
