import { getDirective, MapperKind, mapSchema } from '@graphql-tools/utils'

export function basicSchemaTransformer(schema) {
  return mapSchema(schema, {

    [MapperKind.OBJECT_FIELD]: (fieldConfig) => {
      const deprecatedDirective = getDirective(schema, fieldConfig, 'deprecated')?.[0];
      if (deprecatedDirective) {
        fieldConfig.deprecationReason = deprecatedDirective['reason'];
        return fieldConfig;
      }
    }
  })
}