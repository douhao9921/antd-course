import React from 'react';
import DocumentTitle from 'react-document-title';
import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';

const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
    maxWidth: 1599,
  },
  'screen-xxl': {
    minWidth: 1600,
  },
};

export default () => {
  const layout = (
    <h1>Hello World!</h1>
  );

  return (
    <DocumentTitle title="hello">
      <ContainerQuery query={query}>
        {params => (
          <div className={classNames(params)}>{layout}</div>
        )}
      </ContainerQuery>
    </DocumentTitle>
  );
}