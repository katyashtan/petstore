import { Button } from "@/components/ui/button";
import { fetchMocked } from "@/lib/utils";
import { MinusIcon, PlusIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const getData = async () => {
  const res = await fetchMocked("cart");
  const items = await res.json();
  return {
    items,
    total: items.reduce((acc, item) => acc + item.price * item.quantity, 0),
  };
};

export default async function Page() {
  const cart = await getData();
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <h1 className="text-2xl font-bold mb-8">Your Cart</h1>
      <div className="grid gap-6 md:gap-8">
        <div className="grid gap-4">
          {cart.items.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-[80px_1fr_auto] items-center gap-4"
            >
              {item.photoUrls[0] && (
                <Image
                  src={item.photoUrls[0]}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-md object-cover"
                />
              )}
              <div className="grid gap-1">
                <h3 className="font-semibold">{item.name}</h3>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon">
                    <MinusIcon className="w-4 h-4" />
                  </Button>
                  <span>{item.quantity}</span>
                  <Button variant="outline" size="icon">
                    <PlusIcon className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="font-medium">${item.price.toFixed(2)}</div>
            </div>
          ))}
        </div>
        <div className="border-t pt-6 grid gap-4">
          <div className="flex items-center justify-between">
            <span className="font-medium">Total</span>
            <span className="text-2xl font-bold">${cart.total.toFixed(2)}</span>
          </div>
          <div className="flex gap-4">
            <Link href="/store/pets" className="flex flex-1">
              <Button variant="outline" className="flex-1">
                Continue Shopping
              </Button>
            </Link>
            <Button className="flex-1">Proceed to Checkout</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
