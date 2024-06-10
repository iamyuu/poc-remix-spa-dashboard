import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  type MetaFunction,
} from "@remix-run/react";
import { AppProviders } from "~/providers/app-providers";
import stylesheet from "~/styles/global.css?url";
import "@fontsource-variable/public-sans";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix SPA Dashboard" },
    {
      name: "description",
      content: "A template for building a SPA dashboard with Remix.",
    },
  ];
};

export const links = () => [{ rel: "stylesheet", href: stylesheet }];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <AppProviders>{children}</AppProviders>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export { PendingFallback as HydrateFallback } from "~/components/fallback/pending";
// export {ErrorFallback as ErrorBoundary} from '~/components/fallback/error'
