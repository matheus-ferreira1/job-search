import { ActionFunction, redirect } from "react-router-dom";
import { toast } from "sonner";

import { api } from "@/lib/axios";

export const action: ActionFunction = async ({ params }) => {
  try {
    await api.delete(`/jobs/${params.id}`);
    toast.success("Job deleted successfully");
    return redirect("/dashboard");
  } catch (err) {
    // @ts-expect-error catching error
    toast.error(err.response.data.msg);
    return err;
  }
};
