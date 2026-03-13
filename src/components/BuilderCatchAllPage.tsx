"use client";

import { useEffect, useState } from "react";
import { BuilderComponent, builder } from "@builder.io/react";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

type BuilderCatchAllPageProps = {
  urlPath: string;
};

export default function BuilderCatchAllPage({ urlPath }: BuilderCatchAllPageProps) {
  const [content, setContent] = useState<any>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let active = true;

    builder
      .get("page", {
        userAttributes: {
          urlPath,
        },
      })
      .promise()
      .then((data) => {
        if (!active) return;
        setContent(data || null);
        setLoaded(true);
      })
      .catch(() => {
        if (!active) return;
        setContent(null);
        setLoaded(true);
      });

    return () => {
      active = false;
    };
  }, [urlPath]);

  if (!loaded) {
    return <div>Loading...</div>;
  }

  if (!content) {
    return <div>Page not found.</div>;
  }

  return <BuilderComponent model="page" content={content} />;
}
