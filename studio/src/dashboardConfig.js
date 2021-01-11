export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ffcb97cf2e7c60abf2d3afe',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-uyxb2by2',
                  apiId: '32235c30-adbe-4308-8b1c-4a5ac903c73a'
                },
                {
                  buildHookId: '5ffcb97d38f0ae008cc5b180',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-dzfq3ego',
                  apiId: '378d1a2e-2875-4346-94cc-c553fd907d27'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/graysonhicks/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-dzfq3ego.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
