import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import "./login.css";
import Link from "next/link";

export function CardWithForm() {
  return (
    <div className="w-[65vw] h-[100vh] margin-auto bg-white flex items-center justify-center bg-primary">
      <Card className="w-[350px] h-min margin-auto">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  placeholder="Type your username"
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Type your password"
                  required
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/">
            <Button>LOGIN</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

export default function Page() {
  return (
    <main className="flex-1">
      <div className="w-full h-full flex justify-center items-center login-page-wrapper">
        <CardWithForm />
      </div>
    </main>
  );
}
