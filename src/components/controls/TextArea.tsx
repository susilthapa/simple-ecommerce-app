import React, { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  type?: string;
  placeholder?: string;
  className?: string;
  error?: boolean;
  helperText?: string;
  rows?: number;
  inputStyles?: string;
}

const TextArea: React.FC<IProps> = ({
  label,
  type,
  placeholder,
  className,
  error,
  helperText,
  rows,
  inputStyles,
  ...rest
}) => {
  return (
    <div className={className}>
      <label className="block text-gray-dark text-xs mb-1">{label}</label>
      <textarea
        rows={rows ?? 4}
        className={`resize-y appearance-none border border-gray-inputBorder 
                    rounded-lg w-full py-2.5 px-3 text-gray-700 text-xs 
                    leading-tight focus:outline-none shadow-lg focus:shadow-outline bg-white focus:ring-primary focus:border-primary placeholder-gray-700 placeholder-opacity-50 ${
                      error ? "!border-red focus:ring-red focus:border-red" : ""
                    }  ${inputStyles}`}
        placeholder={placeholder || "Please enter comma separated values"}
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

export default TextArea;
