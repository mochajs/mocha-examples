module.exports = (api) => {
  // Cache configuration is a required option
  api.cache(false);

  const presets = [
    [
      "@babel/preset-env", 
      { 
        useBuiltIns: false
      }
    ],
    "@babel/preset-react"
  ];

  return { presets };
};
