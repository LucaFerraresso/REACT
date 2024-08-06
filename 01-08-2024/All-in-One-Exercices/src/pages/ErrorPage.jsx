import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 text-center bg-pink-200">
      <h1 className="text-5xl sm:text-6xl font-bold text-red-600">Oops!</h1>
      <p className="mt-4 text-base sm:text-lg text-gray-700">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="mt-2 text-sm text-gray-500">
        {error.statusText || error.message}
      </p>
      <pre className="mt-4 w-full max-w-md p-4 bg-white border rounded shadow-md text-left overflow-x-auto">
        {JSON.stringify(error, null, 2)}
      </pre>
      <a
        href="/homepage"
        className="mt-6 inline-block px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
      >
        Go back to the homepage
      </a>
    </div>
  );
};

export default ErrorPage;
