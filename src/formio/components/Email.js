import { Formio } from 'react-formio';

import { applyPrefix } from '../utils';


/**
 * Extend the default email field to modify it to our needs.
 */
class Email extends Formio.Components.components.email {
  get inputInfo() {
    const info = super.inputInfo;
    // change the default CSS classes
    info.attr.class = [
      applyPrefix('email'),
      'utrecht-textbox',
      'utrecht-textbox--html-input',
      'utrecht-textbox--openforms',
      'utrecht-textbox--email',
    ].join(' ');
    return info;
  }

  // TODO: Temporary fix for issue #79. setSelectionRange() can only be used on input fields of type text, search, URL,
  // tel and password. This is fixed in FormIO 4.13, but upgrading currently causes other issues.
  restoreCaretPosition() {}
}


export default Email;
