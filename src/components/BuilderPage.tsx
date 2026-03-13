"use client";

import { BuilderComponent, builder } from "@builder.io/react";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

type BuilderPageProps = {
  content: any;
};

export default function BuilderPage({ content }: BuilderPageProps) {
  return <BuilderComponent model="page" content={content} />;
}
