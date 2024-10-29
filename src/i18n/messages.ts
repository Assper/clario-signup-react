export const messages = {
  auth: {
    signup: {
      title: "Sign up",
      email: {
        placeholder: "Create your email",
      },
      password: {
        placeholder: "Create your password",
        rules: {
          minLength: "8 characters or more (no spaces)",
          letters: "Uppercase and lowercase letters",
          digits: "At least one digit",
        },
      },
      submit: "Sign up",
    },
  },
} as const;
