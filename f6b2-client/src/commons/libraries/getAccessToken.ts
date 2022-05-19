import { GraphQLClient } from 'graphql-request';
import { RESTORE_ACCESS_TOKEN } from '../../components/commons/queries';

export async function getAccessToken() {
  try {
    const graphQLClient = new GraphQLClient(
      // 기존 수업용 URI
      // 'https://backend06.codebootcamp.co.kr/graphql',
      // 'hiosi123.shop/graphql',
      'https://team04backend.shop/graphql',
      { credentials: 'include' }
    );

    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken;
    return newAccessToken;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
}
