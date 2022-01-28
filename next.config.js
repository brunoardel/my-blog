module.exports = {
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat'
      })
    }

    return config
  },
  async rewrites() {
    return [
      { source: '/js/', destination: 'https://brunoardel.vercel.app/' },
      { source: '/jekyll/', destination: 'https://brunoardel.vercel.app/' },
      { source: '/svg/', destination: 'https://brunoardel.vercel.app/' },
      { source: '/dev/', destination: 'https://brunoardel.vercel.app/' },
      { source: '/tags/', destination: 'https://brunoardel.vercel.app/' },
      { source: '/page/:slug*', destination: 'https://brunoardel.vercel.app/' }
    ]
  },
  async redirects() {
    return [
      {
        source: '/teste',
        destination: 'https://brunoardel.vercel.app/',
        permanent: true
      }
    ]
  },
  images: { domains: ['pbs.twimg.com'] }
}
