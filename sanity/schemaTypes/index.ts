import { type SchemaTypeDefinition } from 'sanity';

//import { blockContentType } from "./blockContentType";
import { categoryType } from './categoryType';
import { productType } from './productType';
import { orderType } from './orderTypes';
//import { postType } from "./postType";
//import { authorType } from "./authorType";

export const schema: { types: SchemaTypeDefinition[] } = {
  //types: [blockContentType, categoryType, postType, authorType],
  types: [categoryType, productType, orderType],
};
