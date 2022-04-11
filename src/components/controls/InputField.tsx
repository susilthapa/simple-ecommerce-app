import React, { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: string;
  placeholder?: string;
  className?: string;
  error?: boolean;
  helperText?: string;
  inputStyles?: string;
}

const InputField: React.FC<IProps> = ({
  label,
  type,
  placeholder,
  className,
  disabled,
  error,
  helperText,
  inputStyles,
  ...rest
}) => {
  return (
    <div className={`${className}`}>
      {label && (
        <label className="block text-gray-dark text-xs mb-1">{label}</label>
      )}
      <input
        className={`appearance-none shadow-lg border-gray-inputBorder bg-primary font-medium
                     rounded-lg w-full py-2.5 px-3 ${
                       type === "file" ? "!py-2" : ""
                     } text-gray-900 text-xs 
                    leading-tight focus:outline-none  placeholder-gray-600 placeholder-opacity-50 ${
                      disabled ? "!bg-gray-lightest" : ""
                    } ${
          error ? "!border-red focus:ring-red focus:border-red" : ""
        } ${inputStyles}`}
        type={type || "text"}
        placeholder={placeholder || ""}
        disabled={disabled}
        {...rest}
      />
      <span
        className={`flex items-center font-medium tracking-wide ${
          error ? "text-red-500" : "text-gray-dark"
        } text-xxs ml-1`}
      >
        {helperText}
      </span>
    </div>
  );
};

export default InputField;
