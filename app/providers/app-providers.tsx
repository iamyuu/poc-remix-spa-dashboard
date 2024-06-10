import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "~/libs/tanstack-query";

export function AppProviders(props: React.PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  );
}
