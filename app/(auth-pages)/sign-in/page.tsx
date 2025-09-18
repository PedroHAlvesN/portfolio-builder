import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;
  return (
    <Card className={["max-w-[450px]", "h-fit"]}>
      <form className="w-full flex-1 flex flex-col">
        <h2 className="text-2xl font-bold text-white">Log into your account and create your ideal portfolio.</h2>
        <small className="text-sm text text-foreground mt-[8px]">
            Doesn't have an account?{" "}
            <Link className="text-primary font-medium underline" href="/sign-up">
              Sign up
            </Link>
        </small>
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <Label htmlFor="email">Email</Label>
          <Input name="email" placeholder="you@example.com" required />
          <div className="flex justify-between items-center">
            <Label htmlFor="password">Password</Label>
            <Link
              className="text-xs text-foreground underline"
              href="/forgot-password"
            >
              Forgot Password?
            </Link>
          </div>
          <Input
            type="password"
            name="password"
            placeholder="Your password"
            required
          />
          <SubmitButton pendingText="Signing In..." formAction={signInAction} className="mt-[64px]">
            Sign in
          </SubmitButton>
          <FormMessage message={searchParams} />
        </div>
      </form>
  </Card>
  );
}
