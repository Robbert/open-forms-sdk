import Body from 'components/Body';
import Card from 'components/Card';
import FAIcon from 'components/FAIcon';
import {getBEMClassName} from 'utils';

const MaintenanceMode = ({ title }) => {
  const alertClassName = getBEMClassName('alert', ['info']);
  return (
    <Card title={title}>
      <div className={alertClassName}>
        <span className={getBEMClassName('alert__icon')}>
          <FAIcon icon="info" />
        </span>

        <Body>
          This form is currently undergoing maintenance and can not be accessed at the moment.
        </Body>
      </div>
    </Card>
  )
};

export default MaintenanceMode;