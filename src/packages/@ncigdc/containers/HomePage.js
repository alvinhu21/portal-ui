/* @flow */

import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay/compat';

import Home from '@ncigdc/components/Home';
import type { TBucket } from '@ncigdc/components/Aggregations/types';

export type TProps = {
  viewer: {
    explore: {
      genes: {
        hits: {
          total: number,
        },
      },
      ssms: {
        hits: {
          total: number,
        },
      },
    },
    repository: {
      cases: {
        hits: {
          total: number,
        },
      },
      files: {
        hits: {
          total: number,
        },
      },
    },
    projects: {
      aggregations: {
        primary_site: { buckets: [TBucket] },
      },
      hits: {
        edges: Array<{|
          node: {|
            id: string,
            project_id: string,
            primary_site: string,
            summary: {
              case_count: number,
              file_count: number,
            },
          |},
        |}>,
        total: number,
      },
    },
  },
};

type THomePageComponent = (props: TProps) => React.Element<*>;
export const HomePageComponent: THomePageComponent = (
  {
    viewer = {
      explore: {
        genes: {
          hits: {
            total: 0,
          },
        },
        ssms: {
          hits: {
            total: 0,
          },
        },
      },
      repository: {
        cases: {
          hits: {
            total: 0,
          },
        },
        files: {
          hits: {
            total: 0,
          },
        },
      },
      projects: {
        aggregations: {
          primary_site: { buckets: [] },
        },
        hits: {
          edges: [],
          total: 0,
        },
      },
    },
  } = {},
) =>
  <Home
    humanBodyData={viewer.projects.hits.edges.map(x => x.node)}
    projectsCountData={viewer.projects.hits}
    primarySitesCountData={viewer.projects.aggregations}
    casesCountData={viewer.repository.cases.hits}
    filesCountData={viewer.repository.files.hits}
    genesCountData={viewer.explore.genes.hits}
    ssmsCountData={viewer.explore.ssms.hits}
  />;

const HomePage = createFragmentContainer(HomePageComponent, {
  viewer: graphql`
      fragment HomePage_viewer on Root {
        projects {
          aggregations {
            primary_site {
              buckets {
                key
              }
            }
          }
          hits(first: 1000) {
            edges {
              node {
                id
                project_id
                primary_site
                summary {
                  case_count
                  file_count
                }
              }
            }
            total
          }
        }
        repository {
          cases {
            hits(first: 0 offset: 0) {
              total
            }
          }
          files {
            hits(first: 0 offset: 0) {
              total
            }
          }
        }
        explore {
          genes {
            hits(first: 0 offset: 0) {
              total
            }
          }
          ssms {
            hits(first: 0 offset: 0) {
              total
            }
          }
        }
      }
    `,
});

export default HomePage;
