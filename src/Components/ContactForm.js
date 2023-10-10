import React from "react";
import { useForm } from "react-hook-form";
import Loader from "../../public/img/loader.svg";
import styles from "./ContactForm.module.scss";
import Image from "next/image";
//  REMEMBER TO SET YOUR ACCES KEY
// <input
//   type="hidden"
//   value="5dc80ba7-d9d1-43bd-9e92-7826a36d3490"
//   {...register("access_key")}
// />

/*
A React component that displays a contact form.
Uses useForm hook from react-hook-form library to manage form state and validation.
Uses useState hook to manage state of form submission and success/error messages.
Submits form data to web3forms API endpoint.
*/
export default function ContactForm() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });

  //Declares state variables for form submission success and error messages.
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [Message, setMessage] = React.useState("");

  /*
Handles form submission.
Sets subject field value to "{name} sent a message from your website".
Submits form data to web3forms API endpoint.
Sets success and error messages based on API response.
Resets form on successful submission.

REMEMBER TO SET YOUR ACCES KEY
            <input
              type="hidden"
              value="5dc80ba7-d9d1-43bd-9e92-7826a36d3490"
              {...register("access_key")}
            />
*/
  const onSubmit = async (data, e) => {
    console.log(data);
    setValue("subject", `${data.name} sent a message from your website`);
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data, null, 2),
    })
      .then(async (response) => {
        let json = await response.json();
        if (json.success) {
          setIsSuccess(true);
          setMessage(json.message);
          e.target.reset();
          reset();
        } else {
          setIsSuccess(false);
          setMessage(json.message);
        }
      })
      .catch((error) => {
        setIsSuccess(false);
        setMessage("Client Error. Please check the console.log for more info");
        console.log(error);
      });
  };

  return (
    <>
      <div className={styles.ConactFormWrapper} id="contact-form">
        <div>
          <h2>Work With Me</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/*Various hidden inputs*/}
            <input
              type="hidden"
              value="5dc80ba7-d9d1-43bd-9e92-7826a36d3490"
              {...register("access_key")}
            />
            <input type="hidden" {...register("subject")} />
            <input
              type="hidden"
              value="Contact Form Submission"
              {...register("from_name")}
            />
            <input
              type="checkbox"
              id=""
              style={{ display: "none" }}
              {...register("botcheck")}
            />

            {/*Input field for Name*/}
            <div className={styles.inputContainer}>
              <input
                type="text"
                placeholder="Name"
                autoComplete="false"
                required
                {...register("name")}
              />
            </div>

            {/*Input field for Email*/}
            <div className={styles.inputContainer}>
              <input
                id="email_address"
                type="email"
                placeholder="Email Address"
                name="email"
                autoComplete="false"
                required
                {...register("email")}
              />
            </div>

            {/*Input field for Message*/}
            <div className={styles.inputContainer}>
              <textarea
                name="message"
                placeholder="Your Message"
                required
                {...register("message", { required: "Enter your Message" })}
              />
            </div>

            {/*Submit Button and loader*/}
            <div className={styles.buttonLoaderContainer}>
              <button
                type="submit"
                className={`${
                  isSubmitting || isSubmitSuccessful ? styles.loading : ""
                } `}
              >
                Submit
              </button>
              {/*Loader*/}
              <div className={styles.loaderContainer}>
                <Image
                  className={`${styles.loader} ${
                    isSubmitting ? styles.loading : ""
                  }`}
                  src={Loader}
                  alt="Loading Icon"
                />
              </div>
              {/*Submission message*/}
              <div className={styles.submissionMessageContainer}>
                {/*Successful Submission message*/}
                {isSubmitSuccessful && isSuccess && (
                  <>
                    <div className={styles.successfulSubmission}>
                      <h3>Success</h3>
                      <p>{Message}</p>
                    </div>
                  </>
                )}

                {/*Unsuccessful Submission message*/}
                {isSubmitSuccessful && !isSuccess && (
                  <div className={styles.errorSubmission}>
                    <h3>Error, something odd happened</h3>
                    <p>
                      Please e-mail us directly as contact@vssbox.com, sorry!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
