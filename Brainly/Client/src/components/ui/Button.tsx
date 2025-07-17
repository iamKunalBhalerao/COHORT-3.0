import clsx from "clsx";
import type { ButtonHTMLAttributes, ReactElement } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary" | "success" | "danger";
  size: "sm" | "md" | "lg";
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  loading?: boolean;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  startIcon,
  endIcon,
  children,
  disabled = false,
  loading = false,
  fullWidth = false,
  className,
  ...rest
}) => {
  const baseStyle =
    "inline-flex items-center justify-center font-medium rounded-lg cursor-pointer transition duration-200 focus:outline-none";

  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-400",
    secondary: "bg-blue-100 text-blue-900 hover:bg-blue-200 disabled:bg-gray-100 disabled:text-gray-500",
    success: "border-green-500 bg-green-500 text-white hover:bg-green-600 disabled:bg-gray-100 disabled:text-gray-500",
    danger: "border-red-500 bg-red-100 text-red-600 hover:bg-red-200 disabled:bg-red-100 disabled:text-red-200",
  };

  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };

  const isDisabled = disabled || loading;

  return (
    <>
      <button
        className={clsx(
          baseStyle,
          variantClasses[variant],
          sizeClasses[size],
          {
            "w-full": fullWidth,
            "opacity-60 cursor-not-allowed": isDisabled,
          },
          className,
          "disabled:opacity-60 disabled:cursor-not-allowed"
        )}
        disabled={isDisabled}
        {...rest}
      >
        {loading ? (
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
        ) : (
          <>
            {startIcon && <span className="mr-2">{startIcon}</span>}
            {children}
            {endIcon && <span className="ml-2">{endIcon}</span>}
          </>
        )}
      </button>
    </>
  );
};

export default Button;
