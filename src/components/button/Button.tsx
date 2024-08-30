import { ReactElement, ReactNode } from "react";

interface IButtonProps {
  children?: ReactNode;
  disabled?: boolean;
  icon?: string;
  onClick?: () => void;
}

export function Button(props: IButtonProps): ReactElement {
  const computedChildren = props.icon ? (
    <span className="icon material-symbols-outlined">{props.icon}</span>
  ) : (
    props.children
  );

  return (
    <button className="button" disabled={props.disabled} onClick={props.onClick}>
      {computedChildren}
    </button>
  );
}
