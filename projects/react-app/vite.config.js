import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import mdx from '@mdx-js/rollup'

import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'

import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkMdxEnhanced from 'remark-mdx-math-enhanced'

// import fauxRemarkEmbedder from '@remark-embedder/core'
// import fauxOembedTransformer from '@remark-embedder/transformer-oembed'
// const remarkEmbedder = fauxRemarkEmbedder.default
// const oembedTransformer = fauxOembedTransformer.default

const options = {
	remarkPlugins: [
		remarkGfm,
		remarkMath,
		[remarkMdxEnhanced, { component: 'Math' }],
		// [remarkEmbedder, {transformers: [oembedTransformer]}],
	],
	rehypePlugins: [
		rehypeHighlight,
		rehypeKatex,

	],
	providerImportSource: '@mdx-js/react',
}

export default defineConfig({
	plugins: [
		react({
			jsxRuntime: 'classic',
		}),
		mdx(options)
	],

	server: {
		port: 3000
	},
	preview: {
		port: 4000
	},
})
