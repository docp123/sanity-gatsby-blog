export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60bf15f94fccb2eed57b208f",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-2xsvj4o6",
                  apiId: "7f006d55-3e11-4eb9-93aa-7d11c97bfc24",
                },
                {
                  buildHookId: "60bf15f972f6e9edd5c56be2",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-xcrje98m",
                  apiId: "f4140273-663c-45b0-b668-52df1ef35a08",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/docp123/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-xcrje98m.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
