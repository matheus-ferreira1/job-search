import {
  ActionFunction,
  Form,
  Link,
  redirect,
  useNavigation,
} from "react-router-dom";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

import { api } from "@/lib/axios";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { FormInput } from "@/components/form-input";
import { Button } from "@/components/ui/button";

// eslint-disable-next-line react-refresh/only-export-components
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await api.post("/auth/login", data);

    toast.success("User logged in successfully.");

    return redirect("/dashboard");
  } catch (err: unknown) {
    // @ts-expect-error catching error
    toast.error(err.response.data.message);

    return err;
  }
};

const Login = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

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
            <Form method="post" className="space-y-4">
              <FormInput type="email" name="email" labelText="E-mail" />
              <FormInput type="password" name="password" labelText="Password" />
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? <Loader2 className="animate-spin" /> : "Login"}
              </Button>
            </Form>
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
