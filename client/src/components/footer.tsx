export const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row sm:justify-between py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-muted-foreground">
        &copy; 2024 Job Tracker. All rights reserved.
      </p>
      <p className="text-sm text-muted-foreground">
        Created by{" "}
        <a
          className="font-bold hover:underline hover:text-accent-foreground"
          href="https://github.com/matheus-ferreira1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Matheus Ferreira
        </a>
      </p>
    </footer>
  );
};
