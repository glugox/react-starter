/**
 * 
 * @param {type} string
 * @returns {String|String.prototype@call;replace|@var;string}
 */
export function humanize(string){
  string = string || ''
  string = string.toString() // might be a number
  string = string.trim()
  string = string.replace(extname(string), '')
  string = underscore(string)
  string = string.replace(/[\W_]+/g, ' ')

  return capitalize(string)
}

/**
 * 
 * @param {type} string
 * @returns {String}
 */
export function extname(string){
  var index = string.lastIndexOf('.')
  var ext = string.substring(index, string.length)

  return (index === -1) ? '' : ext
}

/**
 * 
 * @param {type} string
 * @returns {@var;string|String}
 */
export function underscore(string){
  string = string || ''
  string = string.toString() // might be a number
  string = string.trim()
  string = string.replace(/([a-z\d])([A-Z]+)/g, '$1_$2')
  string = string.replace(/[-\s]+/g, '_').toLowerCase()

  return string
}

/**
 * 
 * @param {type} string
 * @returns {String|String.prototype@call;replace|@var;string}
 */
export function capitalize(string){
  string = string || ''
  string = string.trim()

  if (string[0]) {
    string = string[0].toUpperCase() + string.substr(1).toLowerCase()
  }

  return string
}

/**
 * 
 * @param {type} string
 * @returns {String}
 */
export function parseDatatype(string, result){
    if(string.startsWith('is_')){
        return 'boolean'
    }
    return 'string'
}