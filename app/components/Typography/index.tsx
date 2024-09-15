import { ReactNode } from 'react';
import cs from 'classnames';

const H1 = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <h1
    className={cs(
      'text-textDefault text-4xl font-proxima leading-none font-bold',
      // @ts-ignore
      { [className]: !!className }
    )}
  >
    {children}
  </h1>
);

const H2 = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <h2
    className={cs(
      'text-textDefault text-2xl font-proxima leading-8 font-bold',
      // @ts-ignore
      { [className]: !!className }
    )}
  >
    {children}
  </h2>
);

const H3 = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <h3
    className={cs(
      'text-textDefault text-lg font-proxima leading-5 font-normal',
      // @ts-ignore
      { [className]: !!className }
    )}
  >
    {children}
  </h3>
);

const H4 = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <p
    className={cs('text-textDefault text-sm font-proxima font-semibold', {
      // @ts-ignore
      [className]: !!className,
    })}
  >
    {children}
  </p>
);

const Paragraph = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <p
    className={cs('text-textDefault text-sm font-proxima font-normal', {
      // @ts-ignore
      [className]: !!className,
    })}
  >
    {children}
  </p>
);

export const Typography = () => {};
Typography.h1 = H1;
Typography.h2 = H2;
Typography.h3 = H3;
Typography.h4 = H4;
Typography.Paragraph = Paragraph;
