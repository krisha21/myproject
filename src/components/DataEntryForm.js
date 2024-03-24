import React, { useState } from 'react';
import Graph from "./ChartVisualization"


const DataEntryForm = () => {
    const [grade, setGrade] = useState({ name: "", grade: "" });
    const [count, setCount] = useState([]);
    
    
    const handleSave = (e) => {
      const { name, value } = e.target;
      setGrade( {...grade, [name]: value} );
    }
  
    const handleSubmit = (e) => {
        e.preventDefault();
        if (grade.name && grade.grade) {
          setCount(prevCount=> [...prevCount, grade]); 
          setGrade({ name: "", grade: "" });
        } else {
          alert("Please fill all the fields");
        }
      };
      
    return (
      <>
      <div className='text-center container-fluid bg-dark'>
     <h1 className='fw-bold text-black'>USER DASHBOARD</h1>

      </div>
      <div className='row'>
      <div className='col-6 text-center bg-primary'>
      <h1 className='bg-black text-white ms-2'>SUBJECT DETAILS</h1>
        <form onSubmit={handleSubmit} >
        <div className='text-black fw-bold '>
          <label>
            SUBJECT:
            <input type="text" value={grade.name} name="name" onChange={handleSave} />
          </label>
          </div><br/>
          <div className='text-black fw-bold'>
          <label>
            GRADE:
            <input type="number" value={grade.grade} name="grade" onChange={handleSave} />
          </label>
          </div><br/>
          <div>
          <button className='btn btn-outline-danger'  type="submit">SHOW</button>
          </div>
        </form>
        </div>
        <div className='col-6 bg-primary'>
        <h1 className="text-center bg-black text-white">USER DETAILS</h1>
            <div className="row">
            {count.map((item) => (
             
                <div className="col-3 bg-black ms-5 mt-3 mb-2">
                    <h4 className="text-white"><span className="text-white">NAME:</span> {item.name}</h4>
                    <h4 className="text-white"><span className="text-white">GRADE:</span> {item.grade}</h4>
                </div>
            
            ))}
            </div>
        </div>
        </div>
        <div className='mt-5 '>
        <h1 className='bg-primary text-black text-center fw-bold'>USER SUBJECT ANALYSIS</h1>
          <Graph data={count} />
        </div>
        
      </>
    );
  }
  
  export default DataEntryForm;