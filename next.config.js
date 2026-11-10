import mdxx from '@next/mdx'
const withMDX = mdxx({
  extension: /\.mdx?$/
})

export default withMDX({
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'lh6.googleusercontent.com' },
      { protocol: 'https', hostname: 'media.giphy.com' }
    ],
    qualities: [75, 100]
  },

  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx']
})
