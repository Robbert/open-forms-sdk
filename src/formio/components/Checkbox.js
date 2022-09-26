import { Formio } from 'react-formio';

import { applyPrefix } from '../utils';


/**
 * Extend the default checkbox field to modify it to our needs.
 */
class Checkbox extends Formio.Components.components.checkbox {
  get inputInfo() {
    const info = super.inputInfo;
    const parentRef = super.elementInfo(); 
    const parentId = parentRef.component && parentRef.component.id;
    
    info.attr['aria-describedby'] = parentId && `${parentId}-errors`;
    
    // change the default CSS classes
    info.attr.class = [
      applyPrefix('checkbox__input'),
      'utrecht-custom-checkbox',
      'utrecht-custom-checkbox--html-input',
    ].join(' ');
    return info;
  }
}


export default Checkbox;
