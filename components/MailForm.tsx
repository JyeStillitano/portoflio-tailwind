"use client";

import { FormEvent, useState } from "react";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MailForm() {
  const [sending, setIsSending] = useState(false);

  // Handles the submission of the contact form and appropriate API call.
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // Prevent default behaviour (navigation).
    event.preventDefault();
    setIsSending(true);

    // Collect the form data from the form submit event.
    const formData: FormData = new FormData(event.currentTarget);

    // Sending mail toast notification.
    const statusToast = toast.loading("Sending...", {
      transition: Zoom,
    });

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

      toast.update(statusToast, {
        render: "Message successfully delivered.",
        type: "success",
        autoClose: 4000,
        isLoading: false,
        transition: Zoom,
      });
    } catch (error) {
      // Toast Notification - Failed
      toast.update(statusToast, {
        render: "Whoops! Message failed to deliver. Please try again.",
        type: "error",
        autoClose: 4000,
        isLoading: false,
        transition: Zoom,
      });
      console.log(error);
    }
    setIsSending(false);
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
      <div className="z-[-1] my-8 hidden">
        <label className="mb-2 ml-2 text-content" htmlFor="form-password">
          Password: *
        </label>
        <input
          type="text"
          id="form-password"
          name="password"
          tabIndex={-1}
          autoComplete="off"
          className="mt-2 w-full rounded-xl border-2 border-accent bg-background p-2 text-content"
        />
      </div>
      <div className="flex justify-center">
        <input
          type="submit"
          value="Send"
          disabled={sending}
          className="m-4 rounded-full bg-primary px-6 py-2 font-semibold text-content hover:cursor-pointer hover:bg-black hover:shadow-lg disabled:cursor-not-allowed disabled:bg-disabled disabled:text-black"
        />
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme="dark"
      />
    </form>
  );
}
