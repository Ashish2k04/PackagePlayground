import React from "react";
import { Trash2 } from "lucide-react";

const Card = () => {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Header */}
      <div className="mb-4 flex items-start justify-between gap-4">
        <h2 className="text-xl font-semibold text-gray-900">
          My Awesome Project
        </h2>

        <button
          type="button"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-gray-400 transition-all duration-200 hover:bg-red-50 hover:text-red-500"
          aria-label="Delete card"
        >
          <Trash2 size={18} />
        </button>
      </div>

      {/* Description */}
      <p className="text-sm leading-6 text-gray-500">
        This is a simple and modern card component built with React and
        Tailwind CSS. You can use it to display your projects, notes, tasks,
        or any other content.
      </p>
    </div>
  );
};

export default Card;