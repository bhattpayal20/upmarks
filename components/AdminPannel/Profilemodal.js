import React, { useState, useEffect } from "react";
import request from "../../utils/request";
import { getToken } from "../../utils/user";
import { BsExclamationSquareFill } from "react-icons/bs";

export default function Profilemodal({ modalOpen }) {
  const [response, setResponse] = React.useState({
    alert: false,
    data: "",
    loading: false,
  });

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };

  const updatepic = async (e) => {
    e.preventDefault();
    if (selectedFile.size >= 1048576) {
      setResponse({
        loading: true,
        alert: true,
        data: "image must be of size less than or equal to 1MB",
      });
    } else if (selectedFile.size <= 1048576) {
      setResponse({ loading: true });
      // console.log("photo", selectedFile);
      const formData = new FormData();
      // console.log("form adata", formData, typeof formData);

      formData.append("file", selectedFile);
      // formData.append("name", "demo");
      console.log("pic=>", selectedFile);

      // console.log("values ", formData.getAll("file"));
      // console.log("api called", formData);

      let token = getToken();

      const requestOptions = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          // "Content-Type": "multipart/form-data;boundary=xxxx",
        },
        body: formData,
      };
      let resp = await fetch(
        "https://api.upmarks.in/api/file/profile-image",
        requestOptions
      );
      resp = await resp.json();
      console.log("a", resp);
      if (resp.success) {
        modalOpen();
      }
    }
  };
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <form onSubmit={updatepic}>
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h2 className="text-black text-lg font-medium">
                      Update Photo
                    </h2>

                    <div className="flex items-center justify-center w-full mt-4">
                      {selectedFile ? (
                        <img src={preview} width={300} height={300} />
                      ) : (
                        <label className="flex flex-col w-full h-32 border-4 border-indigo-200 border-dashed hover:bg-gray-100 hover:border-black-300">
                          <div className="flex flex-col items-center justify-center pt-7">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokelinecap="round"
                                strokelinejoin="round"
                                strokewidth="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                              />
                            </svg>
                            <p className="pt-1 text-sm tracking-wider text-black-400 group-hover:text-gray-600">
                              Attach a file
                            </p>
                          </div>
                          <input
                            type="file"
                            name="img"
                            className="opacity-0"
                            onChange={onSelectFile}
                            required
                          />
                        </label>
                      )}
                    </div>
                    {response.alert && (
                      <>
                        <div className="m-2 p-1 bg-red-300 rounded-md flex items-center">
                          <div className="mr-1">
                            <BsExclamationSquareFill size={20} />
                          </div>
                          <div className="text-black">{response.data}</div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 flex gap-x-2 sm:gap-x-0 flex-row-reverse">
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={modalOpen}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className={`mt-3 sm:mt-0 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm ${
                    selectedFile ? "cursor-pointer" : "cursor-not-allowed"
                  }`}
                  disabled={Boolean(!selectedFile)}
                >
                  {response.loading && (
                    <svg
                      className="animate-spin h-5 w-5 mr-3"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  )}
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
