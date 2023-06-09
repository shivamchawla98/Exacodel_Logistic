import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import gql from 'graphql-tag';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.


const typeDefs = gql`
type User {
  id: ID!
  name: String!
  role: String!
}

type Query {
  users: [User]
  user(id: ID!): User
}
`;

const resolvers = {
  Query: {
    users: () => users,
    user: (_,{ id }) => {

      return users.find((user) => user.id === id);
    },
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
// const { url } = await startStandaloneServer(server, {
//   listen: { port: 4000 },
// });

const handler = startServerAndCreateNextHandler(server);

export async function GET(request) {
  return handler(request);
}

export async function POST(request) {
  return handler(request);
}

const users = [
  {
    id: '1',
    name: 'Abhishek',
    role: 'developer'
  },
  {
    id: '2',
    name: 'City of Glass',
    role: 'social media marketer',
  },
  { id: '3', name: 'Jane Smith', role: 'operations'}
];
