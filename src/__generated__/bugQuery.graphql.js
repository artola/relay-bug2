/**
 * @flow
 * @relayHash 54de159da6f2880ff96a1d3a7e5dbf81
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type bugQueryVariables = {||};
export type bugQueryResponse = {|
  +me: ?{|
    +foo: ?number,
    +bar: ?number,
  |}
|};
export type bugQuery = {|
  variables: bugQueryVariables,
  response: bugQueryResponse,
|};
*/


/*
query bugQuery {
  me {
    foo
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "me",
    "storageKey": null,
    "args": null,
    "concreteType": "User",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "foo",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ClientExtension",
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "bar",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "bugQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "bugQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "bugQuery",
    "id": null,
    "text": "query bugQuery {\n  me {\n    foo\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f64c7531ac8f9ff01a006449d0835067';
module.exports = node;
