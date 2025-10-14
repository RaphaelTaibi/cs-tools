import { useCallback, useState, useEffect } from "react";

export interface UseDarkModeReturn {
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
    useEffect(() => {
        applyTheme(isDark);
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => {
            const stored = localStorage.getItem('cs-theme');
            if(stored === 'system' || stored === null) {
                const systemDark = getSystemTheme();
                setIsDark(systemDark);
                applyTheme(systemDark);
            }
        };
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [isDark, applyTheme, getSystemTheme]);

    //Check 
    const toggle = useCallback(() => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        localStorage.setItem('cs-theme', newTheme ? 'dark' : 'light');
        applyTheme(newTheme);

    }, [isDark, applyTheme]);
    const enable = useCallback(() => {
        setIsDark(true);
        localStorage.setItem('cs-theme', 'dark');
        applyTheme(true);
    }, [applyTheme]);
    const disable = useCallback(() => {
        setIsDark(false);
        localStorage.setItem('cs-theme', 'light');
        applyTheme(false);
    }, [applyTheme]);
    const setTheme = useCallback((theme: 'light' | 'dark' | 'system') => {
        localStorage.setItem('cs-theme', theme);
        if (theme === 'light') {
            setIsDark(false);
            applyTheme(false);
        } else if (theme === 'dark') {
            setIsDark(true);
            applyTheme(true);
        } else {
            const systemDark = getSystemTheme();
            setIsDark(systemDark);
            applyTheme(systemDark);
        }
    }, [applyTheme, getSystemTheme]);

    return { isDark, toggle, enable, disable, setTheme };
}

    export default useDarkMode;