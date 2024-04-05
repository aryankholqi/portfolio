import { newsLetter } from "@/interfaces/newsLetterForm.interface";
import { Input } from "@nextui-org/react";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import inboxIcon from "@/public/icons/outlined/inbox.svg";
import paperAirplaneIcon from "@/public/icons/solid/paperAirplane.svg";
import Image from "next/image";
import toast from "react-hot-toast";

export default function NewsLetterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<newsLetter>();

  const submitFormHandler: SubmitHandler<newsLetter> = async (data) => {
    toast.promise(
      fetch("/api/sendNews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: data.email }),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to send email");
          }
          return res.json();
        })
        .then(() => {
          reset();
        }),
      {
        loading: "Loading...",
        success: <p>Your email has been successfully added</p>,
        error: <p>Uh oh, there was an error!</p>,
      }
    );
  };

  return (
    <form className="mt-2">
      <Input
        type="email"
        label={"Email"}
        placeholder="you@example.com"
        labelPlacement="outside-left"
        description="I'll share my future products with you"
        {...register("email", {
          required: "Please write your email",
        })}
        errorMessage={Boolean(errors.email) && errors.email?.message}
        startContent={<Image src={inboxIcon} alt="" width={20} />}
        endContent={
          <Image
            src={paperAirplaneIcon}
            alt=""
            width={20}
            className="cursor-pointer"
            onClick={handleSubmit(submitFormHandler)}
          />
        }
      />
    </form>
  );
}
