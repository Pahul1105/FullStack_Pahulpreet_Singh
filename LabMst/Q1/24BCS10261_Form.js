import { useState } from "react";
function Form(){
    var data = { 
        firstname:"", 
        email:"", 
        age:"" 
    };
    const [inputData, setInputData] = useState(data);
    const [message, setMessage] = useState("");
    function handleData(e){
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value
        });
    }
    function submitData(e){
        e.preventDefault();   
        console.log(inputData);
        setMessage("Data Saved Successfully");
    }
    return(
        <>
        <form onSubmit={submitData}>
            <label>Name: </label>
            <input
            type="text"
            name="firstname"
            value={inputData.firstname}
            onChange={handleData}
            />
            <br/><br/>
            <label>Email: </label>
            <input
            type="email"
            name="email"
            value={inputData.email}
            onChange={handleData}
            />
            <br/><br/>
            <label>Age: </label>
            <input
            type="number"
            name="age"
            value={inputData.age}
            onChange={handleData}
            />
            <br/><br/>
            <button type="submit">Submit</button>
        </form>
        <h3>{message}</h3>
        </>
    );
}
export default Form;
