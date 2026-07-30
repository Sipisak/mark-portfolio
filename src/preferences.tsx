import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { translations, type Language } from "./translations";

export type ThemeMode = "dark" | "light";

const LANGUAGE_STORAGE_KEY = "portfolio-language";
const THEME_STORAGE_KEY = "portfolio-theme";

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "en";

  const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (saved === "en" || saved === "cs") return saved;

  return window.navigator.language.toLowerCase().startsWith("cs") ? "cs" : "en";
}

function getInitialTheme(): ThemeMode {
  if (typeof window === "undefined") return "dark";

  const saved = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (saved === "dark" || saved === "light") return saved;

  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

type PreferencesContextValue = {
  language: Language;
  theme: ThemeMode;
  t: (typeof translations)[Language];
  toggleLanguage: () => void;
  toggleTheme: () => void;
};

const PreferencesContext = createContext<PreferencesContextValue | null>(null);

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = language === "cs" ? "cs" : "en";
    root.dataset.theme = theme;
    root.style.colorScheme = theme;

    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);

    const copy = translations[language].meta;
    document.title = copy.title;

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    description?.setAttribute("content", copy.description);
  }, [language, theme]);

  const value = useMemo<PreferencesContextValue>(
    () => ({
      language,
      theme,
      t: translations[language],
      toggleLanguage: () => setLanguage((current) => (current === "en" ? "cs" : "en")),
      toggleTheme: () => setTheme((current) => (current === "dark" ? "light" : "dark")),
    }),
    [language, theme]
  );

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}

export function usePreferences() {
  const context = useContext(PreferencesContext);
  if (!context) {
    throw new Error("usePreferences must be used inside PreferencesProvider");
  }
  return context;
}
