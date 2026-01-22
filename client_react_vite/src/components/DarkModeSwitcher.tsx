import { MdDarkMode, MdLightMode } from 'react-icons/md';

type DarkModeSwitcherProps = {
  mode: 'light' | 'dark';
  onToggle: () => void;
  className?: string;
};

export default function DarkModeSwitcher({
  mode,
  onToggle,
  className = '',
}: DarkModeSwitcherProps) {
  const isDark = mode === 'dark';

  return (
    <button
      type='button'
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={[
        'inline-flex items-center justify-center rounded-md p-2',
        'text-slate-700 hover:bg-slate-100',
        'dark:text-slate-200 dark:hover:bg-slate-800',
        'transition-colors duration-200',
        className,
      ].join(' ')}
    >
      {isDark ? (
        /* Sun icon → light mode */
        <MdLightMode />
      ) : (
        /* Moon icon → dark mode */
        <MdDarkMode />
      )}
    </button>
  );
}
