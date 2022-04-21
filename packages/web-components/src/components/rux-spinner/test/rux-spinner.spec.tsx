import { newSpecPage } from '@stencil/core/testing';
import { RuxSpinner } from '../rux-spinner';

describe('rux-spinner', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RuxSpinner],
      html: `<rux-spinner></rux-spinner>`,
    });
    expect(page.root).toEqualHtml(`
      <rux-spinner>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rux-spinner>
    `);
  });
});
