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
                    "6061cc44def9eb00c170a13d",
                  title: "Sanity Studio",
                  name: "new-sanity-gatsby-blog-studio",
                  apiId: "65168f80-1024-48fd-845f-b5d2246bc49f",
                },
                {
                  buildHookId: "6061cc4478654700d62d6a0e",
                  title: "Blog Website",
                  name: "new-sanity-gatsby-blog-web",
                  apiId: "82e4ab74-3313-4a5f-81c0-a73dc1d8a81a",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/jnnrdn/new-sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://new-sanity-gatsby-blog-web.netlify.app",
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
