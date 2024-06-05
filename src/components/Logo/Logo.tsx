import React, { useRef, DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import { useTheme } from '../../contexts/ThemeContext';
import styles from "./Logo.module.scss";
import classnames from "classnames/bind";

const cnb = classnames.bind(styles);

const Ring = ({
  className
}: {
  className?: string;
}) => <svg width="90" className={cnb("ring", className)} height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path fillRule="evenodd" clipRule="evenodd" d="M45.1515 73.7323C62.5429 73.7323 76.6414 59.6338 76.6414 42.2424C76.6414 24.851 62.5429 10.7525 45.1515 10.7525C27.7602 10.7525 13.6616 24.851 13.6616 42.2424C13.6616 59.6338 27.7602 73.7323 45.1515 73.7323ZM86.4142 42.2424C86.4142 65.0311 67.9403 83.505 45.1515 83.505C22.3628 83.505 3.88892 65.0311 3.88892 42.2424C3.88892 19.4536 22.3628 0.979736 45.1515 0.979736C67.9403 0.979736 86.4142 19.4536 86.4142 42.2424Z" /></g></svg>


export interface ILogo
  extends
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  type?: "button" | "submit" | "reset";
  active?: boolean;
  error?: boolean;
  caption?: React.ReactNode;
  size?: "small" | "medium" | "large";
  variant?: "button" | "action";
  color?:
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "failure"
  | "transparent"
  | "clear"
  | "ghost"
  | "outline";
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  theme?: any;
}

export const Logo = ({
  disabled,
  className,
  ...props
}: ILogo) => {
  const ref = useRef<HTMLButtonElement>(null);
  const { theme } = useTheme();

  return (
    <div
      className={cnb(
        "logo",
        `logo-${theme}`,
        className
      )}
      {...props}
    >
      <Ring className="ring-one" />
      <Ring className="ring-two" />
      <Ring className="ring-three" />
    </div>
  );
};

export default Logo;
