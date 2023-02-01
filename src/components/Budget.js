import React, { useContext , useState} from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    var [ newBudget ] = useState('');
    const { expenses, budget } = useContext(AppContext);
    const { currency } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    
    const submitBudget = (modifiedBudget) => {
        var testBudget = parseInt(modifiedBudget);
        if(testBudget > 200000) {
            alert("The value cannot exceed "+20000);
            newBudget = budget;
            return;
        } else if (modifiedBudget < totalExpenses){
            alert("The value must be more than " + totalExpenses);
            newBudget = budget;
            return;
        }else{
            newBudget = modifiedBudget;
        }
    };

    return(
        <tr>
            <div className='alert alert-secondary'>
                <td><span>Budget:{currency} </span></td>
                <td><input
                    required='required'
                    type='number'
                    id='newBudget'
                    step = '100'
                    min = '2000'
                    max = '20000'
                    style={{ marginLeft: '2rem' , size: 10}}
                    onChange={(event)=>{newBudget = event.target.value}}
                    onBlur={(event) => {submitBudget(event.target.value)}}>
                    </input>
                </td>
            </div>    
        </tr>
    );
};

export default Budget;

    // const { budget } = useContext(AppContext);
    // return (
    //     <div className='alert alert-secondary'>
    //         <span>Budget: £{budget}</span>
    //     </div>
    // );
    // const [budget, setAction] = useState('');