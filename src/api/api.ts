import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Character } from "../redux/types";

// Define a service using a base URL and expected endpoints
export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api/" }),
  endpoints: (builder) => ({
    getCharacterByName: builder.query<{ results: Character[] }, string>({
      query: (name) => `character/?name=${name}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLazyGetCharacterByNameQuery } = appApi;
