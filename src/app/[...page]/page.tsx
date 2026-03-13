import { builder, BuilderComponent } from "@builder.io/react";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default async function BuilderPage({
  params,
}: {
  params: Promise<{ page?: string[] }>;
}) {
  const resolvedParams = await params;
  const urlPath = "/" + (resolvedParams.page?.join("/") || "");

  const content = await builder
    .get("page", {
      userAttributes: { urlPath },
    })
    .toPromise();

  return <BuilderComponent model="page" content={content || undefined} />;
}
