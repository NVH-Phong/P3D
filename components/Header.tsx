import Link from "next/link";
import React from "react";
import { ClerkLoaded, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import Container from "./Container";
import { getAllCategories, getMyOrders } from "@/sanity/helpers/queries";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";
import { ListOrdered } from "lucide-react";
import CartIcon from "./CartIcon";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";

const Header = async () => {
  const user = await currentUser();
  const { userId } = await auth();
  let orders = null;
  if (userId) {
    orders = await getMyOrders(userId);
  }
  const categories = await getAllCategories(3);

  return (
    <header className="bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-b-border/50 py-5 shadow-lg shadow-deepPurple/5">
      <Container className="flex items-center justify-between gap-7 text-foreground">
        <HeaderMenu />
        <div className="w-auto md:w-1/3 flex items-center justify-center gap-2.5">
          <MobileMenu />
          <Logo>P3D</Logo>
        </div>
        <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
          <SearchBar />
          <CartIcon />
          <SignedIn>
            <Link href={"/orders"} className="group relative">
              <ListOrdered className="w-6 h-6 group-hover:text-trapperGreen hoverEffect" />
              <span className="absolute -top-1 -right-1 bg-deepPurple text-white h-4 w-4 rounded-full text-xs font-semibold flex items-center justify-center">
                {orders?.length ? orders?.length : 0}
              </span>
            </Link>
          </SignedIn>
          <ClerkLoaded>
            <SignedIn>
              <UserButton />
            </SignedIn>
            {!user && (
              <SignInButton mode="modal">
                <button className="text-sm font-semibold hover:text-trapperGreen hoverEffect cursor-pointer">
                  Login
                </button>
              </SignInButton>
            )}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
};

export default Header;
