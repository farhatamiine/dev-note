import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


const token = "sknXh5XIfSSLVu01G92IyvfjW046HCYew1F4XMtWoNwoKwn74o9NbtrsTWIgNitKAq6uRCeTt49zzSFSAlhk5I2KhifzCyxOwThGptpyLoefZXPK0Xq6sUQ0ioZlki5dztlhZwrUVPUyd0SUTqw5GnZ54S8rzZxF7Koc6AHxwlCUaaq2iSFP";

export const notesApi = createApi({
    reducerPath: "notesApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://b9c1jyic.api.sanity.io/v2021-06-07/data/",
        prepareHeaders: (headers => {
            headers.set("Authorization", `Bearer ${token}`)
            //headers.set("Access-Control-Allow-Credentials", "true");
            return headers
        }),
    },),
    tagTypes: ["Notes"],
    endpoints: (builder) => ({
        getAll: builder.query({
            query: () => `query/production?query=*[_type=='notes']`,
            providesTags: [{type: "Notes", id: "LIST"}],
        }),
        createNote: builder.mutation({
            query(notes) {
                return {
                    url: `mutate/production?returnIds=true&returnDocuments=true`,
                    method: 'POST',
                    body: notes
                }
            },
            invalidatesTags: [{type: "Notes", id: "LIST"}],
        })
    })

})