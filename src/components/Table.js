import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Body from 'components/Body';
import {getBEMClassName} from 'utils';
import {
  Table as NLTable,
  TableBody as NLTableBody,
  TableCaption as NLTableCaption,
  TableRow as NLTableRow,
  TableCell as NLTableCell,
  TableHeaderCell as NLTableHeaderCell,
} from '@utrecht/component-library-react';

const TableCell = ({ children, component=Body, modifiers=[] }) => {
  const Component = component;
  const className = getBEMClassName('table__cell', modifiers);
  return (
    <NLTableCell className={className}>
      <Component component={'div'}>{children}</Component>
    </NLTableCell>
  );
};

TableCell.propTypes = {
    children: PropTypes.node,
    component: PropTypes.elementType,
    modifiers: PropTypes.arrayOf(PropTypes.string),
};

const TableHead = ({ children, component=Body, modifiers=[] }) => {
  const Component = component;
  const className = getBEMClassName('table__head', modifiers);
  return (
    <NLTableHeaderCell className={className}>
      <Component>{children}</Component>
    </NLTableHeaderCell>
  );
};

TableHead.propTypes = {
    children: PropTypes.node,
    component: PropTypes.elementType,
    modifiers: PropTypes.arrayOf(PropTypes.string),
};

const TableRow = ({ children, className='' }) => {
  className = classNames(
    getBEMClassName('table__row'),
    className,
  );
  return (
    <NLTableRow className={className}>
      {children}
    </NLTableRow>
  );
};

TableRow.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

const Table = ({ children, }) => {
  const className = getBEMClassName('table');
  return (
    <NLTable className={className}>
        {children}
    </NLTable>
  );
};

Table.propTypes = {
    children: PropTypes.node,
};

const TableBody = ({ children, }) => {
  return (
    <NLTableBody>
      {children}
    </NLTableBody>
  );
};

TableBody.propTypes = {
    children: PropTypes.node,
};

const TableCaption = ({ children, }) => {
  return (
    <NLTableCaption className={getBEMClassName('caption')}>
      {children}
    </NLTableCaption>
  );
};

TableCaption.propTypes = {
    children: PropTypes.node,
};

export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableRow,
};
