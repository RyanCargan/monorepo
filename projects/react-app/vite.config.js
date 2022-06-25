/// <reference types="vitest" />
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import { configDefaults } from 'vitest/config'
import react from '@vitejs/plugin-react'

import mdx from '@mdx-js/rollup'

import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'

import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkMdxEnhanced from 'remark-mdx-math-enhanced'

import fs from 'fs'
const jsonData = JSON.parse(fs.readFileSync('package.json', 'utf-8'))
const dependencies = jsonData.dependencies

const renderChunks = (deps) => {
	let chunks = {}
	Object.keys(deps).forEach((key) => {
	  if (['react', 'wouter', 'react-dom'].includes(key)) return
	  chunks[key] = [key]
	})
	return chunks
}

const options = {
	remarkPlugins: [
		remarkGfm,
		remarkMath,
		[remarkMdxEnhanced, { component: 'Math' }],
	],
	rehypePlugins: [
		rehypeHighlight,
		rehypeKatex,

	],
	providerImportSource: '@mdx-js/react',
}

export default defineConfig({
	build: {
		sourcemap: false,
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: ['react', 'wouter', 'react-dom'],
					...renderChunks(dependencies),
				},
			},
		},
	},
	plugins: [
		react({
			jsxRuntime: 'classic',
		}),
		mdx(options),
		splitVendorChunkPlugin(),
	],
	server: {
		port: 3000,
		headers: {
			'Cross-Origin-Embedder-Policy': 'require-corp',
			'Cross-Origin-Opener-Policy': 'same-origin',
		  }
	},
	preview: {
		port: 4000,
	},
	test: {
		// Options
		globals: true,
		environment: 'jsdom',
		setupFiles: './setupTests.js',
		exclude: [...configDefaults.exclude,
			'**/src/{scripts,components}/**',
		],
	},
})
