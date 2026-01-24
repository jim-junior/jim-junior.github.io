import createMDX from "@next/mdx";
import { NextConfig } from "next";
import rehypeMdxTitle from "rehype-mdx-title";
import rehypePrettyCode from "rehype-pretty-code";
import moonlightTheme from './assets/moonlight-ii.json' with { type: 'json' };
import remarkMath from 'remark-math'
import remarkGFM from "remark-gfm"
import rehypeKatex from 'rehype-katex'
import withMarkdoc from "@markdoc/next.js";
import remarkMermaid from "remark-mermaidjs";

const nextConfig: NextConfig = {
  output: "export",
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options:{
    remarkPlugins: [
      remarkGFM,
              remarkMath,
              remarkMermaid
            ],
    rehypePlugins: [
              rehypeKatex, [
              rehypePrettyCode,
              {
                keepBackground: false,
                theme: moonlightTheme,
              },
            ],rehypeMdxTitle],
  }
});

// @ts-ignore
export default (withMDX(nextConfig));
