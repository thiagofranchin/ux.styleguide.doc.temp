module.exports = {
  "env": {
      "browser": true,
      "es6": true
  },
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "parserOptions": {
      "ecmaFeatures": {
          "experimentalObjectRestSpread": true,
          "jsx": true
      },
      "sourceType": "module"
  },
  "plugins": [
      "react"
  ],
  "rules": {
      "indent": ["error", 2],
      "linebreak-style": ["error", "windows"],
      "quotes": ["error", "single"],
      "semi": ["error", "always"],
      "no-alert": "error",
      "no-caller": "error",
      "no-empty-function": "error",
      "no-else-return": "error",
      "no-eval": "error",
      "no-extend-native": "error",
      "complexity": ["error", 4],
      "no-new-wrappers": "error",
      "no-script-url": "error",
      "no-throw-literal": "error",
      "no-void": "error",
      "no-with": "error",
      "prefer-promise-reject-errors": "error",
      "require-await": "error",
      "camelcase": ["error", { "properties": "always" }],
      "max-len": ["error", { "code": 80 }],
      "no-trailing-spaces": "error",
      "arrow-body-style": ["error", "as-needed"],
      "arrow-parens": "error",
      "arrow-spacing": "error",
      "no-duplicate-imports": "error",
      "no-useless-constructor": "error",
      "no-var": "error",
      "prefer-rest-params": "error",

      "react/no-array-index-key": "error",
      "react/no-danger": "error",
      "react/no-did-mount-set-state": "error",
      "react/no-did-update-set-state": "error",
      "react/no-multi-comp": "error",
      "react/no-string-refs": "error",
      "react/no-unescaped-entities": "error",
      "react/no-unused-prop-types": "error",
      "react/prefer-stateless-function": "error",
      "react/self-closing-comp": "error",
      "react/jsx-closing-bracket-location": "error",
      "react/jsx-curly-spacing": ["error", "never"],
      "react/jsx-equals-spacing": ["error", "never"],
      "react/jsx-filename-extension": ["error", { "extensions": [".js"] }],
      "react/jsx-indent": ["error", 2],
      "react/jsx-indent-props": ["error", 2],
      "react/jsx-key": "error",
      "react/jsx-pascal-case": "error",
      "react/jsx-space-before-closing": ["error", "always"],
      "react/jsx-tag-spacing": ["error", {
        "closingSlash": "never",
        "beforeSelfClosing": "always",
        "afterOpening": "never"
      }],
      "react/jsx-wrap-multilines": "error"
  }
};
