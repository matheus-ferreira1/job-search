import { Link } from "react-router-dom";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { FormInput } from "@/components/form-input";
import { Button } from "@/components/ui/button";

const Login = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <div className="max-w-md w-full p-4 sm:p-6 bg-background rounded-lg shadow-md">
          <div className="space-y-4">
            <div className="text-center">
              <h1 className="text-2xl font-bold">Login</h1>
              <p className="text-muted-foreground">
                Sign in to manage your job submissions.
              </p>
            </div>
            <form className="space-y-4">
              <FormInput type="email" name="Email" />
              <FormInput type="password" name="Password" />
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
            <div className="text-center text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/register" className="underline">
                Register
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
