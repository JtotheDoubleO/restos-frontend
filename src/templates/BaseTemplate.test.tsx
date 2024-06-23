import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';

import messages from '@/locales/en.json';

import { BaseTemplate } from './BaseTemplate';

describe('Base template', () => {
  describe('Render method', () => {
    it('should have 5 tab bar items', () => {
      render(
        <NextIntlClientProvider locale="en" messages={messages}>
          <BaseTemplate>{null}</BaseTemplate>
        </NextIntlClientProvider>,
      );

      const tabBarItemList = screen.getAllByRole('link');

      expect(tabBarItemList).toHaveLength(5);
    });
  });
});
