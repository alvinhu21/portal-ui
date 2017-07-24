// @flow

import React from 'react';
import { graphql } from 'react-relay';
import Query from '@ncigdc/modern_components/Query';
import { Row, Column } from '@ncigdc/uikit/Flex';
import styled from '@ncigdc/theme/styled';

const CenteredColumnContainer = styled(Column, {
  flex: 1,
  padding: '3rem',
  height: '50rem',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
});

export default (Component: ReactClass<*>) => (props: Object) => {
  return (
    <Query
      parentProps={props}
      name="HumanBody"
      minHeight={200}
      customLoader={({ loading }) =>
        !loading
          ? null
          : <CenteredColumnContainer>
              <Row
                style={{
                  color: 'white',
                  fontSize: '1.2em',
                  marginBottom: '1rem',
                }}
              >
                Loading, please wait...
              </Row>
              <span
                style={{ color: 'white' }}
                className="fa fa-spinner fa-spin fa-2x"
              />
            </CenteredColumnContainer>}
      variables={props.variables}
      Component={Component}
      query={graphql`
        query HumanBody_relayQuery {
          viewer {
            repository {
              files {
                aggregations {
                  cases__primary_site {
                    buckets {
                      doc_count
                      key
                    }
                  }
                }
              }
              cases {
                aggregations {
                  primary_site {
                    buckets {
                      doc_count
                      key
                    }
                  }
                }
              }
            }
          }
        }
      `}
    />
  );
};
