import { GQLQueryResolvers } from "../../../resolvers-types";
import { getCategoryById, selectCategory } from "../../../shared/repositories/category.repository";

export const categoryAllQueryResolver: GQLQueryResolvers['categoryAll'] = (obj, params, context) => {
    return selectCategory(context.database);
}

export const categoryIdQueryResolver: GQLQueryResolvers['categoryId'] = (obj, { filters }: { filters: { id: any } }, context) => {
    return getCategoryById(context.database)(filters.id);
}
