/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const result = await graphql(
        `
        query Products {
            dato {
                allProducts {
                    listImage {
                        ...FileRecord
                    }
                    whatsInIt {
                        ...FileRecord
                    }
                }
            }
        }
        fragment FileRecord on DatoCMS_FileField {
            alt
            id
            url
            title
        }        
        `
      )

}