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
        className={`chip cursor-pointer inline-flex bg-white text-[#272822] text-[0.8rem] h-[25px] px-3 py-1 rounded-full border border-neutral-200 hover:border-neutral-400 transition-all duration-300 items-center justify-center font-mono`}
      >
        <span>{label}</span>
      </div>
    );
};

export default Chip;