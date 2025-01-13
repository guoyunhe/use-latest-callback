import cn from 'classnames';
import { CSSProperties, ReactNode } from 'react';
import './index.css';

export interface UseLatestCallbackProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function UseLatestCallback({ children, className, style }: UseLatestCallbackProps) {
  return <UseLatestCallback className={cn('use-latest-callback', className)} style={style}>{children}</UseLatestCallback>;
}
