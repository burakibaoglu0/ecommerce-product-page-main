import React from "react";
import './button.scss';

const BiButton = (props: {
  hasIcon?: boolean,
  iconSrc?: string,
  buttonText: string,
  isLink?: boolean,
  to?: string,
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  buttonStyle?:  React.CSSProperties;
  className?: string
}) => {
  const buttonContent = (
    <>
      {props.hasIcon && <div className="bi-button-icon" style={{
        WebkitMaskImage: `url(${props.iconSrc})`,
        maskImage: `url(${props.iconSrc})`,
        backgroundColor: props.buttonStyle?.color,
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center'
      }}></div>}
      <span style={{
        color: props.buttonStyle?.color
      }}>{props.buttonText}</span>
    </>
  );

  return (
    <button style={props.buttonStyle} onClick={props.handleClick} className={props.className ? props.className + ' bi-button' : 'bi-button'}>
      {props.isLink ? <a href={props.to}>{buttonContent}</a> : buttonContent}
    </button>
  );
};

export default BiButton;
