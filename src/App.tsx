import { Avatar, Box } from "@mui/material";
import { useLazyGetCharacterByNameQuery } from "./api/api";
import { AutocompleteSelect } from "./components/AutocompleteSelect";

const App = () => {
  const [getCharacterByNameQuery, { isLoading, data }] =
    useLazyGetCharacterByNameQuery();

  const fetchOptions = (value: string) => {
    getCharacterByNameQuery(value);
  };

  return (
    <>
      <AutocompleteSelect
        loading={isLoading}
        options={data?.results || []}
        fetchOptions={fetchOptions}
        renderOption={(props, option) => {
          return (
            <li {...props}>
              <Avatar src={option.image} alt={option.name} />

              <Box ml="16px">{option.name}</Box>
            </li>
          );
        }}
        getOptionLabel={(option) => option.name}
      />
    </>
  );
};

export default App;
