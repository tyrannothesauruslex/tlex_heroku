function createStyle(css) {
  var head = document.getElementsByTagName('head')[0]
  var style_el = document.createElement('style')
  head.appendChild(style_el)

  if (style_el.styleSheet) {
    // IE
    style_el.styleSheet.cssText = css
  } else {
    // w3c
    var style_content = document.createTextNode(css)
    style_el.appendChild(style_content)
  }
}

/*
 * create the CSS (as text) from a JSS object
 */
A.css = JSS.toCSS({
  /*
  '.link': {
    font_size: '200%',
    stroke: 'red',
  },
  */
})

// paste it into HTML HEAD section:
createStyle(A.css)
