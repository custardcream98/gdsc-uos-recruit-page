import React from 'react';
import { Theme, ThemeProvider } from '@emotion/react';
import {
  createGenericContext,
  createGenericUseContext,
  darkTheme,
  theme,
} from 'gdsc-uos-design-system';

import { useLocalStorage } from '@/hooks';

type ThemeMode = 'light' | 'dark';

interface ThemeEvent {
  theme: ThemeMode;
  toggleTheme: () => void;
}

const MEDIA = '(prefers-color-scheme: dark)';
const Context = createGenericContext<ThemeEvent>();
export const useThemeContext = createGenericUseContext<ThemeEvent>(Context);

interface Props {
  theme: Theme;
  storageKey?: string;
  defaultTheme?: ThemeMode | undefined;
}

function CustomThemeProvider({
  storageKey = 'theme',
  defaultTheme = undefined,
  children,
}: React.PropsWithChildren<Props>) {
  const [isMounted, setIsMounted] = React.useState<boolean>(false);
  const [userTheme, setUserTheme] = useLocalStorage<ThemeMode | undefined>(
    storageKey,
    defaultTheme
  );

  const toggleTheme = React.useCallback(() => {
    const nextUserTheme = userTheme === 'light' ? 'dark' : 'light';
    setUserTheme(nextUserTheme);
  }, [userTheme]);

  React.useEffect(() => {
    setIsMounted(true);
    if (typeof window !== 'undefined' && window.matchMedia(MEDIA).matches && !userTheme) {
      setUserTheme('dark');
    }
  }, []);

  if (!isMounted || !userTheme) {
    return null;
  }

  return (
    <Context.Provider value={{ theme: userTheme, toggleTheme }}>
      <ThemeProvider theme={{ ...theme, colors: userTheme === 'dark' ? darkTheme : theme.colors }}>
        {children}
      </ThemeProvider>
    </Context.Provider>
  );
}

export default CustomThemeProvider;
