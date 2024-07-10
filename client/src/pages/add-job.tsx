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
import {
  jobLocationTypeOptions,
  jobStatusOptions,
  jobTypeOptions,
} from "@/constants/jobs-data";

import { FormInput } from "@/components/form-input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/auth-context";
import { FormSelectInput } from "@/components/form-select-input";

// eslint-disable-next-line react-refresh/only-export-components
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);

  try {
    const res = await api.post("/jobs", data);
    console.log(res);

    toast.success("New job added successfully!");

    return redirect("/dashboard");
  } catch (err: unknown) {
    // @ts-expect-error catching error
    toast.error(err.response.data.message);

    return err;
  }
};

const AddJob: FC = () => {
  const { user } = useAuth();

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <section className="mt-4">
      <h2 className="text-2xl font-bold mb-4">Add New Job Submission</h2>

      <Form method="post">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <FormInput
            type="text"
            name="position"
            labelText="Position"
            required
          />
          <FormInput type="text" name="company" labelText="Company" required />
          <FormInput
            type="text"
            name="jobLocation"
            labelText="Job Location"
            defaultValue={user?.location}
          />
          <FormSelectInput
            name="jobLocationType"
            labelText="Job Location Type"
            items={jobLocationTypeOptions}
            required
          />
          <FormSelectInput
            name="jobStatus"
            labelText="Job Status"
            items={jobStatusOptions}
            defaultValue={jobStatusOptions[0].value}
            required
          />
          <FormSelectInput
            name="jobType"
            labelText="Job Type"
            items={jobTypeOptions}
            required
          />
        </div>
        <div className="mt-4">
          <Button type="submit" className="" disabled={isSubmitting}>
            {isSubmitting ? <Loader2 className="animate-spin" /> : "Add Job"}
          </Button>
        </div>
      </Form>
    </section>
  );
};

export default AddJob;
