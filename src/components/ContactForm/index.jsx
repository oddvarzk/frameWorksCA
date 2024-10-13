import { useForm } from "react-hook-form";
import Input from "./Input";
import { GrMail } from "react-icons/gr";

export function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="container"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Input
          label="Name"
          type="text"
          id="name"
          placeholder="Type your full name"
          required
          {...register("fullname", {
            required: "Full name is required",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters long"
            }
          })}
        />
        <Input
          label="Subject"
          type="text"
          id="subject"
          placeholder="Subject"
          required
          {...register("subject", {
            required: "Subject is required",
            minLength: {
              value: 3,
              message: "Subject must be at least 3 characters long"
            }
          })}
        />
        <Input
          label="Email"
          type="email"
          id="email"
          placeholder="Enter your email"
          required
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
              message: "Must be a valid email address"
            }
          })}
        />
        <Input
          label="Body"
          type="text"
          id="body"
          placeholder="Your message"
          required
          {...register("body", {
            required: "Message is required",
            minLength: {
              value: 3,
              message: "Message must be at least 3 characters long"
            }
          })}
        />
      </div>
      {errors.fullname && <p>{errors.fullname.message}</p>}
      {errors.subject && <p>{errors.subject.message}</p>}
      {errors.email && <p>{errors.email.message}</p>}
      {errors.body && <p>{errors.body.message}</p>}
      <div className="mt-5">
        <button
          type="submit"
          className="flex items-center gap-1 p-5 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-800"
        >
          <GrMail />
          Submit Form
        </button>
      </div>
    </form>
  );
}

export default ContactForm;

