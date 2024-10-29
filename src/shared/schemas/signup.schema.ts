import { z } from "zod";
import {
  containDigit,
  containUpperAndLowerLetter,
  minWithoutSpaces,
} from "../utils/validation.util";

export const passwordLengthRules = {
  min: 8,
  max: 64,
} as const;

export const emailSchema = z.string().email();
export const passwordSchema = z
  .string()
  .max(passwordLengthRules.max)
  .refine((value) => minWithoutSpaces(value, passwordLengthRules.min))
  .refine(containUpperAndLowerLetter)
  .refine(containDigit);
export const signupSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export type Signup = z.infer<typeof signupSchema>;
