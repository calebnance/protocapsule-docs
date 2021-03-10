module.exports = {
  title: "protocapsule",
  tagline:
    "helping design technology teams internally share, iterate, and user test... all in one place.",
  url: "https://protocapsule.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/icon-bg.png",
  organizationName: "calebnance",
  projectName: "protocapsule-docs",
  themeConfig: {
    image: "img/social-preview.png",
    prism: {
      theme: require("prism-react-renderer/themes/oceanicNext")
    },
    colorMode: {
      disableSwitch: true
    },
    hideableSidebar: true,
    navbar: {
      title: "protocapsule",
      logo: {
        alt: "protocapsule logo",
        src: "img/icon.png"
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left"
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://gum.co/protocapsule",
          label: "Buy",
          position: "right"
        }
      ]
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "overview",
              to: "docs/"
            }
          ]
        },
        {
          title: "Creator",
          items: [
            {
              label: "twitter",
              href: "https://twitter.com/calebnance"
            }
          ]
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog"
            },
            {
              label: "GitHub",
              href: "https://github.com/calebnance/protocapsule-docs"
            }
          ]
        }
      ],
      copyright: `copyright &copy; ${new Date().getFullYear()} Caleb Nance. Built with Docusaurus.`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/calebnance/protocapsule-docs/edit/main/"
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: "all posts",
          editUrl: "https://github.com/calebnance/protocapsule-docs/edit/main/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
