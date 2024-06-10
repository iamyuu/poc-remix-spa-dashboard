import { Button } from "~/components/ui/button";

export default function CustomerPage() {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Customer</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            You have no customer yet
          </h3>
          <Button className="mt-4">Add Customer</Button>
        </div>
      </div>
    </>
  );
}
