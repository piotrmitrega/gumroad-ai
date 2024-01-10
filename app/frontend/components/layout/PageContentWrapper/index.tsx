import React, { HTMLAttributes } from "react";
import classnames from 'classnames';
import styles from './styles.module.scss';

export type PageContentWrapperProps = HTMLAttributes<HTMLDivElement>;

export const PageContentWrapper = ({className, ...baseProps}: PageContentWrapperProps): JSX.Element => {
  return (
    <div {...baseProps} className={classnames(styles.pageContentWrapper, className)} />
  )
};
