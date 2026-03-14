"use client";

type BuilderCatchAllPageProps = {
  urlPath: string;
};

<<<<<<< HEAD
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
=======
export default function BuilderCatchAllPage({
  urlPath,
}: BuilderCatchAllPageProps) {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>AfriBridge</h1>
      <p>Page route: {urlPath}</p>
      <p>The Builder catch-all page is active.</p>
    </main>
  );
>>>>>>> e3720a4 (Fix AfriBridge production build and deployment issues)
}
