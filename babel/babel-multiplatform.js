module.exports = ({types: t}) => {
  return {
    name: 'Multiplatform',
    visitor: {
      ImportDeclaration(path, state) {
        const {platform} = state.opts;
        const {source, specifiers} = path.node;
        const varName = specifiers.length && specifiers[0].local && specifiers[0].local.name;
        if (varName === 'RCT' && source && source.value && source.value === 'react') {
          if (platform === 'rn') {
            path.replaceWith(t.ImportDeclaration(specifiers, t.stringLiteral('react-native')))
          } else {
            path.replaceWith(t.variableDeclaration('const', [t.variableDeclarator(t.identifier('RCT'), t.arrowFunctionExpression([], t.blockStatement([])))]));
          }
        }
      },
    }
  }
}