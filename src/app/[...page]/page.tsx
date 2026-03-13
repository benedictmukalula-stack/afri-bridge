import BuilderCatchAllPage from "@/components/BuilderCatchAllPage";

type PageProps = {
  params: Promise<{ page?: string[] }>;
};

export default async function CatchAllPage({ params }: PageProps) {
  const resolvedParams = await params;
  const path = "/" + (resolvedParams.page?.join("/") || "");

  return <BuilderCatchAllPage urlPath={path} />;
}
