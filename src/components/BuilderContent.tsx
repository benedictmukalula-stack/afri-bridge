'use client';

import { Content } from "@builder.io/sdk-react-nextjs";

export function BuilderContentWrapper({
  model,
  content,
  apiKey,
}: {
  model: string;
  content: any;
  apiKey: string;
}) {
  return <Content model={model} content={content} apiKey={apiKey} />;
}
