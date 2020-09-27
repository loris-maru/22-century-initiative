// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";
// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Document Import
import category from "./documents/category";
import profile from "./documents/profile";
import project from "./documents/project";
import country from "./documents/country";
import resources from "./documents/resources";

// Object Import
import keyInfos from "./objects/keyInfos";
import portableText from "./objects/portable-text";
import resourceLink from "./objects/resourceLink";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Documents */
    category,
    profile,
    project,
    resources,

    /* Object */
    portableText,
    keyInfos,
    country,
    resourceLink
  ])
});
