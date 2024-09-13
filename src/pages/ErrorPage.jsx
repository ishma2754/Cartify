import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <>
        <div className=" align-element text-4xl font-bold underline">
          404 not found
        </div>
        <button type="button">
          <Link to="/">Go to Homepage</Link>
        </button>
      </>
    );
  }

  return <div>there is an error</div>;
};

export default ErrorPage;
