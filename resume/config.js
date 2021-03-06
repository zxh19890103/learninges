const BABEL_OPTIONS = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    browsers: ["last 2 versions", "safari >= 7"]
                }
            }
        ]
    ],
    plugins: [
        '@babel/plugin-transform-runtime',
        '@babel/plugin-syntax-dynamic-import'
    ]
}

module.exports = {
    BABEL_OPTIONS
}