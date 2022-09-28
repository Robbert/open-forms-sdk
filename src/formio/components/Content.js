import { Formio } from 'react-formio';


/**
 * Extend the default Content field to modify it to our needs.
 */
class ContentComponent extends Formio.Components.components.content {
  init() {
    super.init();

    this.component.customClass = [
      this.component.customClass,
      'formio-component-content',
      'utrecht-html'
    ].join(' ');
  }
}


export default ContentComponent;
