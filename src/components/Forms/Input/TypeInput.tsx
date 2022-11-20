export interface InputProps {
  type: string;
  label: string;
  name: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
}
