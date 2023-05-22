import { gql } from "@apollo/client";
export const GET_LAYOUT_DATA = gql`
  query Attributes {
    layout {
      data {
        attributes {
          LogoName
          Designation
          Link {
            LinkName
            LinkUrl
            IconClass
          }
          SocialLinks {
            IconsClass
            Url
            Target
          }
          ColorValue
          CopyRightText
        }
      }
    }
  }
`;
