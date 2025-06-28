import type { HTMLAttributes, PropsWithChildren } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement>, PropsWithChildren {
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link';
}

export default function Button(props: ButtonProps) {
  const { children } = props;
  return (
    <button className="font-white relative flex h-[44px] cursor-pointer items-center justify-center rounded-md bg-bahama-blue px-6 py-2.5 text-nowrap transition-colors duration-300 before:absolute before:-bottom-1 before:left-0 before:-z-10 before:h-full before:w-full before:content-baseline before:rounded-[8px] before:bg-bahama-blue-dark before:transition-all before:duration-300 hover:bg-bahama-blue-dark hover:before:-translate-y-1 hover:before:rounded-md">
      {children}
    </button>
  );
}
