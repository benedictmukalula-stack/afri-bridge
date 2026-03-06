import {
  fetchOneEntry,
  getBuilderSearchParams,
} from "@builder.io/sdk-react-nextjs";
import { BuilderContentWrapper } from "@/components/BuilderContent";

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

  // Only attempt Builder.io fetch if API key is configured
  const apiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY;

  let content = null;

  if (apiKey) {
    try {
      content = await fetchOneEntry({
        model: "page",
        apiKey,
        userAttributes: { urlPath },
        options: getBuilderSearchParams(sp as any),
      });
    } catch (error) {
      console.error("Builder.io fetch failed:", error);
    }
  }

  if (!content) {
    return (
      <div style={{ padding: 40, textAlign: 'center', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div>
          <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#0f172a', marginBottom: '10px' }}>
            AfriBridge Logistics
          </h1>
          <p style={{ color: '#666', marginBottom: '20px' }}>
            Page not found: {urlPath}
          </p>
          <a href="/" style={{ color: '#10b981', textDecoration: 'none', fontWeight: '600' }}>
            Return to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <BuilderContentWrapper
      model="page"
      content={content}
      apiKey={apiKey as string}
    />
  );
}
