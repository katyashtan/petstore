import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { fetchMocked } from "@/lib/utils";
import Image from "next/image";

export const getData = async () => {
  const res = await fetchMocked("pets");
  const pets = await res.json();
  return pets.slice(0, 4);
};

export default async function Page() {
  const pets = await getData();
  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-background rounded-lg shadow-md p-6">
          <div className="flex items-center gap-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold">Katya</h1>
              <p className="text-muted-foreground">Pet Owner</p>
            </div>
          </div>
          <Separator className="my-6" />
          <h2 className="text-xl font-semibold mb-4">My Pets</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pets.map((pet) => (
              <div key={pet.id} className="bg-muted rounded-lg p-4">
                <Image
                  src={pet.photoUrls[0]}
                  alt={pet.name}
                  width={100}
                  height={100}
                  className="rounded-lg w-full aspect-square object-cover"
                />
                <h3 className="text-lg font-semibold mt-2">{pet.name}</h3>
                <p className="text-muted-foreground">{pet.category.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-background rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Update Profile</h2>
          <form className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="katya@gmail.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
            <Button type="submit" className="justify-self-end">
              Update Profile
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
