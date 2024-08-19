"use client";

import { FormEvent } from "react";

export default function MailForm() {
  // Handles the submission of the contact form and appropriate API call.
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // Prevent default behaviour (navigation).
    event.preventDefault();

    // Collect the form data from the form submit event.
    const formData = new FormData(event.currentTarget);

    // Call email API, attempt to POST message.
    try {
      const response = await fetch("/api/email", {
        method: "post",
        body: formData,
      });

      // If failed, throw error with response status.
      if (!response.ok)
        throw new Error(
          `Response Status: ${response.status} - ${response.json}`,
        );

      // Handle response, popup toast message.
      alert("Message successfully delivered.");
    } catch (error) {
      // Handle response, popup toast message.
      alert("Message failed to be delivered. Please try again.");
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="my-8">
        <label className="ml-2 text-content" htmlFor="form-name">
          Name: *
        </label>
        <input
          type="text"
          id="form-name"
          name="name"
          className="mt-2 w-full rounded-xl border-2 border-accent bg-background p-2 text-content"
        />
      </div>
      <div className="my-8">
        <label className="mb-2 ml-2 text-content" htmlFor="form-email">
          Email: *
        </label>
        <input
          type="text"
          id="form-email"
          name="email"
          className="mt-2 w-full rounded-xl border-2 border-accent bg-background p-2 text-content"
        />
      </div>
      <div className="my-8">
        <label className="mb-2 ml-2 text-content" htmlFor="form-subject">
          Subject: *
        </label>
        <input
          type="text"
          id="form-subject"
          name="subject"
          className="mt-2 w-full rounded-xl border-2 border-accent bg-background p-2 text-content"
        />
      </div>
      <div className="my-8">
        <label className="mb-2 ml-2 text-content" htmlFor="form-message">
          Message: *
        </label>
        <textarea
          id="form-message"
          name="message"
          className="mt-2 h-48 w-full text-wrap rounded-xl border-2 border-accent bg-background p-2 text-content"
        />
      </div>
      <div className="flex justify-center">
        <input
          type="submit"
          value="Send"
          className="m-4 rounded-full bg-primary px-6 py-2 font-semibold text-content hover:cursor-pointer hover:bg-black hover:shadow-lg"
        />
      </div>
    </form>
  );
}
