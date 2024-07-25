import { useRef } from "react";
import { Form, Link, useNavigation, useSubmit } from "react-router-dom";
import { Loader2 } from "lucide-react";

import {
  jobLocationTypeOptions,
  jobStatusOptions,
  jobTypeOptions,
} from "@/constants/jobs-data";

import { FormInput } from "./form-input";
import { FormSelectInput } from "./form-select-input";
import { Button, buttonVariants } from "./ui/button";

export const SearchBar: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const submit = useSubmit();

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const queryParams: Record<string, string> = {};

    formData.forEach((value, key) => {
      if (value) {
        queryParams[key] = value.toString();
      }
    });

    submit(new URLSearchParams(queryParams).toString());
  };

  const handleFormReset = () => {
    formRef.current?.reset();
  };

  return (
    <section className="mt-4">
      <h2 className="text-2xl font-bold mb-4">Search For Job Submissions</h2>

      <Form ref={formRef} onSubmit={handleFormSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <FormInput
            type="text"
            name="searchTerm"
            labelText="Search By Term"
            className="col-span-2"
            placeholder="Fullstack Developer..."
          />
          <FormSelectInput
            name="jobLocationType"
            labelText="Job Location Type"
            items={jobLocationTypeOptions}
          />
          <FormSelectInput
            name="jobStatus"
            labelText="Job Status"
            items={jobStatusOptions}
          />
          <FormSelectInput
            name="jobType"
            labelText="Job Type"
            items={jobTypeOptions}
          />
          <FormSelectInput
            name="sortBy"
            labelText="Sort By"
            items={[
              { label: "Newest", value: "newest" },
              { label: "Oldest", value: "oldest" },
              { label: "Position A-Z", value: "a-z" },
              { label: "Position Z-A", value: "z-a" },
            ]}
          />
        </div>
        <div className="mt-4 space-x-2">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? <Loader2 className="animate-spin" /> : "Search"}
          </Button>
          <Link
            to="/dashboard"
            className={buttonVariants({ variant: "outline" })}
            onClick={handleFormReset}
          >
            Reset
          </Link>
        </div>
      </Form>
    </section>
  );
};
