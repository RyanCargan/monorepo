import { defineConfig, splitVendorChunkPlugin } from 'vite'
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
		mdx(options),
		splitVendorChunkPlugin(),
		// {
		// 	name: "configure-preview-response-headers",
		// 	configurePreviewServer: (server) => {
		// 		server.middlewares.use((_req, res, next) => {
		// 			res.setHeader("Cross-Origin-Embedder-Policy", "require-corp")

		// 			res.setHeader("Cross-Origin-Opener-Policy", "same-origin")

		// 			next()
		// 		})
		// 	}
		// }
	],

	server: {
		port: 3000,
		headers: {
			'Cross-Origin-Embedder-Policy': 'require-corp',
			'Cross-Origin-Opener-Policy': 'same-origin'
		  }
	},
	preview: {
		port: 4000,
		// headers: {
		// 	'Cross-Origin-Embedder-Policy': 'require-corp',
		// 	'Cross-Origin-Opener-Policy': 'same-origin'
		// }
	},
})
