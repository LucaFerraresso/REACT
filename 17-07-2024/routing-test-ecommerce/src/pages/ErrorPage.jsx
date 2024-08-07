import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  //qui salvo in memoria l'oggetto ERRORE, per poi visualizarlo a dom
  const error = useRouteError();
  console.error(error);

  return (
    <div className="bg-red-400 text-white flex flex-col items-center justify-center w-full">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {/* qui mostro l'errore, se c'è */}
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
