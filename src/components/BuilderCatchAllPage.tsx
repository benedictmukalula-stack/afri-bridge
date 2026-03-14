"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BuilderComponent, builder } from "@builder.io/react";

type BuilderCatchAllPageProps = {
  urlPath: string;
};

const builderApiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY;

if (builderApiKey) {
  builder.init(builderApiKey);
}

export default function BuilderCatchAllPage({
  urlPath,
}: BuilderCatchAllPageProps) {
  const [content, setContent] = useState<any>(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    async function fetchContent() {
      try {
        if (!builderApiKey) {
          if (active) {
            setLoaded(true);
          }
          return;
        }

        const result = await builder
          .get("page", {
            userAttributes: { urlPath },
          })
          .promise();

        if (!active) return;

        setContent(result || null);
        setLoaded(true);
      } catch (err: any) {
        console.error("Builder page load error:", err);
        if (!active) return;
        setError(err?.message || "Unknown Builder runtime error");
        setLoaded(true);
      }
    }

    fetchContent();

    return () => {
      active = false;
    };
  }, [urlPath]);

  if (!loaded) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-2xl font-semibold text-slate-900">Loading page</h1>
          <p className="mt-3 text-slate-600">Fetching content for {urlPath}</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl border border-red-200 bg-white p-8 shadow-sm">
          <h1 className="text-2xl font-semibold text-red-700">Page load error</h1>
          <p className="mt-3 text-slate-700">{error}</p>
        </div>
      </main>
    );
  }

  if (!content) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-semibold text-slate-950">
            Page not yet published
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600">
            This route exists, but no published Builder content was found for:
          </p>
          <p className="mt-2 font-semibold text-slate-900">{urlPath}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/"
              className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-300"
            >
              Back Home
            </Link>
            <Link
              href="/quote"
              className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return <BuilderComponent model="page" content={content} />;
}
