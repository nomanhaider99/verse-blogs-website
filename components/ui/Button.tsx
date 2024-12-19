import React from 'react';
import { IconType } from 'react-icons';

interface ButtonProps {
    text: string;
    icon?: IconType;
    outline?: boolean;
    onClick?: () => void;
    className?: string;
    type?: 'submit';
    isStatic?: boolean,
}

const Button: React.FC<ButtonProps> = ({
    icon: Icon,
    text,
    outline,
    onClick,
    className,
    type,
    isStatic
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`
                flex items-center justify-center gap-2 rounded-full py-2.5 px-5 md:text-sm text-xs font-medium relative overflow-hidden w-full ${className}
                ${
                    outline
                        ? `border-[1px] border-darkblue text-darkblue ${isStatic ? 'bg-white' : 'bg-transparent'} transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-bottom-left before:scale-y-0 before:bg-darkblue before:transition-transform before:duration-300 before:content-[""] ${isStatic ? 'hover:text-darkblue' : 'hover:text-white'} before:hover:scale-y-100`
                        : 'bg-darkblue text-white text-sm'
                }
            `}
        >
            {text}
            {Icon && <Icon size={15} color={outline ? '#2f29c4' : '#ffffff'} />}
        </button>
    );
};

export default Button;
