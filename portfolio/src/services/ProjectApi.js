import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "./tokenStorge";


export const projectApi = createApi({

  reducerPath: 'ProjectApi',
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api/" }), // Corrected "basequery" to "baseQuery"
  endpoints: (builder) => ({
    allProjects: builder.query({
      query: () => 'projects/',


    }),
    postProject: builder.mutation({
      query: (project) => {
        const { access_token } = getToken()
        return {
          url: 'project/',
          method: 'POST',
          body: project,
          headers: {
            'authorization': `Bearer ${access_token}`,
          }
        }
      }
    }),
    updateProject: builder.mutation({
      query: (id) => {
        const { access_token } = getToken()
        return {
          url: `project/${id}/`,
          method: "DELETE",
          headers: {
            'authorization': `Bearer ${access_token}`,
          }
        }


      }
    }),
    deleteProject: builder.mutation({
      query: (id) => {
        const { access_token } = getToken()
        return {
          url: `project/${id}/`,
          method: "DELETE",
          headers: {
            'authorization': `Bearer ${access_token}`,
          }
        }
      }
    })

  })
});

export const { useAllProjectsQuery, usePostProjectMutation, useDeleteProjectMutation } = projectApi

