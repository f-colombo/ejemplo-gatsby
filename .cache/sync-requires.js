const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-articulo-js": hot(preferDefault(require("C:\\Users\\facolombo\\Documents\\Projects\\gastby\\blog\\src\\templates\\articulo.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\Users\\facolombo\\Documents\\Projects\\gastby\\blog\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Users\\facolombo\\Documents\\Projects\\gastby\\blog\\src\\pages\\404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\facolombo\\Documents\\Projects\\gastby\\blog\\src\\pages\\index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("C:\\Users\\facolombo\\Documents\\Projects\\gastby\\blog\\src\\pages\\page-2.js")))
}

