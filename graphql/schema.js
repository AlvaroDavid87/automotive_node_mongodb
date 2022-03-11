const { buildSchema } = require('graphql'); 

const brandSchema =  buildSchema(` 
type Brand { 
  id: ID!
  name: String!
  description: String
}
input BrandInput { 
  name: String!
  description: String
}
type Query { 
  brand(id: ID!): Brand
  brands: [Brand]
}
type Mutation { 
  createBrand(brandInput: BrandInput): Brand
  deleteBrand(id: ID!): Brand
  updateBrand(id: ID!, brandInput: BrandInput): Brand!
}
schema { 
  query: Query
  mutation: Mutation
}
`)

module.exports = brandSchema; 