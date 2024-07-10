import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import RootLayout from "./store/layout";
import Store from "./store/page";

export default function Page() {
  return (
    <RootLayout>
      <Store />
    </RootLayout>
  );
}
