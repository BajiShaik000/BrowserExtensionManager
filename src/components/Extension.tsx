import { FC } from "react";

export interface extension {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}

interface ExtensionProps extends extension {
  handleChecked: (name: string) => void;
  handleRemove: (name: string) => void;
}

export const Extension: FC<ExtensionProps> = ({
  logo,
  name,
  description,
  isActive,
  handleChecked,
  handleRemove,
}) => {
  return (
    <div className="extension-card">
      <div className="card-top">
        <img src={logo} alt={`img-${name}`} />
        <div className="card-content">
          <h3>{name}</h3>
          <span>{description}</span>
        </div>
      </div>
      <div className="card-bottom">
        <button className="remove-btn" onClick={() => handleRemove(name)}>
          Remove
        </button>
        <div className="toggle-btn">
          <input
            type="checkbox"
            id={`toggle-${name}`}
            checked={isActive}
            onChange={() => handleChecked(name)}
          />
          <label htmlFor={`toggle-${name}`}></label>
        </div>
      </div>
    </div>
  );
};
