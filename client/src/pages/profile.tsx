import { FC } from "react";
import {
  ActionFunction,
  Form,
  redirect,
  useNavigation,
} from "react-router-dom";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

import { api } from "@/lib/axios";
import { useAuth } from "@/contexts/auth-context";

import { FormInput } from "@/components/form-input";
import { Button } from "@/components/ui/button";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await api.put("/users/update-user", data);
    toast.success("Profile edited successfully");
    return redirect("/dashboard");
  } catch (err) {
    // @ts-expect-error catching error
    toast.error(err.response.data.msg);
    return err;
  }
};

const Profile: FC = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const { user } = useAuth();

  return (
    <section className="mt-4">
      <h2 className="text-2xl font-bold mb-4">Edit Your Profile</h2>

      <Form method="post">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <FormInput
            type="email"
            name="email"
            labelText="E-mail"
            defaultValue={user?.email}
            required
            readOnly
          />
          <FormInput
            type="text"
            name="name"
            labelText="Name"
            defaultValue={user?.name}
            required
          />
          <FormInput
            type="text"
            name="lastName"
            labelText="Last Name"
            defaultValue={user?.lastName}
            required
          />
          <FormInput
            type="text"
            name="location"
            labelText="Location"
            defaultValue={user?.location}
          />
        </div>
        <div className="mt-4">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <Loader2 className="animate-spin" />
            ) : (
              "Edit Profile"
            )}
          </Button>
        </div>
      </Form>
    </section>
  );
};

export default Profile;
