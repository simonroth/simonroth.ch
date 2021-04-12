module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy( "./source/.htaccess" );
  eleventyConfig.addPassthroughCopy({ "./_build/styles.css": "./styles.css" });
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addWatchTarget("./_build/styles.css");

  eleventyConfig.addShortcode("version", function() {
    return Date.now().toString();
  });

  return {
    dir: {
      input: "source",
      output: "public"
    }
  }
};
