import CloseIcon from '@mui/icons-material/Close';
import { useAllProjectsQuery, useDeleteProjectMutation } from '../../services/ProjectApi';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
export const ProjectDelete = ({ setDeleteModal, id }) => {
  console.log("id", id);
  const { data: project, isLoading, isError, error, isSuccess } = useAllProjectsQuery();
  const dispatch = useDispatch(); // Get the dispatch function
  if (!project) {
    // Data is still loading
    return <div>Loading...</div>;
  }

  if (project.length === 0) {
    // Data is empty
    return <div>No projects found.</div>;
  }

  const single = project.find((ele) => ele.id === id);

  if (!single) {
    return <div>Project with the specified id not found.</div>;
  }

  const handleDelete = () => {
    const projectId = single.id;
    dispatch(useDeleteProjectMutation(projectId));
    setDeleteModal(false);
  };
  useEffect(() => {
    // Now you can use the 'handleDelete' function
    handleDelete();
  });
  return (
    <div className="flex  overflow-x-hidden overflow-y-auto fixed  inset-0 z-50 bg-black bg-opacity-20 outline-none focus:outline-none">

      <div className="relative  sm mx-auto bg-white my-10">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="flex items-start justify-between p-2 border-b bg-light-gray border-solid border-gray-300 rounded-t ">
            <h3 className="text-3xl font-semibold bg-gradient-to-r from-fuchsia-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">Delete Departments</h3>
            <button className="bg-transparent border-0 text-black float-right" onClick={() => setDeleteModal(false)}>
              <CloseIcon />
            </button>
          </div>

          <div className="relative flex-auto h-[500px] ">
            <div class="max-w-lg mx-auto bg-white w-96  p-5">
              <img class="w-32 h-32 rounded-full mx-auto" src="https://picsum.photos/200" alt="Profile picture" />
              <h2 class="text-center text-2xl font-semibold mt-3">{single[0]}</h2>
              <div class="mt-5">
                <h2 class="text-xl font-bold">Are You Sure You Want To Delete ?</h2>
              </div>
              <div className="flex items-end justify-end mt-12">
                <button
                  className="border-2 w-max mx-auto text-red-800 font-semibold px-10 py-2 rounded-2xl hover:shadow-sm transition-all duration-500"
                  type="button"
                  onClick={() => setDeleteModal(false)}
                >
                  Close
                </button>
                <button
                  className="bg-gradient-to-r from-fuchsia-600 to-purple-600 w-max mx-auto text-white font-semibold px-10 py-2 rounded-2xl hover:shadow-sm transition-all duration-500"
                  type="button"
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>



  )
}
