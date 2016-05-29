'use strict'

import Component from './deprecated/Component'
export hover from './components/hover'
import flattenNames from './flattenNames'
import mergeClasses from './mergeClasses'

export const ReactCSS = (classes, ...activations) => {
  const activeNames = flattenNames(activations)
  return mergeClasses(classes, activeNames)
}

ReactCSS.Component = Component
ReactCSS.m = Object.assign

export default ReactCSS