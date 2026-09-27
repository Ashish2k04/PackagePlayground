import { useState } from "react";

const Form = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({
            title,
            description
        });
    };

    return (
        <div className="w-full max-w-xl mx-auto">
            <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6 shadow-xl">

                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-white">
                        Create a Note
                    </h2>

                    <p className="mt-1 text-sm text-gray-400">
                        Add a new note to your collection.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">

                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-300">
                            Title
                        </label>

                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter note title"
                            className="w-full rounded-xl border border-gray-700 bg-gray-800/70 px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-300">
                            Description
                        </label>

                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Write your note..."
                            rows={4}
                            className="w-full resize-none rounded-xl border border-gray-700 bg-gray-800/70 px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-xl bg-indigo-500 py-3 text-sm font-medium text-white transition hover:bg-indigo-400 active:scale-[0.98] cursor-pointer"
                    >
                        Add Note
                    </button>

                </form>
            </div>
        </div>
    );
};

export default Form;