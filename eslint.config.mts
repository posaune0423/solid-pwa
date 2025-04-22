import js from "@eslint/js";
import prettier from "eslint-config-prettier/flat";
import solid from "eslint-plugin-solid/configs/typescript";
import tsEslint from "typescript-eslint";

export default tsEslint.config(
  js.configs.recommended,
  tsEslint.configs.recommended,
  solid,
  prettier,
);
