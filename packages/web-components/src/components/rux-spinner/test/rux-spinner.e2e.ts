import { newE2EPage } from '@stencil/core/testing';

describe('rux-spinner', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rux-spinner></rux-spinner>');

    const element = await page.find('rux-spinner');
    expect(element).toHaveClass('hydrated');
  });
});
