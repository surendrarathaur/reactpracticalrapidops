import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Select from 'react-select';

function Inputlist() {
    const [inputList, setInputList] = useState([{ tables: [], privileges: [] }]);
    
    const tableoptions = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    const privilegesoptions = [
        { value: 'All', label: 'All' },
        { value: 'Add', label: 'Add' },
        { value: 'Update', label: 'Update' },
        { value: 'Delete', label: 'Delete' }
    ]

    //const selectedOption = null;

    // handle input change
    const handleChange = (e, index) => {        
       // setInputList(...inputList, {tables: e});
        console.log(`Option selected:`, e);
        //console.log(`Option inputList:`, inputList);
    }

    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, { tables: [], privileges: [] }]);
    };

    const formSubmit = (e) => {
        e.preventDefault();
        console.log('Data is submmited')
    }

    return (
        <div className="container">
            <form onSubmit={formSubmit}>
                <fieldset>           
            {inputList.map((x, i) => {
                        return (
                            <div className="row" key={i}>                            
                            <div className="col-sm-4">
                                <Select 
                                    options={tableoptions}                                
                                    isMulti
                                    name="tables"
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                    onChange={e => handleChange(e,i)}
                                />                      
                            </div>
                            <div className="col-sm-4">
                                <Select 
                                options={privilegesoptions}
                                isMulti
                                name="privileges"
                                className="basic-multi-select"
                                classNamePrefix="select"
                                onChange={e => handleChange(e,i)}                                
                                />
                            </div>
                            <div className="btn-box">
                                {inputList.length !== 1 && <button
                                className="mr10"
                                onClick={() => handleRemoveClick(i)}>Remove</button>}
                                {inputList.length - 1 === i && <button onClick={handleAddClick}>Add Privileges</button>}
                            </div>
                            <br/>
                            <hr />
                            <br/>
                            </div>
                        );
                    })}
                    <br/>
                    <div style={{ marginTop: 20 }}>
                        <button type="submit">Save Privileges</button>
                    </div>
                    <div style={{ marginTop: 20 }}>
                        {JSON.stringify(inputList.map(x => {
                            return x;
                         }))}
                    </div>
                </fieldset>
            </form> 
        </div>
    )
}

export default Inputlist;