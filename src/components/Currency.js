import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = (props) => {
    
    const{ dispatch } = useContext(AppContext);
    var [currPrefix,setCurrPrefix] = useState('$','');

    const changedCurrency = (curr) =>{
        currPrefix = curr;
        setCurrPrefix(currPrefix);
        dispatch({
           type:'CHG_CURRENCY',
           payload:currPrefix, 
        });
    };
    
    return(
        <tr>
            <div className="input-group-prepend" style={{marginLeft: '2rem'}}>
                <td>
                 <select className="custom-select" id="inputGroupSelect03" value = {currPrefix} onChange={(event) => changedCurrency(event.target.value)}>
                     <option defaultValue="" defaultName=""> Choose Currency</option>
                     <option Value="$" name="$ Dollar"> $ Dollar</option>
                     <option value="£" name="£ Pound">£ Pound</option>
                     <option value="€" name="€ Euro">€ Euro</option>
                     <option value="₹" name="₹ Ruppee">₹ Ruppee</option>
                 </select>
                </td>
            </div>    
        </tr>
        
    );
};

export default Currency;