import { Link } from "react-router-dom";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { FormInput } from "@/components/form-input";
import { Button } from "@/components/ui/button";

const Register = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <div className="max-w-md w-full p-4 sm:p-6 bg-background rounded-lg shadow-md">
          <div className="space-y-4">
            <div className="text-center">
              <h1 className="text-2xl font-bold">Register</h1>
              <p className="text-muted-foreground">
                Create an account to manage your job submissions.
              </p>
            </div>
            <form className="space-y-4">
              <FormInput type="text" name="Name" />
              <FormInput type="text" name="lastName" labelText="Last name" />
              <FormInput type="text" name="Location" />
              <FormInput type="email" name="Email" />
              <FormInput type="password" name="Password" />
              <Button type="submit" className="w-full">
                Register
              </Button>
            </form>
            <div className="text-center text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="underline">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
