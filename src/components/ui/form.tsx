"use client";

import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import { createContext, useContext, useId } from "react";

import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

function Form({
  asChild,
  ...props
}: React.ComponentProps<"form"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "form";
  return <Comp {...props} />;
}

type FormFieldContextValue = {
  id: string;
  name: string;
  error?: string;
};

const FormFieldContext = createContext<FormFieldContextValue | null>(null);

type FormFieldProps = React.ComponentProps<"div"> & {
  name: string;
  error?: string;
  className?: string;
};

function FormField({
  name,
  error,
  className,
  children,
  ...props
}: FormFieldProps) {
  const id = useId();

  return (
    <FormFieldContext.Provider value={{ name, error, id }}>
      <div
        data-slot="form-field"
        className={cn("grid gap-2", className)}
        {...props}
      >
        {children}
      </div>
    </FormFieldContext.Provider>
  );
}

function useFormField() {
  const fieldContext = useContext(FormFieldContext);
  if (!fieldContext) {
    throw new Error("useFormField must be used within FormField");
  }

  const { name, error, id } = fieldContext;

  return {
    id,
    name,
    error,
    formFieldId: `${id}-form-field`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
  };
}

function FormLabel({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  const { error, formFieldId } = useFormField();
  return (
    <Label
      data-slot="form-label"
      data-error={!!error}
      className={cn("data-[error=true]:text-destructive", className)}
      htmlFor={formFieldId}
      {...props}
    />
  );
}

function FormControl(props: React.ComponentProps<typeof Slot>) {
  const { error, formFieldId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      data-slot="form-control"
      id={formFieldId}
      aria-describedby={
        !error ? formDescriptionId : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
}

function FormDescription({ className, ...props }: React.ComponentProps<"p">) {
  const { formDescriptionId } = useFormField();
  return (
    <p
      data-slot="form-description"
      id={formDescriptionId}
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function FormMessage({ className, ...props }: React.ComponentProps<"p">) {
  const { error, formMessageId } = useFormField();
  const body = error ?? props.children;
  if (!body) {
    return null;
  }

  return (
    <small
      data-slot="form-message"
      id={formMessageId}
      role="alert"
      className={cn("text-destructive text-sm", className)}
      {...props}
    >
      {body}
    </small>
  );
}

function FormFieldset({
  className,
  ...props
}: React.ComponentProps<"fieldset">) {
  return (
    <fieldset
      data-slot="form-fieldset"
      className={cn("rounded border p-4", className)}
      {...props}
    />
  );
}

function FormLegend({ className, ...props }: React.ComponentProps<"legend">) {
  return (
    <legend
      data-slot="form-legend"
      className={cn("text-sm font-semibold", className)}
      {...props}
    />
  );
}

export {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormFieldset,
  FormLabel,
  FormLegend,
  FormMessage,
};
