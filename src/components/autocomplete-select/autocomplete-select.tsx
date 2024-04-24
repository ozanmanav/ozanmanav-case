import {
  Autocomplete,
  AutocompleteRenderGetTagProps,
  AutocompleteRenderOptionState,
  Avatar,
  Box,
  Checkbox,
  Chip,
  Divider,
  Paper,
  TextField,
  Typography,
  debounce,
  useTheme,
} from "@mui/material";
import { useCallback, useState } from "react";
import { Character } from "../../redux/types";
import {
  checkedIcon,
  dividerSx,
  icon,
  paperSx,
  rootSx,
} from "./autocomplete-select.definitions";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
  loading?: boolean;
  options: Character[];
  fetchOptions: (value: string) => void;
};

export const AutocompleteSelect = ({
  fetchOptions,
  options,
  loading,
}: Props): JSX.Element => {
  const theme = useTheme();
  const [inputValue, setInputValue] = useState("rick");

  const debouncedSave = debounce((newValue) => fetchOptions(newValue), 500);

  const updateValue = (newValue: string) => {
    setInputValue(newValue);
    debouncedSave(newValue);
  };

  const renderOption = useCallback(
    (
      props: React.HTMLAttributes<HTMLLIElement>,
      option: Character,
      { selected, inputValue }: AutocompleteRenderOptionState
    ) => {
      const matches = match(option.name, inputValue, { insideWords: true });
      const parts = parse(option.name, matches);

      return (
        <>
          <li
            {...props}
            style={{ backgroundColor: "unset", paddingLeft: "8px" }}
          >
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />

            <Avatar
              src={option.image}
              variant="square"
              alt={option.name}
              sx={{ borderRadius: "8px" }}
            />

            <Box ml="16px">
              <Box>
                {parts.map((part, index) => (
                  <Typography
                    key={index}
                    sx={{
                      fontWeight: part.highlight ? 900 : 400,
                      display: "inline",
                    }}
                    color="text.primary"
                  >
                    {part.text}
                  </Typography>
                ))}
              </Box>

              <Typography color="text.secondary">
                {option.episode?.length} Episodes
              </Typography>
            </Box>
          </li>

          <Divider sx={dividerSx} />
        </>
      );
    },
    []
  );

  const renderTags = (
    value: Character[],
    getTagProps: AutocompleteRenderGetTagProps
  ) => {
    return value.map((option, index) => (
      <Chip
        {...getTagProps({ index })}
        label={option.name}
        sx={{ borderRadius: "8px" }}
        color="secondary"
        deleteIcon={
          <Box
            sx={{ backgroundColor: theme.palette.secondary.dark }}
            width="20px"
            height="20px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="4px"
          >
            <CloseIcon sx={{ color: "white", width: "16px", height: "16px" }} />
          </Box>
        }
      />
    ));
  };

  return (
    <Autocomplete
      options={options}
      loading={loading}
      sx={rootSx}
      renderInput={(params) => (
        <TextField {...params} label="Search" margin="normal" />
      )}
      onInputChange={(_, newValue) => updateValue(newValue)}
      inputValue={inputValue}
      multiple
      renderOption={renderOption}
      loadingText="Loading..."
      disableCloseOnSelect
      filterOptions={(x) => x}
      getOptionLabel={(option) => option.name}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      PaperComponent={({ children }) => <Paper sx={paperSx}>{children}</Paper>}
      open={true}
      renderTags={renderTags}
    />
  );
};
