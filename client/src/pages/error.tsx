import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error: unknown = useRouteError();

  console.log(error);

  // @ts-expect-error Checking if the error is a 404 status code
  if (error.status === 404) {
    return (
      <div className="flex h-[100dvh] w-full flex-col items-center justify-center gap-6 bg-background px-4 md:px-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Page Not Found
          </h1>
          <p className="max-w-[500px] text-muted-foreground md:text-xl">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <Link
          to="/"
          className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          Go to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="flex h-[100dvh] flex-col items-center justify-center bg-background px-4 text-center">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">
          Oops! <br /> Something went wrong.
        </h1>
        <p className="max-w-md mx-auto text-muted-foreground">
          We're sorry, but an unexpected error has occurred. Please try again
          later or contact support if the issue persists.
        </p>
        <Link
          to="/"
          className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default Error;
