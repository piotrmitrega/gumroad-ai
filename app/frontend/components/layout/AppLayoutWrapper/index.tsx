import React, { HTMLAttributes } from "react";
import classnames from 'classnames';
import styles from './styles.module.scss';

export type AppLayoutWrapperProps = HTMLAttributes<HTMLElement>;

export const AppLayoutWrapper = ({className, ...baseProps}: AppLayoutWrapperProps): JSX.Element => {
  return (
    <div {...baseProps} className={classnames(styles.appLayout, className)} />
  )
};
