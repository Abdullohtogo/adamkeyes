module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules":{
        semi: "error",
        "prefer-const": "error",
        "vue/no-deprecated-router-link-tag-prop": ["error", {
            "components": ['RouterLink']
        }]
    }
};