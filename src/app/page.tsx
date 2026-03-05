import {
  Content,
  fetchOneEntry,
  getBuilderSearchParams,
} from "@builder.io/sdk-react-nextjs";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams;

  const content = await fetchOneEntry({
    model: "page",
    apiKey: process.env.NEXT_PUBLIC_BUILDER_API_KEY!,
    userAttributes: { urlPath: "/" },
    options: getBuilderSearchParams(sp),
  });

  if (!content) {
    return (
      <div style={{ padding: 24 }}>
        <h1>AfriBridge Logistics</h1>
        <p>Create and publish a Builder "page" with URL "/".</p>
      </div>
    );
  }

  return <Content model="page" content={content} apiKey={process.env.NEXT_PUBLIC_BUILDER_API_KEY!} />;
}
