"use client";
import { Loader2, Search, X } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { client } from "@/sanity/lib/client";
import { Input } from "./ui/input";
import AddToCartButton from "./AddToCartButton";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/sanity.types";
import PriceView from "./PriceView";
import Image from "next/image";
import Link from "next/link";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState("");
  const [loading, setLoading] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  return (
    <Dialog open={showSearch} onOpenChange={() => setShowSearch(!showSearch)}>
      <DialogTrigger onClick={() => setShowSearch}>
        <Search className="w-5 h-5 hover:text-darkColor hoverEffect" />
      </DialogTrigger>
      <DialogContent className="max-w-5xl h-[90vh] flex flex-col overflow-hidden">
        <DialogHeader>
          <DialogTitle className="mb-1">Product Searchbar</DialogTitle>
          <form className="relative" onSubmit={(e) => e.preventDefault()}>
            <Input
              placeholder="Search your product here ..."
              className="flex-1 rounded-md py-5"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <X className="w-4 h-4 absolute top-3 right-11 hover:text-red-600 hoverEffect" />
            )}
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SearchBar;
