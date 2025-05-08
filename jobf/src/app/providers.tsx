// app/providers.tsx
'use client';

import { ReactNode } from 'react';
import { MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme({
  primaryColor: 'blue',
});

export function Providers({ children }: { children: ReactNode }) {
  return (
    <MantineProvider theme={theme}>
      {children}
    </MantineProvider>
  );
}
