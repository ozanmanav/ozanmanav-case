import { Link, Typography } from "@mui/material";
import { useLazyGetCharacterByNameQuery } from "./api/api";
import { AutocompleteSelect } from "./components/autocomplete-select/autocomplete-select";

const App = () => {
  const [getCharacterByNameQuery, { isLoading, data }] =
    useLazyGetCharacterByNameQuery();

  const fetchOptions = (value: string) => {
    getCharacterByNameQuery(value);
  };

  return (
    <>
      <Typography>
        This is a frontend case developed by
        <Link
          href={"https://www.linkedin.com/in/ozanmanav/"}
          rel="noopener noreferrer"
          target="_blank"
          sx={{ ml: "4px" }}
        >
          Ozan Manav
        </Link>
      </Typography>

      <AutocompleteSelect
        loading={isLoading}
        options={data?.results || []}
        fetchOptions={fetchOptions}
      />
    </>
  );
};

export default App;
