import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'phonebook',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6390efa265ff41831123128e.mockapi.io',
  }),
  tagTypes: ['Phonebook'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => ({
        url: '/phonebook',
        method: 'GET',
      }),
      providesTags: ['Phonebook'],
    }),
    addContacts: builder.mutation({
      query: ({ name, phone }) => ({
        url: '/phonebook',
        method: 'POST',
        body: { name, phone },
      }),
      invalidatesTags: ['Phonebook'],
    }),
    deleteContacts: builder.mutation({
      query: id => ({
        url: `/phonebook/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Phonebook'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactsMutation,
  useDeleteContactsMutation,
} = contactsApi;
