import React from 'react';

interface ChipProps {
    label: string;
    variant?: 'default' | 'outlined';
    color?: 'primary' | 'secondary' | 'error';
}

const Chip: React.FC<ChipProps> = ({
    label,
    variant = 'default',
    color = 'primary',
}) => {
    return (
      <div
        className='chip cursor-pointer inline-flex bg-sky-500/10 text-sky-600 dark:text-sky-400 text-[0.8rem] h-[28px] px-4 py-1 rounded-full border border-sky-500/30 hover:border-sky-400 hover:bg-sky-500/20 transition-all duration-300 items-center justify-center font-mono backdrop-blur-sm'
      >
        <span>{label}</span>
      </div>
    );
};

export default Chip;
