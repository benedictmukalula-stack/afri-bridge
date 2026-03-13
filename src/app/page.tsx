import { builder, BuilderComponent } from "@builder.io/react";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default async function HomePage() {
  const content = await builder
    .get("page", {
      userAttributes: { urlPath: "/" },
    })
    .toPromise();

  return <BuilderComponent model="page" content={content || undefined} />;
}
