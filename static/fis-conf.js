fis.match('*', {
  release: '/oss/static/$0'
});

fis.match('*.html', {
  release: '/oss/$0'
});

fis.match('::package', {
  postpackager: fis.plugin('loader', {
    allInOne: false,
    sourceMap: true,
    useInlineMap: true
  })
});

fis.media("prod").match('*.{js,css}', {
  useHash: true
});

fis.media("prod").match("**.js",{
  optimizer: fis.plugin('uglify-js')
});

fis.media("prod").match("config.js",{
  optimizer: null
});

fis.media("prod").match("**.css",{
  optimizer: fis.plugin('clean-css')
});

fis.media('prod').match('*.png', {
  optimizer: fis.plugin('png-compressor')
});
