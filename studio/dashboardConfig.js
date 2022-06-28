export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62bb21dd888da02ead522730',
                  title: 'Sanity Studio',
                  name: 'djeglin-blog-studio',
                  apiId: 'b77a7ca9-2bbf-4004-902f-bef93ecc8fb7'
                },
                {
                  buildHookId: '62bb21ddc71cda2f70eca90e',
                  title: 'Blog Website',
                  name: 'djeglin-blog',
                  apiId: 'e576a5b4-d6aa-469f-96d8-dcfceb75a663'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/djeglin/djeglin-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://djeglin-blog.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
