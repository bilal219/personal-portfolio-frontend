import { gql } from "@apollo/client";
export const GET_HOME_PAGE_DATA = gql`
  query Home {
    home {
      data {
        attributes {
          heading
        }
      }
    }
  }
`;
