# eslint-plugin-app

A set of rules to enforce JavaScript in pricematch/app.

## Usage

Add `eslint-plugin-app` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "app"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "app/no-describe-only": 2
    }
}
```

## Supported Rules

* `no-describe-only` - rule to forbid committing `describe.only` statements. 





