import {graphql} from 'react-relay';

graphql`
  query bugQuery {
    me {
      foo
      bar
    }
  }
`;
