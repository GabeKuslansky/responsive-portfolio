module.exports = {
  plugins: ["tailwindcss", "autoprefixer", process.env.NODE_ENV === "production" ? "cssnano" : undefined, "postcss-preset-env"],
};
