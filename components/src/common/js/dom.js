export function addClass(el, className) {
  if (hasClass(el, className)) {
    return
  }
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

export function removeClass(el, className) {
  if (!hasClass(el, className)) {
    return
  }
  let newClass = el.className.split(' ')
  let index = newClass.indexOf(className)
  if (index < 0) {
    return
  }
  newClass.splice(index, 1)
  el.className = newClass.join(' ')
}

export function hasClass(el, className) {
  let reg = new RegExp(`(^|\\s)${className}(\\s|$)`)
  return reg.test(el.className)
}

export function getData(el, name, val) {
  const prefix = 'data-'
  name = prefix + name
  if (val) {
    return el.setAttribute(name, val)
  } else {
    return el.getAttribute(name)
  }
}

// css 浏览器引擎
let elementStyle = document.createElement('div').style
let vendor = (() => {
  let transformNames = {
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTransform',
    ms: 'msTransform',
    standard: 'transform'
  }
  for (let key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key
    }
  }
})()

export function prefixStyle(style) {
  if (vendor === false) return false
  if (vendor === 'standard') return style
  return vendor + (style.charAt(0)).toUpperCase() + style.substr(1)
}
