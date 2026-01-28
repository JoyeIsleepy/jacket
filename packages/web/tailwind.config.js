/** @type {import('tailwindcss').Config} */
export default {
  // 关键：指定需要扫描的文件路径
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
