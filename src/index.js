import flattenNames from './flattenNames'
import mergeClasses from './mergeClasses'
import { prefix } from 'inline-style-prefixer'

export hover from './components/hover'
export handleHover from './components/hover'
export handleActive from './components/active'
export loop from './loop'

export const ReactCSS = (classes, ...activations) => {
  const activeNames = flattenNames(activations)
  const merged = mergeClasses(classes, activeNames)
  return prefix(merged)
}

export default ReactCSS
