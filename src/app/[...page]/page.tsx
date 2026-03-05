import {
  Content,
  fetchOneEntry,
  getBuilderSearchParams,
} from "@builder.io/sdk-react-nextjs";

export default async function CatchAllPage({
  params,
  searchParams,
}: {
  params: Promise<{ page: string[] }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { page } = await params;
  const sp = await searchParams;

  const urlPath = "/" + page.join("/");

  const content = await fetchOneEntry({
    model: "page",
    apiKey: process.env.NEXT_PUBLIC_BUILDER_API_KEY!,
    userAttributes: { urlPath },
    options: getBuilderSearchParams(sp),
  });

  if (!content) {
    return (
      <div style={{ padding: 24 }}>
        <h1>Page not found</h1>
        <p>No Builder page for: {urlPath}</p>
      </div>
    );
  }

  return <Content model="page" content={content} apiKey={process.env.NEXT_PUBLIC_BUILDER_API_KEY!} />;
}