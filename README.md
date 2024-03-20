Relative paths are ways to use files from other folders. But as the project scales up, these imports will look messy especially if the components are deeply nested.

eg: import Header from "../../../../../Coponent/Header.tsx"
Alternative: import Header from "@Component/Header.tsx "

This repository explain how to make Path aliases with TypeScript in Node.js(express) & React(Vite)
