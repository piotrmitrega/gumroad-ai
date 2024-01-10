import React, { HTMLAttributes } from "react";
import classnames from 'classnames'
import styles from './styles.module.scss';

export type ThemeProviderProps = HTMLAttributes<HTMLDivElement>;

export const ThemeProvider = ({className, ...baseProps}: ThemeProviderProps): JSX.Element => {
  return (
    <div className={classnames(styles.themeProvider, className)} {...baseProps} />
  );
};
