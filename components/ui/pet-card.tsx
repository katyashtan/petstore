import { Pet } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";

export interface PetCardProps {
  pet: Pet;
}

export const PetCard = ({ pet }: PetCardProps) => (
  <div key={pet.id} className="bg-card rounded-lg overflow-hidden shadow-sm">
    {!!pet.photoUrls.length && (
      <Image
        src={pet.photoUrls[0]}
        width={300}
        height={200}
        alt={pet.name}
        className="w-full h-48 object-cover"
      />
    )}
    <div className="p-4 space-y-2">
      <h3 className="text-lg font-semibold">{pet.name}</h3>
      <p className="text-muted-foreground text-sm">
        {[pet.category?.name, pet.status].join(", ")}
      </p>
      <div className="flex justify-between">
        {pet.status === "sold" ? (
          <Button disabled>Buy</Button>
        ) : (
          <Link
            href={`/store/pets/${pet.id}`}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            prefetch={false}
          >
            Buy
          </Link>
        )}

        <div className="font-bold text-xl">{pet.price} $</div>
      </div>
    </div>
  </div>
);
