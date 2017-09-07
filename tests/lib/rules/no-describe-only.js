const rule = require('../../../lib/rules/no-describe-only');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester();

ruleTester.run('no-describe-only', rule, {
  valid: [
    {
      code: 'describe(\'Test suite name\', function() { /*...*/ });'
    }
  ],

  invalid: [
    {
      code: 'describe.only(\'Test suite name\', function() { /*...*/ });',
      errors: [{
        message: 'Replace describe.only with describe.',
        type: 'MemberExpression'
      }]
    }
  ]
});
