import blockContent from "./blockContent";
import category from "./category";
import product from "./product";

// import localeString from "./locale/String";
// import localeText from "./locale/Text";
// import localeBlockContent from "./locale/BlockContent";
// import { user, account } from "next-auth-sanity/schemas";

// // Then we give our schema to the builder and provide the result to Sanity
// export default createSchema({
//   // We name our schema
//   name: "default",
//   // Then proceed to concatenate our document type
//   // to the ones provided by any plugins that are installed
//   types: schemaTypes.concat([
//     // The following are document types which will appear
//     // in the studio.
//     product,
//     category,
//     // When added to this list, object types can be used as
//     // { type: 'typename' } in other document schemas
//     blockContent,
//     localeText,
//     localeBlockContent,
//     localeString,
//     user,
//     account,
//   ]),
// });




export const schemaTypes = [blockContent, product, category]