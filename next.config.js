// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
    // eslint-disable-next-line prettier/prettier
    pwa: {
        dest: 'public',
        disable: !isProd
    },
    images: {
        domains: ['media.graphcms.com']
    }
})