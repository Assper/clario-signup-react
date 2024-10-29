"use client";

import {
  emailSchema,
  passwordLengthRules,
  passwordSchema,
  Signup,
  signupSchema,
} from "@/shared/schemas/signup.schema";
import { ChangeEventHandler, FC, useState } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { messages } from "@/i18n/messages";
import {
  containDigit,
  containUpperAndLowerLetter,
  minWithoutSpaces,
} from "@/shared/utils/validation.util";
import { ColorVariant } from "@/shared/utils/color.util";
import { Caption } from "@/shared/components/caption";
import { Title } from "@/shared/components/title";
import { Button } from "@/shared/components/button";
import { TextField } from "@/shared/components/text-field";
import { ShowIcon } from "@/shared/components/icons/show.icon";
import { HideIcon } from "@/shared/components/icons/hide.icon";

type PasswordColor = {
  minLength: ColorVariant;
  letters: ColorVariant;
  digit: ColorVariant;
};

const getPassColors = (val: string): PasswordColor => {
  return {
    minLength: minWithoutSpaces(val, passwordLengthRules.min)
      ? ColorVariant.Success
      : ColorVariant.Initial,
    letters: containUpperAndLowerLetter(val)
      ? ColorVariant.Success
      : ColorVariant.Initial,
    digit: containDigit(val) ? ColorVariant.Success : ColorVariant.Initial,
  };
};

const getErrorColors = (
  val: string,
  currentColors: PasswordColor
): PasswordColor => {
  return {
    minLength: minWithoutSpaces(val, passwordLengthRules.min)
      ? currentColors.minLength
      : ColorVariant.Error,
    letters: containUpperAndLowerLetter(val)
      ? currentColors.letters
      : ColorVariant.Error,
    digit: containDigit(val) ? currentColors.digit : ColorVariant.Error,
  };
};

export const SignupForm: FC = () => {
  const { register, handleSubmit } = useForm<Signup>({
    resolver: zodResolver(signupSchema),
  });
  const [emailVariant, setEmailVariant] = useState<ColorVariant>(
    ColorVariant.Initial
  );
  const [passwordVariant, setPasswordVariant] = useState<ColorVariant>(
    ColorVariant.Initial
  );
  const [isShowPassword, setShowPassword] = useState(false);
  const [passwordColors, setPasswordColors] = useState<PasswordColor>({
    minLength: ColorVariant.Initial,
    letters: ColorVariant.Initial,
    digit: ColorVariant.Initial,
  });

  const toggleShowPassword = () => {
    setShowPassword(!isShowPassword);
  };

  const onPasswordChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const val = e.target.value;
    setPasswordColors(getPassColors(val));
    const { success } = passwordSchema.safeParse(val);
    setPasswordVariant(success ? ColorVariant.Success : ColorVariant.Initial);
  };

  const onEmailChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const val = e.target.value;
    const { success } = emailSchema.safeParse(val);
    setEmailVariant(success ? ColorVariant.Success : ColorVariant.Initial);
  };

  const onError: SubmitErrorHandler<Signup> = (errors) => {
    if (errors.password) {
      const val = errors.password.ref?.value ?? "";
      setPasswordColors(getErrorColors(val, passwordColors));
      setPasswordVariant(ColorVariant.Error);
    }

    if (errors.email) {
      setEmailVariant(ColorVariant.Error);
    }
  };

  const onSubmit: SubmitHandler<Signup> = (data) => {
    console.log({ data });
    alert("Success!");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="w-full max-w-80 p-1 flex flex-col items-center"
    >
      <Title className="m-8">{messages.auth.signup.title}</Title>
      <TextField
        {...register("email")}
        className="m-2 w-full"
        onChange={onEmailChange}
        placeholder={messages.auth.signup.email.placeholder}
        variant={emailVariant}
      />
      <TextField
        {...register("password")}
        type={isShowPassword ? "text" : "password"}
        className="m-2 w-full"
        variant={passwordVariant}
        onChange={onPasswordChange}
        placeholder={messages.auth.signup.password.placeholder}
        maxLength={passwordLengthRules.max}
        actionIcon={
          isShowPassword ? (
            <ShowIcon onClick={toggleShowPassword} variant={passwordVariant} />
          ) : (
            <HideIcon onClick={toggleShowPassword} variant={passwordVariant} />
          )
        }
      />
      <div className="py-3 px-5 w-full">
        <Caption color={passwordColors.minLength}>
          {messages.auth.signup.password.rules.minLength}
        </Caption>
        <Caption color={passwordColors.letters}>
          {messages.auth.signup.password.rules.letters}
        </Caption>
        <Caption color={passwordColors.digit}>
          {messages.auth.signup.password.rules.digits}
        </Caption>
      </div>
      <Button type="submit" className="m-2 mt-8 max-w-60">
        {messages.auth.signup.submit}
      </Button>
    </form>
  );
};
