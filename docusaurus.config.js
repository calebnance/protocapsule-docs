module.exports = {
  title: "protocapsule",
  tagline:
    "Helping design technology teams internally share, iterate, and user test... all in one place.",
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
          label: "Buy on Gumroad",
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
              label: "Getting started",
              to: "docs/"
            }
          ]
        },
        {
          title: "Creator",
          items: [
            {
              label: "Twitter",
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
      copyright: `Copyright &copy; ${new Date().getFullYear()} Caleb Nance. Built with Docusaurus.`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/calebnance/protocapsule-docs/edit/main/docs/"
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: "All Posts",
          editUrl:
            "https://github.com/calebnance/protocapsule-docs/edit/main/docs/blog/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
