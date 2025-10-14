import { useCallback, useState, useEffect } from "react";

interface UseDarkModeReturn {
    isDark: boolean;
    toggle: () => void;
    enable: () => void;
    disable: () => void;
    setTheme: (theme: 'light' | 'dark' | 'system') => void;
}

function useDarkMode(defaultTheme?: 'light' | 'dark' | 'system'): UseDarkModeReturn {
    const getSystemTheme = useCallback((): boolean => {
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }, []);
    const getInitialTheme = useCallback((): boolean => {
        const stored = localStorage.getItem('cs-theme');
        if (stored === 'light') return false;
        if (stored === 'dark') return true;
        if (stored === 'system' || !stored) {
            return defaultTheme === 'dark' ? true : defaultTheme === 'light' ? false : getSystemTheme();
        }
        return getSystemTheme();
    }, [defaultTheme, getSystemTheme]);

    const [isDark, setIsDark] = useState<boolean>(getInitialTheme);

    //DOM application
    const applyTheme = useCallback((dark: boolean) => {
        if(dark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    //Listen State Change and apply theme