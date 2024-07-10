import { HomeIcon, PawPrintIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Layout from "./store/layout";

export default function NotFound() {
  return (
    <Layout>
      <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md text-center">
          <div className="inline-block rounded-full bg-primary p-4">
            <PawPrintIcon className="h-12 w-12 text-primary-foreground" />
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Oops! The pet you&apos;re looking for seems to have wandered off!
          </h1>
          <p className="mt-4 text-muted-foreground">
            Don&apos;t worry, we&apos;ll help you find your furry (or scaly)
            friend. In the meantime, feel free to explore our other pet-tastic
            offerings.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              prefetch={false}
            >
              <HomeIcon className="mr-2 h-4 w-4" />
              Go to Homepage
            </Link>
            <Link
              href="/store/pets"
              className="inline-flex items-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              prefetch={false}
            >
              <PawPrintIcon className="mr-2 h-4 w-4" />
              Shop Pets
            </Link>
          </div>
        </div>
        <div className="mt-12 sm:mt-16">
          <Image
            src="/placeholder.svg"
            alt="404 illustration"
            width={300}
            height={300}
            className="mx-auto"
          />
        </div>
      </div>
    </Layout>
  );
}
