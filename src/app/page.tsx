"use client";

import { useEffect, useState } from "react";
import { BuilderComponent, builder } from "@builder.io/react";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default function Page() {
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    builder
      .get("page", {
        userAttributes: {
          urlPath: "/",
        },
      })
      .promise()
      .then((data) => setContent(data));
  }, []);

  if (!content) return <div>Loading...</div>;

  return <BuilderComponent model="page" content={content} />;
}
