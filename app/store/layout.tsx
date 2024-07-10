import { PawPrintIcon, ShoppingCartIcon, UserIcon } from "lucide-react";
import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-full">
      <header className="sticky bg-primary text-primary-foreground top-0 z-10 flex min-h-16 items-center justify-between border-b bg-background px-4 md:px-6">
        <Link href="/" className="text-2xl font-bold" prefetch={false}>
          Paw-some Pets
        </Link>
        <div className="flex gap-4">
          <Link
            href="/store/cart"
            className="text-2xl font-bold"
            prefetch={false}
          >
            <ShoppingCartIcon className="h-6 w-6" />
            <span className="sr-only">Cart</span>
          </Link>
          <Link
            href="/store/profile"
            className="text-2xl font-bold"
            prefetch={false}
          >
            <UserIcon className="h-6 w-6" />
            <span className="sr-only">Profile</span>
          </Link>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-primary text-primary-foreground py-6 px-6 mt-auto">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <PawPrintIcon className="h-6 w-6" />
            <span className="text-lg font-semibold">Pet Store</span>
          </div>
          <p className="text-sm">
            &copy; 2024 Paw-some Pets. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
