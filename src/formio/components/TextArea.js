import { Formio } from 'react-formio';

import { applyPrefix } from '../utils';


/**
 * Extend the default text field to modify it to our needs.
 */
class TextArea extends Formio.Components.components.textarea {
  get inputInfo() {
    const info = super.inputInfo;
    const parentRef = super.elementInfo(); 
    const parentId = parentRef.component && parentRef.component.id;
    
    info.attr['aria-describedby'] = parentId && `${parentId}-errors`;
    
    // change the default CSS classes
    info.attr.class = [
      applyPrefix('textarea'),
      'utrecht-textarea',
      'utrecht-textarea--html-textarea',
    ].join(' ');
    return info;
  }
}


export default TextArea;
