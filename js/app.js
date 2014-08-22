require.config({
  deps: ["app"],
  paths: {
    react: 'lib/react-0.11.1.min',
    JSXTransformer: 'lib/JSXTransformer-0.11.1',
    jsx: 'lib/jsx',
  },
  shim: {
    JSXTransformer: {
      exports: "JSXTransformer"
    }
  },
  baseUrl: 'js'
});

require([
  "react",
  "JSXTransformer",
  "jsx!app/app",
  "jsx!app/jsobjects"
], function() {} );