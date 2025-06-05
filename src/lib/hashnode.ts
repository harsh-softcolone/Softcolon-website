import { HashNodeGetSinglePostResponse, HashnodePost } from '@/interface';
import { GraphQLClient, gql } from 'graphql-request';

const endpoint = 'https://gql.hashnode.com';

export type HashnodePostsResponse = {
  publication: {
    posts: {
      edges: {
        node: HashnodePost;
      }[];
    };
  };
};

export const getHashnodePosts = async (after?: string) => {
  const graphQLClient = new GraphQLClient(endpoint);

  const query = gql`
    query PublicationPosts($host: String!, $after: String) {
      publication(host: $host) {
        posts(first: 6, after: $after) {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            node {
              title
              brief
              slug
              coverImage {
                url
              }
              publishedAt
            }
          }
        }
      }
    }
  `;

  const variables: { host: string; after?: string } = {
    host: 'coderg-tales.hashnode.dev',
  };
  if (after) variables.after = after;

  const data = await graphQLClient.request<
    HashnodePostsResponse & {
      publication: {
        posts: { pageInfo: { hasNextPage: boolean; endCursor: string } };
      };
    }
  >(query, variables);

  return {
    posts: data.publication.posts.edges.map((edge) => edge.node),
    pageInfo: data.publication.posts.pageInfo,
  };
};

const getSingleHashnodePostQuery = gql`
  query GetPost($host: String!, $slug: String!) {
    publication(host: $host) {
      post(slug: $slug) {
        title
        slug
        content {
          markdown
        }
        brief
        coverImage {
          url
        }
        publishedAt
      }
    }
  }
`;

export const getSingleHashnodePost = async (slug: string) => {
  const graphQLClient = new GraphQLClient(endpoint);

  const data = await graphQLClient.request<HashNodeGetSinglePostResponse>(
    getSingleHashnodePostQuery,
    {
      host: 'coderg-tales.hashnode.dev',
      slug,
    },
  );

  return data;
};
