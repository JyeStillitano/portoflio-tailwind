"use client";

import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

// Mail Form Component - Provides form for contacting email in environment variables.
export default function MailForm() {
  const [sending, setIsSending] = useState(false);

  // Handles the submission of the contact form and appropriate API call.
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // Prevent default behaviour (navigation).
    event.preventDefault();

    // Collect the form data from the form submit event.
    const formData: FormData = new FormData(event.currentTarget);

    // Check required fields are populated.
    if (formData.get("name") == "") {
      toast("Please enter your name.");
      return;
    }
    if (formData.get("email") == "") {
      toast("Please enter your email.");
      return;
    }
    if (formData.get("subject") == "") {
      toast("Please enter a subject for the contact email.");
      return;
    }
    if (formData.get("message") == "") {
      toast("Please enter a message.");
      return;
    }

    // Disable Submit Button
    setIsSending(true);

    // Sending mail toast notification.
    const statusToast = toast.loading("Sending...");

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

      // Toast Notification - Success
      toast.update(statusToast, {
        render: "Message successfully delivered.",
        type: "success",
        autoClose: 4000,
        isLoading: false,
      });
    } catch (error) {
      // Toast Notification - Failed
      toast.update(statusToast, {
        render: "Whoops! Message failed to deliver. Please try again.",
        type: "error",
        autoClose: 4000,
        isLoading: false,
      });
      console.log(error);
    }
    // Enable submit button.
    setIsSending(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="my-3">
        <label className="text-brand-primary ml-2 text-sm" htmlFor="form-name">
          Name: *
        </label>
        <input
          type="text"
          id="form-name"
          name="name"
          className="border-brand-primary text-brand-primary mt-1 w-full rounded-full border-2 bg-white px-4 py-1.5 text-sm"
        />
      </div>
      <div className="my-3">
        <label className="text-brand-primary ml-2 text-sm" htmlFor="form-email">
          Email: *
        </label>
        <input
          type="text"
          id="form-email"
          name="email"
          className="border-brand-primary text-brand-primary mt-1 w-full rounded-full border-2 bg-white px-4 py-1.5 text-sm"
        />
      </div>
      <div className="my-3">
        <label className="text-brand-primary ml-2 text-sm" htmlFor="form-subject">
          Subject: *
        </label>
        <input
          type="text"
          id="form-subject"
          name="subject"
          className="border-brand-primary text-brand-primary mt-1 w-full rounded-full border-2 bg-white px-4 py-1.5 text-sm"
        />
      </div>
      <div className="my-3">
        <label className="text-brand-primary ml-2 text-sm" htmlFor="form-message">
          Message: *
        </label>
        <textarea
          id="form-message"
          name="message"
          className="border-brand-primary text-brand-primary mt-1 h-24 w-full rounded-xl border-2 bg-white px-4 py-2 text-sm"
        />
      </div>
      <div className="sr-only">
        <label className="text-brand-primary mb-2 ml-2" htmlFor="form-url">
          URL: *
        </label>
        <input
          type="text"
          id="form-url"
          name="url"
          tabIndex={-1}
          autoComplete="off"
          className="border-brand-primary mt-2 w-full rounded-xl border-2 bg-white p-2 text-white"
        />
      </div>
      <div className="flex justify-center">
        <input
          type="submit"
          value="Send"
          disabled={sending}
          className="bg-brand-primary m-4 rounded-full px-6 py-2 font-semibold text-white hover:cursor-pointer hover:bg-black hover:shadow-lg disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-black"
        />
      </div>
    </form>
  );
}
