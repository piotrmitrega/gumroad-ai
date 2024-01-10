import React, { HTMLAttributes } from "react";
import classnames from 'classnames';
import styles from './styles.module.scss';

export type PageWrapperProps = HTMLAttributes<HTMLElement>;

export const PageWrapper = ({className, ...baseProps}: PageWrapperProps): JSX.Element => {
  return (
    <main {...baseProps} className={classnames(styles.pageWrapper, className)} />
  )
};
