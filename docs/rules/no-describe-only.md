# Unit tests must not contain `describe.only`. (no-describe-only)

`describe.only` statement can be useful in case of local development, as it can save time when running tests.

However, we must be very careful not to commit it unintentionally as it will disable rest of tests and make our CI useless.


## Rule Details

This rule aims to prevent committing 'describe.only' statements.

Examples of **incorrect** code for this rule:

```js

describe.only('test suite', function() { /*...*/ });

```

Examples of **correct** code for this rule:

```js

describe('test suite', function() { /*...*/ });

```
