import { useState } from 'react';
import styles from './Rightcss.module.css';
import { makeDummy } from '../../Modules/iotModule';
import { getDevices } from '../../Modules/iotModule';
import Elc_child from './Elc_child';

const Right_Elc = (props) => {
  
  const [value, setValue] = useState();
  const [devices, setDevice] = useState('');
  const [number, setNumber] = useState(1);

  const increase = () => {
    setNumber(number + 1);
  };

  const tempArr = getDevices();
  
  return (
    <div className={`${styles.Right_elec}`}>
     
      
        {tempArr.map((item) => (
          <Elc_child deviceInfo={item} index={value}  number={number} increase={increase}/>
        ))}
      

    </div>
  );
};

export default Right_Elc;