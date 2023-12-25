"use client";

import { useUser, UserButton, SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import NavTabs from "@/components/tabs";
import NavSheet from "./sheet";

const Navbar = () => {
  const { isSignedIn, isLoading } = useUser();

  return (
    <>
      <div
        className={cn(
          "flex items-center justify-between space-y-2"
        )}
      >
        <div>
          <h2 className="text-3xl font-bold tracking-tight hidden md:block">
            Dashboard
          </h2>
          <div className="md:hidden">
            <NavSheet />
          </div>
        </div>
        <div>
          {isSignedIn ? (
            <UserButton />
          ) : (
            <div className="space-x-2">
              <SignInButton mode="modal">
                <Button variant="ghost">Sign In</Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button>Sign Up</Button>
              </SignUpButton>
            </div>
          )}
        </div>
      </div>
      <NavTabs />
    </>
  );
};

export default Navbar;
