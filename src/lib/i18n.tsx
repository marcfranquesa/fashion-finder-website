'use client';

import { createIntl, IntlConfig } from '@formatjs/intl';
import { createContext, useContext } from 'react';

const intlContext = createContext(createIntl({ locale: 'en' }));

export function IntlProvider(props: IntlConfig & { children: React.ReactNode }) {
  return (
    <intlContext.Provider value={createIntl(props)}>
      {props.children}
    </intlContext.Provider>
  );
}

export function IntlMessage({ id }: { id: string }) {
  const intl = useContext(intlContext);
  return intl.formatMessage({ id });
}

export function useIntl() {
  return useContext(intlContext);
}