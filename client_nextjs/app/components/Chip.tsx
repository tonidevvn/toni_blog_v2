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
        className={`chip chip-${variant} chip-${color} cursor-pointer inline-flex bg-neutral-800 text-neutral-300 text-xs px-3 py-1 rounded-full border border-neutral-700 hover:border-neutral-400 transition-all duration-300 items-center justify-center`}
      >
        <span>{label}</span>
      </div>
    );
};

export default Chip;