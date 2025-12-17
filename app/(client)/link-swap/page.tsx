"use client";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { urlFor } from "@/sanity/lib/image";
import { useAuth } from "@clerk/nextjs";
import { ExternalLink, Link2, Trash2 } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loading from "@/components/Loading";

interface NfcProduct {
  productId: string;
  productTitle: string;
  productImage: any;
  nfcTagId: string;
  currentUrl: string | null;
  quantity: number;
}

const LinkSwapPage = () => {
  const { isSignedIn, userId } = useAuth();
  const [nfcProducts, setNfcProducts] = useState<NfcProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  useEffect(() => {
    if (!isSignedIn || !userId) {
      setLoading(false);
      return;
    }

    fetchNfcProducts();
  }, [isSignedIn, userId]);

  const fetchNfcProducts = async () => {
    try {
      const response = await fetch("/api/v1/nfc/user-products");
      if (!response.ok) throw new Error("Failed to fetch NFC products");
      const data = await response.json();
      setNfcProducts(data.products || []);
    } catch (error) {
      console.error("Error fetching NFC products:", error);
      toast.error("Failed to load your NFC products");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateUrl = async (nfcTagId: string, newUrl: string) => {
    if (!newUrl.trim()) {
      toast.error("URL cannot be empty");
      return;
    }

    setUpdatingId(nfcTagId);
    try {
      const response = await fetch(`/api/v1/nfc/${nfcTagId}/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: newUrl }),
      });

      if (!response.ok) throw new Error("Failed to update URL");

      toast.success("URL updated successfully!");
      fetchNfcProducts();
    } catch (error) {
      console.error("Error updating URL:", error);
      toast.error("Failed to update URL");
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDeleteProduct = async (nfcTagId: string) => {
    if (!window.confirm("Are you sure you want to delete this NFC tag?")) {
      return;
    }

    try {
      const response = await fetch(`/api/v1/nfc/${nfcTagId}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete NFC tag");

      toast.success("NFC tag deleted successfully!");
      fetchNfcProducts();
    } catch (error) {
      console.error("Error deleting NFC tag:", error);
      toast.error("Failed to delete NFC tag");
    }
  };

  if (!isSignedIn) {
    redirect("/signin");
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <Container>
        <div className="flex items-center gap-2 mb-6">
          <Link2 className="h-6 w-6 text-darkColor" />
          <h1 className="text-2xl font-semibold">Link Swap - Manage Your NFC Tags</h1>
        </div>

        {nfcProducts.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <Link2 className="h-24 w-24 text-gray-400 mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900">
                No NFC tags found
              </h2>
              <p className="mt-2 text-sm text-gray-600 text-center max-w-md">
                You haven&apos;t purchased any NFC tag products yet. Browse our shop to get started!
              </p>
              <Button asChild className="mt-6">
                <a href="/">Browse Products</a>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6">
            {nfcProducts.map((product) => (
              <NfcProductCard
                key={product.nfcTagId}
                product={product}
                onUpdateUrl={handleUpdateUrl}
                onDelete={handleDeleteProduct}
                isUpdating={updatingId === product.nfcTagId}
              />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

interface NfcProductCardProps {
  product: NfcProduct;
  onUpdateUrl: (nfcTagId: string, newUrl: string) => Promise<void>;
  onDelete: (nfcTagId: string) => Promise<void>;
  isUpdating: boolean;
}

const NfcProductCard: React.FC<NfcProductCardProps> = ({
  product,
  onUpdateUrl,
  onDelete,
  isUpdating,
}) => {
  const [newUrl, setNewUrl] = useState(product.currentUrl || "");

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="flex items-start gap-4 flex-1">
            {product.productImage && (
              <div className="border p-1 rounded-md overflow-hidden">
                <Image
                  src={urlFor(product.productImage).url()}
                  alt={product.productTitle}
                  width={80}
                  height={80}
                  className="w-20 h-20 object-cover"
                />
              </div>
            )}
            <div>
              <h3 className="text-lg font-semibold">{product.productTitle}</h3>
              <p className="text-sm text-gray-500">Quantity: {product.quantity}</p>
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">
            Current Link
          </label>
          <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-md border">
            {product.currentUrl ? (
              <>
                <ExternalLink className="w-4 h-4 text-gray-500 flex-shrink-0" />
                <a
                  href={product.currentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline truncate flex-1"
                >
                  {product.currentUrl}
                </a>
              </>
            ) : (
              <span className="text-gray-400 italic">No URL set</span>
            )}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">
            Update Link
          </label>
          <div className="flex gap-2">
            <Input
              type="url"
              placeholder="Enter new URL"
              value={newUrl}
              onChange={(e) => setNewUrl(e.target.value)}
              className="flex-1"
            />
            <Button
              onClick={() => onUpdateUrl(product.nfcTagId, newUrl)}
              disabled={isUpdating || !newUrl.trim()}
            >
              {isUpdating ? "Updating..." : "Update"}
            </Button>
            <Button
              variant="destructive"
              size="icon"
              onClick={() => onDelete(product.nfcTagId)}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LinkSwapPage;
