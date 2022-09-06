import { Form } from '@formio/react';

export const FormioForm = ({ form }) => (<Form form={form} />);

export const FormioComponent = ({ component }) => (
  <Form form={{
    type: 'form',
    components: [component]
  }}/>);

export const FormDecorator = (Story) => (
  <div
    className="utrecht-theme utrecht-document"
    style={{'--utrecht-space-around': 1 }}
  >{Story()}</div>
);
