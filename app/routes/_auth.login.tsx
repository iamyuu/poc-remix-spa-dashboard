import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { FormField } from "~/components/form/form-field";
import { useFormMutation } from "~/hooks/use-form-mutation";
import { loginWithEmailAndPassword } from "~/features/auth/services/login";
import { LoginSchema } from "~/features/auth/schemas/login";
import { useNavigate } from "@remix-run/react";

function LoginForm() {
  const navigate = useNavigate();
  const { form } = useFormMutation({
    schema: LoginSchema,
    mutationFn: loginWithEmailAndPassword,
    onSuccess: (newSession) => {
      console.log("newSession", newSession);
      navigate("/");
    },
  });

  return (
    <form {...form.getFormProps()}>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <FormField label="Email" {...form.getFieldProps("email")}>
            <Input type="email" placeholder="m@mail.co" />
          </FormField>

          <FormField label="Password" {...form.getFieldProps("password")}>
            <Input type="password" />
          </FormField>
        </CardContent>
        <CardFooter>
          <Button {...form.getButtonSubmitProps()} className="w-full">
            Sign in
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <LoginForm />
    </div>
  );
}
