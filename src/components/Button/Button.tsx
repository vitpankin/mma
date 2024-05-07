import React, { useRef, DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";
import classnames from "classnames/bind";
// import { Flex, FlexContainer } from "../Flex";

const cnb = classnames.bind(styles);

export declare type CommonButtonProps =
  | "href"
  | "size"
  | "variant"
  | "disabled";

export interface IButtonIcon {
  icon: React.ReactNode;
  animation?: "none" | "left" | "right";
}

export interface IButton
  extends Omit<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    "onSelect"
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
  iconLeft?: IButtonIcon;
  iconRight?: IButtonIcon;
}

export const Button = ({
  disabled,
  type = "button",
  size = "medium",
  variant = "button",
  color = "default",
  error,
  children,
  caption,
  iconLeft,
  iconRight,
  onClick,
  className,
  ...props
}: IButton) => {
  const ref = useRef<HTMLButtonElement>(null);

  // useEffect(() => {
  //   if (ref.current) {
  //     ref.current.addEventListener("mousemove", hoverHandler);
  //   }
  //   return () => {
  //     if (ref.current) {
  //       ref.current.removeEventListener("mousemove", hoverHandler);
  //     }
  //   }
  // }, [ref.current])

  const getChildren = (variant: "button" | "action") => {
    switch (variant) {
      case "button":
        return children;
      case "action":
        return <span>{children}</span>;
    }
  };

  return (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cnb(
        "button",
        "button-" + color,
        "button-" + size,
        children ? "button" : "button-icon-only",
        error && "button-error",
        "button-variant-" + variant,
        { "button-icon-left": iconLeft },
        { "button-icon-right": iconRight },
        "action",
        ((size) => {
          switch (size) {
            case "small":
              return "action-small";
            case "medium":
              return "action-medium";
            case "large":
              return "action-normal";
          }
        })(size),
        className
      )}
      {...props}
    >
      {iconLeft ? (
        React.cloneElement(iconLeft.icon as React.ReactElement<any>, {
          className: cnb(
            "icon-left",
            (iconLeft.icon as React.ReactElement).props
              ? (iconLeft.icon as React.ReactElement).props.className
              : ""
          ),
        })
      ) : (
        <></>
      )}

      {caption ? (<></>
        // <FlexContainer
        //   className={cnb("text-stack")}
        //   direction="column"
        //   justify="center"
        //   align="center"
        // >
        //   <Flex>{getChildren(variant)}</Flex>
        //   <Flex className={cnb("paragraph", "paragraph-tiny")}>{caption}</Flex>
        // </FlexContainer>
      ) : (
        getChildren(variant)
      )}

      {iconRight ? (
        React.cloneElement(iconRight.icon as React.ReactElement<any>, {
          className: cnb(
            "icon-right",
            (iconRight.icon as React.ReactElement).props
              ? (iconRight.icon as React.ReactElement).props.className
              : ""
          ),
        })
      ) : (
        <></>
      )}
    </button>
  );
};

export default Button;
