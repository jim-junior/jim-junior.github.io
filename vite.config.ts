import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import rehypeMdxTitle from "rehype-mdx-title";
import rehypePrettyCode from "rehype-pretty-code";
import moonlightTheme from './assets/moonlight-ii.json' with { type: 'json' };
import remarkMath from 'remark-math'
import remarkGFM from "remark-gfm"
import rehypeKatex from 'rehype-katex'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      enforce: "pre",
      ...mdx({
        remarkPlugins: [
          remarkGFM,
          remarkMath
        ],
        rehypePlugins: [
          rehypeKatex, [
          rehypePrettyCode,
          {
            keepBackground: false,
            theme: moonlightTheme,
          },
        ],rehypeMdxTitle],
      }),
    },
    react({ include: /\.(jsx|js|mdx|md|tsx|ts)$/ }),
  ],
});
