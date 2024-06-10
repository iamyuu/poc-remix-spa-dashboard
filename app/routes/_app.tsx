import { Link, Outlet } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import { Menu } from "lucide-react";
import { menus } from "~/constants/menu";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"

const brandName = "Acme Inc";
function BrandIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      {...props}
    >
      <g fill="currentColor">
        <path d="M216 96v120H96l-56-56V40h120Z" opacity=".2" />
        <path d="m221.66 90.34l-56-56A8 8 0 0 0 160 32H40a8 8 0 0 0-8 8v120a8 8 0 0 0 2.3 5.61l56 56A8 8 0 0 0 96 224h120a8 8 0 0 0 8-8V96a8 8 0 0 0-2.34-5.66M168 59.31L196.69 88H168ZM88 196.69L59.31 168H88ZM88 152H48V59.31l40 40ZM59.31 48H152v40H99.31ZM152 104v48h-48v-48Zm-48 104v-40h52.69l40 40Zm104-11.31l-40-40V104h40Z" />
      </g>
    </svg>
  );
}

function ProfileSidenav() {
  return (
    <div
      role="button"
      className="flex items-center space-x-3 hover:bg-muted p-1 rounded-md"
    >
      <Avatar>
        <AvatarImage src="https://i.pravatar.cc/150?img=68" alt="Avatar" />
        <AvatarFallback>M</AvatarFallback>
      </Avatar>

      <div className="flex flex-col flex-1">
        <span className="text-md font-semibold">Mark</span>
        <span className="text-sm text-muted-foreground">mark@mail.co</span>
      </div>
    </div>
  );
}

function Sidenav() {
  return (
    <aside className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center px-4 lg:h-[60px] lg:px-6">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <BrandIcon className="h-6 w-6" />
            {brandName}
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {menus.map((menu) => {
              return (
                <Link
                  key={menu.title}
                  to={menu.to}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <menu.icon className="h-4 w-4" />
                  {menu.title}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="mt-auto p-4">
          <ProfileSidenav />
        </div>
      </div>
    </aside>
  );
}

function MobileSidenav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="shrink-0">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <nav className="grid gap-2 text-lg font-medium">
          <Link
            to="#"
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <BrandIcon className="h-6 w-6" />
            <span className="sr-only">{brandName}</span>
          </Link>

          {menus.map((menu) => {
            return (
              <Link
                key={menu.title}
                to={menu.to}
                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <menu.icon className="h-5 w-5" />
                {menu.title}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

function ProfileHeader() {
  return (
    <Avatar className="w-8 h-8">
      <AvatarImage src="https://i.pravatar.cc/150?img=68" alt="Avatar" />
      <AvatarFallback>M</AvatarFallback>
    </Avatar>
  )
}

function MobileHeader() {
  return (
    <header className="flex justify-between items-center h-14 gap-4 px-2 md:hidden">
      <MobileSidenav />
      <ProfileHeader />
    </header>
  );
}

export default function AppLayout() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidenav />
      <div className="flex flex-col">
        <MobileHeader />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
