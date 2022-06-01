import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import mdx from '@mdx-js/rollup'

import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'

import remarkMath from 'remark-math'
// import rehypeMathjax from 'rehype-mathjax'
import rehypeKatex from 'rehype-katex'
import remarkMdxEnhanced from 'remark-mdx-math-enhanced'

const options = {
	// See https://mdxjs.com/advanced/plugins
	remarkPlugins: [
		remarkGfm,
		remarkMath,
		[remarkMdxEnhanced, { component: 'Math' }],
	],
	rehypePlugins: [
		rehypeHighlight,
		// rehypeMathjax,
		rehypeKatex,

	],
	providerImportSource: '@mdx-js/react',
}

// https://vitejs.dev/config/
export default defineConfig({
	// resolve: {
    //     alias: {
    //         "react/jsx-runtime": "react/jsx-runtime.js"
    //     }
    // },
	plugins: [
		react({
			jsxRuntime: 'classic',
		}),
		mdx(options)
	],

	// build: {
	// 	commonjsOptions: {
	// 	  transformMixedEsModules: true,
	// 	},
	//   },

	server: {
		port: 3000
	},
	preview: {
		port: 4000
	},
})
