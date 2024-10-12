import { useRouteError, Link } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <>
        <div className=" align-element text-4xl font-bold underline">
          404 not found on single page
        </div>
        <button type="button">
          <Link to="/">Go to Homepage</Link>
        </button>
      </>
    );
  }

  return <div className="align-element text-4xl font-bold underline">there is an error on single page</div>;
};

export default ErrorElement;
