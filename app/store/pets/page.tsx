import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { fetchMocked } from "@/lib/utils";
import { PetCard } from "@/components/ui/pet-card";
import { Pagination } from "@/components/ui/pagination";

export const getData = async (pageIndex: number) => {
  const res = await fetchMocked("pets");
  const pets = await res.json();
  return {
    pets: pets.slice(4 * (pageIndex - 1), 4 * pageIndex),
    total: pets.length,
  };
};

interface PetPageProps {
  searchParams: { pageIndex?: string };
}

export default async function Pets({ searchParams }: PetPageProps) {
  const pageIndex = +(searchParams.pageIndex || 1);
  const { pets, total } = await getData(pageIndex);
  return (
    <>
      <section className="w-full py-12 md:py-16 lg:py-16">
        <div className="container">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Explore Our Pet Selection
            </h2>
            <p className="text-muted-foreground text-lg">
              Browse our wide range of pets available for purchase.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {pets.map((pet) => (
              <PetCard key={pet.id} pet={pet} />
            ))}
          </div>
        </div>
        <div className="mt-16">
          <Pagination
            currentPage={pageIndex}
            totalPages={total / 4}
            baseHref={"/store/pets"}
          />
        </div>
      </section>
      <section className="w-full bg-primary text-primary-foreground py-12 md:py-24 lg:py-32">
        <div className="container grid gap-6 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">
              Your Pet Profile
            </h2>
            <p className="text-lg">
              Manage your pet&apos;s information and preferences.
            </p>
            <Link
              href="/store/profile"
              className="inline-flex items-center justify-center rounded-md bg-primary-foreground px-6 py-2 text-sm font-medium text-primary shadow-sm transition-colors hover:bg-primary-foreground/90 focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2"
              prefetch={false}
            >
              View Profile
            </Link>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Avatar className="w-24 h-24">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>PF</AvatarFallback>
            </Avatar>
            <div className="text-center">
              <h3 className="text-lg font-semibold">Katya</h3>
              <p className="text-sm">Pet Owner</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
