const { flatRoutes } = require('remix-flat-routes')

/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  cacheDirectory: "./node_modules/.cache/remix",
  ignoredRouteFiles: ['**/*'],
  publicPath: "/build/",
  serverBuildPath: "build/index.js",
  serverBuildTarget: "node-cjs",
  future: {
    v2_meta: true,
  },
  serverDependenciesToBundle: [
    /^remark.*/,
    /^rehype.*/,
    /^unified.*/,
    /^micromark.*/,
    /^mdast.*/,
    /^react-querybuilder.*/,
    /^react-day-picker.*/,
    /^react-dnd-html5-backend.*/,
    /^dnd-core.*/,
    /^@react-dnd.*/,
    /^@udecode\/plate-ui-dnd.*/,
    /^@udecode\/plate.*/,
    /^@udecode\/plate-serializer-md.*/,
    /^decode-named-character-reference.*/,
    /^character-entities.*/,
    /^unist-util-stringify-position.*/,
    /^character-reference-invalid.*/,
    /^is-decimal.*/,
    /^is-hexadecimal.*/,
    /^is-alphanumerical.*/,
    /^copy-to-clipboard.*/,
    /^unist-.*/,
    /^hast-util-parse-selector.*/,
    /^property-information.*/,
    /^hast-util-whitespace.*/,
    /^space-separated-tokens.*/,
    /^comma-separated-tokens.*/,
    /^zen-observable-ts.*/,
    /^ts-invariant.*/,
    /^zen-observable-ts.*/,
    /^is-alphabetical.*/,
    /^@sindresorhus\/slugify.*/,
    /^react-markdown.*/,
    /^micromark-util-symbol.*/,
    /^zwitch.*/,
    /^bail.*/,
    /^trough.*/,
    /^fault.*/,
    /^ccount.*/,
    /^react-dnd.*/,
    /^parse-entities.*/,
    /^stringify-entities.*/,
    /^hastscript.*/,
    /^ts-invariant.*/,
    /^unist-util-map.*/,
    /^markdown-table.*/,
    /^longest-streak.*/,
    /^vfile.*/,
    /^vfile-message.*/,
    /^@apollo\/client.*/,
    /^@sindresorhus\/transliterate.*/,
    /^trim-lines.*/,
    /^is-plain-obj.*/,
    /^react-is.*/,
    /^escape-string-regexp.*/
   
  ],
  routes: async defineRoutes => {
		return flatRoutes('routes', defineRoutes, {
			ignoredRouteFiles: ['.*', '**/*.css', "**/*.scss", "**/*.css.map", '**/*.test.{js,jsx,ts,tsx}'],
		})
	},
}
