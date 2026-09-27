const Form = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Form submitted");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex items-center gap-3"
        >
            <input
                type="text"
                placeholder="Enter something..."
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
            />

            <button
                type="submit"
                className="rounded-lg bg-blue-500 px-5 py-2 text-white hover:bg-blue-600 cursor-pointer"
            >
                Submit
            </button>
        </form>
    );
};

export default Form;