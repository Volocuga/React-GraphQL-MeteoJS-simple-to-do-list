import {createApolloServer} from 'meteor/apollo';
import {makeExecutableSchema} from 'graphql-tools';
import merge from 'lodash/merge';

import ResolutionsSchema from '../../api/resolutions/Resolution.graphql';
import UserSchema from '../../api/users/User.graphql';
import GoalSchema from '../../api/goals/Goal.graphql';

import ResolutionsResolver from '../../api/resolutions/resolvers.js';
import UserResolver from '../../api/users/resolvers.js';
import GoalResolver from '../../api/goals/resolvers.js';
//he

const typeDefs = [GoalSchema, ResolutionsSchema, UserSchema];

const resolvers = merge(GoalResolver, ResolutionsResolver, UserResolver);

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

createApolloServer({
    schema
});