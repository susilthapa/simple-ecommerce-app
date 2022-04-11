import { Fragment, InputHTMLAttributes } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value?: any;
  options: any[];
  className?: string;
  name?: string;
  optionLabelKey?: string;
  onChange?: ({}) => void;
  error?: boolean;
  helperText?: string;
  inputStyles?: string;
  placeholder?: string;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Select: React.FC<IProps> = ({
  label,
  options,
  value,
  onChange,
  className,
  name,
  optionLabelKey,
  error,
  helperText,
  inputStyles,
  disabled,
  placeholder,
  ...rest
}) => {
  const handleChange = (valObj: any) => {
    onChange &&
      onChange({
        target: {
          value: valObj,
          name,
          type: "select",
        },
      });
  };

  return (
    <Listbox value={value} onChange={handleChange}>
      {({ open }) => (
        <div>
          <Listbox.Label className="block text-gray-dark text-xs mb-1">
            {label}
          </Listbox.Label>
          <div className={`mt-1 relative ${className}`}>
            <Listbox.Button
              className={`shadow-lg relative w-full bg-primary  outline-0  border-gray-inputBorder rounded-lg  pl-3 pr-10 py-2.5 text-left cursor-default focus:outline-none focus:ring-gray-300 focus:border-gray-300 sm:text-sm font-medium ${
                disabled ? "!bg-gray-lightest" : ""
              } ${
                error ? "!border-red focus:ring-red focus:border-red " : ""
              } ${inputStyles}`}
            >
              <span className="flex items-center text-xs ">
                {optionLabelKey && value ? (
                  value[optionLabelKey] ? (
                    <span className="ml-3 block truncate">
                      {value[optionLabelKey]}
                    </span>
                  ) : (
                    <span className="ml-3 block truncate text-gray-500 opacity-50">
                      {placeholder}
                    </span>
                  )
                ) : value ? (
                  <span className="ml-3 block truncate">{value}</span>
                ) : (
                  <span className="ml-3 block truncate text-gray-600 opacity-50">
                    {placeholder}
                  </span>
                )}
              </span>
              <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <span
              className={`flex items-center font-medium tracking-wide ${
                error ? "text-red-500" : "text-gray-dark"
              } text-xxs ml-1`}
            >
              {helperText}
            </span>
            <Transition
              show={disabled ? false : open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-40 mt-1 w-full bg-primary shadow-lg max-h-56 rounded-sm py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {options.map((item, index) => (
                  <Listbox.Option
                    key={`option-${index}`}
                    className={({ active }) =>
                      classNames(
                        active ? "text-white bg-gray-600" : "text-gray-900",
                        "cursor-default select-none relative py-2 pl-3 pr-9"
                      )
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block truncate"
                            )}
                          >
                            {optionLabelKey && item
                              ? item[optionLabelKey]
                              : item}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-gray-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </div>
      )}
    </Listbox>
  );
};

export default Select;
