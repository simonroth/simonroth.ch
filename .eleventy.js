module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy( "./source/.htaccess" );
  eleventyConfig.addPassthroughCopy({ "./_build/styles.css": "./styles." + process.env.npm_package_version + ".css" });
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addWatchTarget("./_build/styles.css");

  return {
    dir: {
      input: "source",
      output: "public"
    }
  }
};
