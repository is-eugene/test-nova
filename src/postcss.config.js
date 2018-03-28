module.exports = {
    plugins: {
        // include whatever plugins you want
        // but make sure you install these via yarn or npm!

        // add browserslist config to package.json (see below)
        autoprefixer: {
            "browsers": [
                "> 1%"
            ]
        },
        'postcss-inline-svg': {

        },
        /*'postcss-style-guide': {
          project: 'Novatour',
          dest: '../styleguide/index.html',
          showCode: true,
        },
        'postcss-base64': {
          extensions: ['.png']
        }*/
    }
}
