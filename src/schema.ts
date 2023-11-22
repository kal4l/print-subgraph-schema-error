import { buildSubgraphSchema } from '@apollo/subgraph'
import * as fs from 'fs'
import { gql } from 'apollo-server-core'
import path from 'path'
import { basicSchemaTransformer } from './schema-transformer'

const schemaText = fs.readFileSync(path.join(__dirname, 'schema.graphql')).toString()
const typeDefs = gql(schemaText)

let schema = buildSubgraphSchema([
  { typeDefs }
])

schema = basicSchemaTransformer(schema)

export { schema }