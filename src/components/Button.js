import React from 'react';
import PropTypes from 'prop-types';

import {getBEMClassName} from 'utils';
import { Button as UtrechtButton, LinkButton as UtrechtLinkButton } from '@utrecht/component-library-react';

export const VARIANTS = [
  '',
  'primary',
  'secondary',
  'anchor',
  'danger',
  'image',
];


const Button = ({ type='', component: Component='button', variant='', onDisabledClick, children, ...extra }) => {
    const className = getBEMClassName('button', [variant]);

    // https://www.a11y-101.com/development/aria-disabled
    const {disabled, ...remainingProps} = extra;

    const props = {
      className,
      ...remainingProps,
    };
    if (type) {
      props.type = type;
    }

    if (disabled) {
      props['aria-disabled'] = 'true';
      // force the onClick handler to do nothing so we can't submit
      props.onClick = (event) => {
        if (onDisabledClick) onDisabledClick();
        event.preventDefault();
      };
    }

    if (variant === 'primary') {
      props.appearance = 'primary-action-button';
    }
    else if (variant === 'danger') {
      props.appearance = 'primary-action-button';
      props.hint = 'danger';
      props.className = `${props.className} utrecht-button--danger`;
    }

    children = children ? <span className={getBEMClassName('button__label')}>{children}</span> : null;

    if (variant === 'anchor') {
      return <UtrechtLinkButton {...props}>
        {children}
      </UtrechtLinkButton>
    }

    return (
      <UtrechtButton {...props}>
        {children}
      </UtrechtButton>
    );
};

Button.propTypes = {
    component: PropTypes.string,
    type: PropTypes.string,
    variant: PropTypes.oneOf(VARIANTS),
    onDisabledClick: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};

export default Button;
