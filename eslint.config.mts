import js from "@eslint/js";
import tsEslint from "typescript-eslint";
import solid from "eslint-plugin-solid/configs/typescript";
import prettier from "eslint-config-prettier/flat";

export default tsEslint.config(
  js.configs.recommended,
  tsEslint.configs.recommended,
  solid,
  prettier,
);
