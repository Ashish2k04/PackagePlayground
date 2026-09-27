import React, { useState } from "react";

const Form = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      title,
      description,
    });
  };

  return (
    <div className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-5">
        <h2 className="text-xl font-semibold text-gray-900">
          Create a Note
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Add a title and description for your note.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Title
          </label>

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition-all duration-200 focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Description
          </label>

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write your note..."
            rows={4}
            className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition-all duration-200 focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-indigo-500 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-indigo-600 active:scale-[0.98] cursor-pointer"
        >
          Add Note
        </button>

      </form>
    </div>
  );
};

export default Form;