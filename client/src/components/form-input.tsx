import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface FormInputProps {
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
}) => {
  return (
    <div>
      <Label htmlFor={name}>{labelText || name}</Label>
      <Input
        type={type}
        id={name}
        name={name}
        defaultValue={defaultValue || ""}
        onChange={onChange}
        required={required}
        readOnly={readOnly}
      />
    </div>
  );
};
