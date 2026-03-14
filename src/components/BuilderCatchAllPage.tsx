"use client";

import { useEffect, useState } from "react";
import { BuilderComponent, builder } from "@builder.io/react";

type BuilderCatchAllPageProps = {
  urlPath: string;
};

export default function BuilderCatchAllPage({
  urlPath,
}: BuilderCatchAllPageProps) {
  const [content, setContent] = useState<any>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let active = true;

    async function fetchContent() {
      try {
        const result = await builder
          .get("page", {
            userAttributes: {
              urlPath,
            },
          })
          .promise();

        if (active) {
          setContent(result || null);
          setLoaded(true);
        }
      } catch (error) {
        console.error("Builder page load error:", error);
        if (active) {
          setLoaded(true);
        }
      }
    }

    fetchContent();

    return () => {
      active = false;
    };
  }, [urlPath]);

  if (!loaded) {
    return <div className="min-h-screen bg-white" />;
  }

  if (!content) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-white px-6">
        <div className="max-w-xl text-center">
          <h1 className="text-3xl font-semibold text-slate-900">
            AfriBridge Clearing & Logistics
          </h1>
          <p className="mt-4 text-slate-600">
            No Builder page is currently published for this route.
          </p>
        </div>
      </main>
    );
  }

  return <BuilderComponent model="page" content={content} />;
}
