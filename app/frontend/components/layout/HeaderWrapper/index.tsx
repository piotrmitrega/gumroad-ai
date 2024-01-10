import React, { HTMLAttributes } from "react";
import classnames from 'classnames';
import styles from './styles.module.scss';

export type HeaderWrapperProps = HTMLAttributes<HTMLElement>;

export const HeaderWrapper = ({className, ...baseProps}: HeaderWrapperProps): JSX.Element => {
  return (
    <header {...baseProps} className={classnames(styles.headerWrapper, className)} />
  )
};
