// Boilerplate from examples in goodproblems/remark-mdx-math-enhanced GitHub repository
import React from 'react' // Needed to avoid "React is not defined" error after bundling
import { useMemo } from 'react';
import katex from 'katex';

export function Math({ children = '', display = false, options }) {
  const Wrapper = display ? 'div' : 'span';
  if (typeof children !== 'string')
    throw new Error('Children prop must be a katex string');

  const renderedKatex = useMemo(() => {
    let result;

    try {
      result = katex.renderToString(children, {
        ...options,
        displayMode: display,
        throwOnError: true,
        globalGroup: true,
        trust: true,
        strict: false,
      });
    } catch (error) {
      console.error(error);
      result = katex.renderToString(children, {
        ...options,
        displayMode: display,
        throwOnError: false,
        strict: 'ignore',
        globalGroup: true,
        trust: true,
      });
    }

    return result;
  }, [children]);

  return <Wrapper dangerouslySetInnerHTML={{ __html: renderedKatex || '' }} />;
}
