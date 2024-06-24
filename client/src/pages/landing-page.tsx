import { Link } from "react-router-dom";

import { Header } from "@/components/header";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { cn } from "@/lib/utils";
import { features } from "@/constants/features";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Track Your Job Applications
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Save, update, and delete your job submissions all in one place.
                Stay organized and on top of your job search.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link to="/register" className={cn(buttonVariants(), "px-8")}>
                  Sign Up
                </Link>
                <Link
                  to="/login"
                  className={cn(buttonVariants({ variant: "outline" }), "px-8")}
                >
                  Log In
                </Link>
              </div>
            </div>
            <div className="grid gap-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-muted rounded-lg p-6 shadow-sm"
                >
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 max-w-md mx-auto">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Get Started Today
              </h2>
              <p className="text-muted-foreground md:text-xl">
                Sign up for our job tracking application to stay organized and
                on top of your job search.
              </p>
              <form className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="max-w-lg flex-1"
                />
                <Link to="/register" className={cn(buttonVariants(), "px-6")}>
                  Sign Up
                </Link>
              </form>
            </div>
          </div>
        </section>
      </main>
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
    </div>
  );
};

export default LandingPage;
