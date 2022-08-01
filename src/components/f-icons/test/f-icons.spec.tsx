import { newSpecPage } from '@stencil/core/testing';
import { FIcons } from '../f-icons';

describe('f-icons', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FIcons],
      html: `<f-icons></f-icons>`,
    });
    expect(page.root).toEqualHtml(`
      <f-icons>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </f-icons>
    `);
  });
});
