"use client";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useAuth } from "@clerk/nextjs";
import { ExternalLink, Link2 } from "lucide-react";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loading from "@/components/Loading";

interface NfcTag {
  id: string;
  url: string | null;
}

const LinkSwapPage = () => {
  const { isSignedIn, userId } = useAuth();
  const [nfcTags, setNfcTags] = useState<NfcTag[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  useEffect(() => {
    if (!isSignedIn || !userId) {
      setLoading(false);
      return;
    }

    fetchNfcTags();
  }, [isSignedIn, userId]);

  const fetchNfcTags = async () => {
    try {
      const response = await fetch("/api/v1/nfc");
      if (!response.ok) throw new Error("Failed to fetch NFC tags");
      const data = await response.json();
      setNfcTags(data.nfcTags || []);
    } catch (error) {
      console.error("Error fetching NFC tags:", error);
      toast.error("Failed to load your NFC tags");
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
      fetchNfcTags();
    } catch (error) {
      console.error("Error updating URL:", error);
      toast.error("Failed to update URL");
    } finally {
      setUpdatingId(null);
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
          <h1 className="text-2xl font-semibold">Your NFC Tags</h1>
        </div>

        {nfcTags.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <Link2 className="h-24 w-24 text-gray-400 mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900">
                No NFC tags found
              </h2>
              <p className="mt-2 text-sm text-gray-600 text-center max-w-md">
                You don&apos;t have any NFC tags yet.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4">
            {nfcTags.map((tag) => (
              <NfcTagCard
                key={tag.id}
                tag={tag}
                onUpdateUrl={handleUpdateUrl}
                isUpdating={updatingId === tag.id}
              />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

interface NfcTagCardProps {
  tag: NfcTag;
  onUpdateUrl: (nfcTagId: string, newUrl: string) => Promise<void>;
  isUpdating: boolean;
}

const NfcTagCard: React.FC<NfcTagCardProps> = ({
  tag,
  onUpdateUrl,
  isUpdating,
}) => {
  const [newUrl, setNewUrl] = useState(tag.url || "");

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">NFC Tag ID: {tag.id}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">
            Current Link
          </label>
          <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-md border">
            {tag.url ? (
              <>
                <ExternalLink className="w-4 h-4 text-gray-500 shrink-0" />
                <a
                  href={tag.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline truncate flex-1"
                >
                  {tag.url}
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
              onClick={() => onUpdateUrl(tag.id, newUrl)}
              disabled={isUpdating || !newUrl.trim()}
            >
              {isUpdating ? "Updating..." : "Update"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LinkSwapPage;
