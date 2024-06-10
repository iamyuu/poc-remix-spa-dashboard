import { zodResolver } from "@hookform/resolvers/zod";
import {
  type FieldPath,
  type FieldValues,
  type UseFormProps,
  useForm as useHookForm,
} from "react-hook-form";
import type { z } from "zod";
import type { FormFieldProps } from "~/components/form/form-field";
import type { ButtonProps } from "~/components/ui/button";

export interface UseFormOptions<TFields extends FieldValues>
  extends Omit<UseFormProps<TFields>, "resolver"> {
  /**
   * The Zod schema to validate the form
   * This also will be used to infer the type of the form
   */
  schema: z.Schema<TFields>;
}

/**
 * A hook to manage form state and validation with Zod schema
 *
 * @usage
 * ```tsx
 * const AwesomeSchema = z.object({ awesome: z.any() });
 *
 * function FormAwesome() {
 * 	const form = useForm({ schema: AwesomeSchema });
 *
 * 	const onSubmit = form.handleSubmit((data) => console.log(data));
 *
 * 	return (
 * 		<form onSubmit={onSubmit}>
 * 			<FormField {...form.getFieldProps("awesome")}>
 * 				<Input />
 * 			</FormField>
 * 			<Button {...form.getButtonSubmitProps()}>Submit</Button>
 * 		</form>
 * 	);
 * }
 * ```
 */
export function useForm<TValues extends FieldValues = FieldValues>({
  schema,
  ...options
}: UseFormOptions<TValues>) {
  const form = useHookForm({
    ...options,
    resolver: zodResolver(schema),
  });

  return {
    ...form,

    /**
     * Set the props for the `FormForm` component
     */
    getFieldProps: (name: FieldPath<TValues>) =>
      ({
        ...form.register(name),
        ...form.getFieldState(name),
      }) satisfies Partial<FormFieldProps>,

    /**
     * Set the props for the button
     */
    getButtonSubmitProps: (props: ButtonProps = {}) =>
      ({
        ...props,
        disabled: form.formState.isSubmitting || props.disabled,
        type: "submit",
      }) satisfies ButtonProps,
  };
}
