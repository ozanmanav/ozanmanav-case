import { Autocomplete, TextField, debounce } from "@mui/material";
import { useCallback, useState } from "react";

type Props<T> = {
  loading?: boolean;
  options: T[];
  fetchOptions: (value: string) => void;
  onClickOption?: (option: string) => void;
  renderOption: (
    props: React.HTMLAttributes<HTMLLIElement>,
    option: T
  ) => React.ReactNode;
  getOptionLabel?: (option: T) => string;
};

export const AutocompleteSelect = <T,>({
  fetchOptions,
  options,
  loading,
  renderOption,
  getOptionLabel,
}: Props<T>): JSX.Element => {
  const [inputValue, setInputValue] = useState("");

  const debouncedSave = useCallback(
    debounce((newValue) => fetchOptions(newValue), 300),
    []
  );

  const updateValue = (newValue: string) => {
    setInputValue(newValue);
    debouncedSave(newValue);
  };

  return (
    <Autocomplete
      disablePortal
      options={options}
      loading={loading}
      sx={{ width: 500 }}
      renderInput={(params) => <TextField {...params} label="Search" />}
      onInputChange={(_, newValue) => updateValue(newValue)}
      inputValue={inputValue}
      multiple
      renderOption={renderOption}
      getOptionLabel={getOptionLabel}
    />
  );
};
