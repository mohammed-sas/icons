import { newE2EPage } from '@stencil/core/testing';

describe('f-icons', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<f-icons></f-icons>');

    const element = await page.find('f-icons');
    expect(element).toHaveClass('hydrated');
  });
});
