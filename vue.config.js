module.exports = {
  css: {
    loaderOptions: {
      scss: {
        // eslint-disable-next-line quotes
        prependData: `
        @import "@/css/_variables.scss";
        @import "@/css/_input.scss";
        @import "@/css/_login.scss";
        `,
      },
    },
  },
};
