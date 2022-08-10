module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "airbnb",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
  ],
  rules: {
    quotes: ["error", "double"], // 더블 쿼터 사용
    "@typescript-eslint/quotes": ["error", "double"], // "
    "no-unused-vars": "off", // 사용 안 한 변수 경고 중복
    "spaced-comment": "off", // 주석을 뒤에 쓰지 말라는 경고
    "@typescript-eslint/no-unused-vars": "warn", // 시용 안 한 변수는 경고
    "jsx-a11y/control-has-associated-label": "off", // 상호 작용하는 엘리먼트에 label 기입
    "react/no-array-index-key": "off", // key 값으로 index를 사용 가능
    "comma-dangle": "off", // 마지막에 , 을 넣지 않음
    "arrow-body-style": "off", // 화살표 함수 안에 return을 사용 가능
    "react/no-unescaped-entities": "off", // 문자열 내에서 " ' > } 허용
    "react/prop-types": "off", // props-types 사용 X
    "object-curly-newline": "off", // { 다음 줄 바꿈을 강제 사용 X
    "react/jsx-one-expression-per-line": "off", // 한 라인에 여러 개의 JSX를 사용 가능
    "implicit-arrow-linebreak": "off", // 연산자 다음 줄 바꿈을 사용 가능
    "no-shadow": "off", // 파일 내에서 중복 이름을 사용 가능,
    "operator-linebreak": "off", //연산자 다음 줄 바꿈 허용
    "react/react-in-jsx-scope": "off", // jsx를 사용해도 React를 꼭 import 하지 않아도 됨
    "react/jsx-props-no-spreading": "off", // props를 스프레드 가능
    "jsx-a11y/anchor-is-vaild": "off", // nextjs 에서는 a에 href 없이 사용
    "global-require": "off", // 함수 내에서 require 사용 가능
    "react/function-component-definition": true,
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".tsx"] }, // jsx 사용 가능한 확장자 설정
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      }, // import 시 확장자명 사용 X
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", "d.ts"],
      },
    },
  },
};
