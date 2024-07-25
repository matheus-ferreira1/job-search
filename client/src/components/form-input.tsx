import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  name: string;
  labelText?: string;
  defaultValue?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
}

export const FormInput: React.FC<FormInputProps> = ({
  type,
  name,
  labelText,
  defaultValue,
  required,
  onChange,
  readOnly = false,
  className,
  placeholder,
}) => {
  return (
    <div className={className}>
      <Label htmlFor={name}>{labelText || name}</Label>
      <Input
        type={type}
        id={name}
        name={name}
        defaultValue={defaultValue || ""}
        onChange={onChange}
        required={required}
        readOnly={readOnly}
        placeholder={placeholder}
      />
    </div>
  );
};
