import { GraphQLClient } from 'graphql-request';
import { RESTORE_ACCESS_TOKEN } from '../../components/commons/queries';

export async function getAccessToken() {
  try {
    const graphQLClient = new GraphQLClient(
      // 기존 수업용 URI
      // 'https://backend06.codebootcamp.co.kr/graphql',
      'https://team04backend.shop/graphql',
      { credentials: 'include' }
    );

    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
    console.log(result);
    const newAccessToken = result.restoreAccessToken.accessToken;
    return newAccessToken;
  } catch (error) {
    console.log(error.message);
  }
}
