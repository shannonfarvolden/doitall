const User = `
schema {
  query: UserQuery
}
type UserQuery {
  User(id: ID!): User
  Users: [User]
}
type User {
  id: ID
  email: String
  username: String
  password: String
  confirmPassword: String
}

`;

module.exports = User;