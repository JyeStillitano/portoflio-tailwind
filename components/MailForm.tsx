import { FormEventHandler } from "react";

export default function MailForm() {
  return (
    <form>
      <div className="my-8">
        <label className="ml-2 text-content">Name: *</label>
        <input
          type="text"
          className="mt-2 w-full rounded-xl border-2 border-accent bg-background p-2 text-content"
        />
      </div>
      <div className="my-8">
        <label className="mb-2 ml-2 text-content">Email: *</label>
        <input
          type="text"
          className="mt-2 w-full rounded-xl border-2 border-accent bg-background p-2 text-content"
        />
      </div>
      <div className="my-8">
        <label className="mb-2 ml-2 text-content">Subject: *</label>
        <input
          type="text"
          className="mt-2 w-full rounded-xl border-2 border-accent bg-background p-2 text-content"
        />
      </div>
      <div className="my-8">
        <label className="mb-2 ml-2 text-content">Message: *</label>
        <input
          type="text"
          className="mt-2 h-48 w-full text-wrap rounded-xl border-2 border-accent bg-background p-2 text-content"
        />
      </div>
      <div className="flex justify-center">
        <input
          type="submit"
          value="Send"
          className="m-4 rounded-full bg-primary px-6 py-2 font-semibold text-content hover:bg-blue-400 hover:shadow-lg"
        />
      </div>
    </form>
  );
}
