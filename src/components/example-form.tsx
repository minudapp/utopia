"use client";

import z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { getZodConstraint } from "@/utils/constraint";

const formSchema = z.object({
  username: z
    .string()
    .min(2, "Username must be at least 2 characters.")
    .max(50, "Username must be at most 50 characters."),
});

export function ProfileForm() {
  const constraint = getZodConstraint(formSchema);

  return (
    <Form className="space-y-8">
      <FormField name="username">
        <FormLabel>Username</FormLabel>
        <FormControl>
          <Input
            placeholder="shadcn"
            autoComplete="username"
            {...constraint.username}
          />
        </FormControl>
        <FormDescription>This is your public display name.</FormDescription>
        <FormMessage />
      </FormField>
      <Button type="submit">Submit</Button>
    </Form>
  );
}
