import { gql } from "@apollo/client";
export const GET_HOME_PAGE_DATA = gql`
  query Home {
    home {
      data {
        attributes {
          Template {
            ... on ComponentTemplateHome {
              FirstPhrase
              PhraseList
              Title
              Description
              Image {
                data {
                  attributes {
                    name
                    url
                  }
                }
              }
              Button {
                ButtonText
                ButtonUrl
                Target
                IconClass
              }
              SocialLinks {
                IconsClass
                Url
                Target
              }
            }
            ... on ComponentTemplateAbout {
              TitleSubtitle {
                Title
                Subtitle
                Url
              }
              Description
              Experience {
                Duration
                Description
              }
              Image {
                data {
                  attributes {
                    name
                    url
                  }
                }
              }
              Button {
                ButtonText
                ButtonUrl
                Target
                IconClass
              }
              ResumeOrFile {
                data {
                  attributes {
                    name
                    url
                  }
                }
              }
            }
            ... on ComponentTemplateSkills {
              TitleSubtitle {
                Title
                Subtitle
                Url
              }
            }
            ... on ComponentTemplateQualification {
              TitleSubtitle {
                Title
                Subtitle
                Url
              }
            }
            ... on ComponentTemplateServices {
              TitleDescription {
                Title
                Subtitle
                Url
              }
            }
            ... on ComponentTemplatePortfolio {
              TitleSubtitle {
                Title
                Subtitle
                Url
              }
              PortfolioCard: Card {
                Image {
                  data {
                    attributes {
                      name
                      url
                    }
                  }
                }
                Title
                Subtitle
                Button {
                  ButtonText
                  ButtonUrl
                  Target
                  IconClass
                }
              }
            }
            ... on ComponentTemplateProject {
              Title
              Description
              Image {
                data {
                  attributes {
                    name
                    url
                  }
                }
              }
              Button {
                ButtonText
                ButtonUrl
                Target
                IconClass
              }
              Card {
                Name
                Designation
                Description
                Image {
                  data {
                    attributes {
                      name
                      url
                    }
                  }
                }
              }
            }
            ... on ComponentTemplateTestimonial {
              TitleSubtitle {
                Title
                Subtitle
                Url
              }
            }
            ... on ComponentTemplateContact {
              TitleSubtitle {
                Title
                Subtitle
                Url
              }
              ContactTitle {
                Title
                Subtitle
                IconClass
              }
            }
          }
        }
      }
    }
    qualifications {
      data {
        attributes {
          QualificationType
          QualiaficationDescription {
            Title
            Institution
            TimeSlot
          }
        }
      }
    }
    services {
      data {
        attributes {
          ServicesTitle
          IconClass
          Description
        }
      }
    }
    skills {
      data {
        attributes {
          SkillName
          Experience
          SkillPercentage {
            SubSkillTitle
            Percentag
          }
        }
      }
    }
  }
`;
