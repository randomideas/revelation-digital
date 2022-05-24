/**
 * 👋 Hey there!
 * This file is the starting point for your new WordPress/Gatsby site! 🚀
 * For more information about what this file is and does, see
 * https://www.gatsbyjs.com/docs/gatsby-config/
 *
 */

module.exports = {
  /**
   * Adding plugins to this array adds them to your Gatsby site.
   *
   * Gatsby has a rich ecosystem of plugins.
   * If you need any more you can search here: https://www.gatsbyjs.com/plugins/
   */
  siteMetadata: {
    title: `Revelation Digital`,
    description: `The csi agency.`,
    author: `@revelationdigital`,
	siteUrl: 'https://revelation.digital/',
  }, 
  plugins: [
    /**
     * The following two plugins are required if you want to use Gatsby image
     * See https://www.gatsbyjs.com/docs/gatsby-image/#setting-up-gatsby-image
     * if you're curious about it.
     */
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Revelation Digital`,
        short_name: `Revelation Digital`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#9b03c3`,
        display: `minimal-ui`,
        icon: `static/icon-footer.png`,
      },
    },
	{
        resolve: `gatsby-plugin-advanced-sitemap`,
        options: {
            output: "/sitemap.xml",
        }
    },
	{
      resolve: "gatsby-plugin-segment-analytics",
      options: {
        writeKey: "ifuUfHDtL2QIjMJRaNBN8Bojcqg1ACUK",
      },
    },
	{
    resolve: `gatsby-plugin-nprogress`,
    options: {
      color: "#9b03c3",
      showSpinner: true,
    },
  },
    `gatsby-plugin-react-helmet`,
	{
		resolve: "gatsby-plugin-google-tagmanager",
		options: {
			id: "GTM-P873QJ",
			includeInDevelopment: false,
			defaultDataLayer: { platform: "gatsby" },
		},
	},
	{
		resolve: 'gatsby-plugin-react-helmet-canonical-urls',
		options: {
		  siteUrl: 'https://revelation.digital',
		},
	},{
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          // Cache fonts forever
          '/fonts/*': [
            'Cache-Control: public',
            'Cache-Control: max-age=365000000',
            'Cache-Control: immutable'
          ],
          // Cache images for a week
          '/images/*': [
            'Cache-Control: public',
            'Cache-Control: max-age=604800'
          ]
        }
      }
    }
  ],
}
