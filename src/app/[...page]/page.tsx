import BuilderCatchAllPage from "@/components/BuilderCatchAllPage";

export default async function CatchAllPage({
  params,
}: {
  params: Promise<{ page?: string[] }>;
}) {
  const resolvedParams = await params;
  const path = "/" + (resolvedParams.page?.join("/") || "");

  return <BuilderCatchAllPage urlPath={path} />;
}
