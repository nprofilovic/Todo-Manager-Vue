module.exports = {
    extends: [
        // add more generic rulesets here, such as:
        // 'eslint:recommended',
        'plugin:vue/recommended'
    ],
    rules: {
        // override/add rules settings here, such as:
        // 'vue/no-unused-vars': 'error'
        'vue/singleline-html-element-content-newline': 0,
        'vue/max-attributes-per-line': 0,
        'no-unused-vars': 0,
        'vue/name-property-casing': 0,
        'vue/attributes-order': 0
    }
}