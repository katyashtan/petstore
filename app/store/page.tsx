import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import { fetchMocked } from "@/lib/utils";
import { PetCard } from "@/components/ui/pet-card";

export const getData = async () => {
  const res = await fetchMocked("pets");
  const pets = await res.json();
  return pets.slice(0, 4);
};

export default async function Store() {
  const pets = await getData();
  return (
    <>
      <main className="flex-1">
        <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
          <div className="container grid gap-6 md:grid-cols-2 items-center">
            <Image
              src={
                "https://www.perfectpetinsurance.co.uk/wp-content/uploads/2023/06/PP_Desktop_banner_Redesign_dog_cat_v2.png"
              }
              width={700}
              height={500}
              alt="Pets"
              className="mx-auto rounded-lg object-cover"
            />
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight">
                Find Your Perfect Pet
              </h1>
              <p className="text-muted-foreground text-lg">
                Discover a wide variety of pets available for purchase at our
                pet store.
              </p>
              <div className="flex gap-2">
                <Link
                  href="/store/pets"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  prefetch={false}
                >
                  Shop Pets
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
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
        </section>
        <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
          <div className="container grid gap-6 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">
                Shop with Confidence
              </h2>
              <p className="text-muted-foreground text-lg">
                Our pet store offers a wide selection of healthy and
                well-cared-for pets. Visit us today to find your new furry
                friend!
              </p>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                prefetch={false}
              >
                Visit Pet Store
              </Link>
            </div>
            <Image
              src="https://pngimg.com/d/monkey_PNG18728.png"
              width={700}
              height={500}
              alt="Pets"
              className="mx-auto rounded-lg object-cover"
            />
          </div>
        </section>
      </main>
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
