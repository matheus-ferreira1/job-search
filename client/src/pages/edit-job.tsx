/* eslint-disable react-refresh/only-export-components */
import {
  ActionFunction,
  Form,
  LoaderFunction,
  redirect,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import { toast } from "sonner";

import { api } from "@/lib/axios";
import { Job } from "@/contexts/jobs-context";
import { FormInput } from "@/components/form-input";
import { FormSelectInput } from "@/components/form-select-input";
import {
  jobLocationTypeOptions,
  jobStatusOptions,
  jobTypeOptions,
} from "@/constants/jobs-data";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export const loader: LoaderFunction = async ({ params }) => {
  try {
    const response = await api.get(`/jobs/${params.id}`);
    return response.data;
  } catch (err) {
    console.log(err);
    // @ts-expect-error catching error
    toast.error(err.response.data.message);
    return redirect("/dashboard");
  }
};

export const action: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await api.put(`/jobs/${params.id}`, data);
    toast.success("Job edited successfully");
    return redirect("/dashboard");
  } catch (err) {
    // @ts-expect-error catching error
    toast.error(err.response.data.msg);
    return err;
  }
};

const EditJob: React.FC = () => {
  const {
    position,
    company,
    jobLocation,
    jobLocationType,
    jobStatus,
    jobType,
  } = useLoaderData() as Job;

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <section className="mt-4">
      <h2 className="text-2xl font-bold mb-4">Edit Your Job Submission</h2>

      <Form method="post">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <FormInput
            type="text"
            name="position"
            labelText="Position"
            defaultValue={position}
            required
          />
          <FormInput
            type="text"
            name="company"
            labelText="Company"
            defaultValue={company}
            required
          />
          <FormInput
            type="text"
            name="jobLocation"
            labelText="Job Location"
            defaultValue={jobLocation}
          />
          <FormSelectInput
            name="jobLocationType"
            labelText="Job Location Type"
            items={jobLocationTypeOptions}
            defaultValue={jobLocationType}
            required
          />
          <FormSelectInput
            name="jobStatus"
            labelText="Job Status"
            items={jobStatusOptions}
            defaultValue={jobStatus}
            required
          />
          <FormSelectInput
            name="jobType"
            labelText="Job Type"
            items={jobTypeOptions}
            defaultValue={jobType}
            required
          />
        </div>
        <div className="mt-4">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? <Loader2 className="animate-spin" /> : "Edit Job"}
          </Button>
        </div>
      </Form>
    </section>
  );
};

export default EditJob;
