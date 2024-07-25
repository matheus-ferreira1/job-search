import { cn } from "@/lib/utils";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface FormSelectInputProps extends React.HTMLProps<HTMLSelectElement> {
  items: { label: string; value: string }[];
  type?: string;
  name: string;
  labelText?: string;
  defaultValue?: string;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const FormSelectInput: React.FC<FormSelectInputProps> = ({
  name,
  items,
  labelText,
  defaultValue,
  className,
  required,
}) => {
  return (
    <div className={cn(className)}>
      <Label htmlFor={name}>{labelText || name}</Label>
      <Select defaultValue={defaultValue} name={name} required={required}>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          {items.map((item) => (
            <SelectItem
              key={item.label}
              value={item.value}
              defaultValue={defaultValue}
              className="capitalize"
            >
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
