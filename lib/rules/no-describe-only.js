module.exports = {
  meta: {
    docs: {
      description: 'Unit tests must not contain describe.only.',
      recommended: false
    },
    fixable: null
  },

  create: (context) => {
    return {
      MemberExpression: (node) => {
        if (node.object.name === 'describe' && node.property.name === 'only') {
          context.report({
            node: node,
            message: 'Replace describe.only with describe.'
          });
        }
      }
    };
  }
};
