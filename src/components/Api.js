import React from "react";
import { useEffect, useState } from "react";

const Api = () => {
    const [data, setdata] = useState([]);
    const [newdata, setnewdata] = useState({
        id: "",
        Title: true,
        imageurl: new Date()
    });
    useEffect(() => {
        fetchApi_list();
    }, [])
    const handlenew = () => {
        const request = {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(newdata)
        };
        fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-08-07&sortBy=publishedAt&apiKey=ef20d6ed14a14b329904621f3c98412b", request)
            .then((res) => res.json())
            .then((json) => {
                alert("successfully created");
                setdata([json,...data]);
            }).catch((error) => console.error(error));
    }
    const handlecancel =() =>
{
    setnewdata({
        task: "",
        status: true,
        datetime: new Date()
    })
}
    const fetchApi_list = () => {
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-08-07&sortBy=publishedAt&apiKey=ef20d6ed14a14b329904621f3c98412b')
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                setdata(json);
            })
            .catch((error) => console.error(error));
    };
    const delete_Api = (id) => {
        const request = {
            method: "DELETE",
            headers: {
                'content-Type': 'application/json'
            },
        };
        fetch(`https://newsapi.org/v2/everything?q=tesla&from=2023-08-07&sortBy=publishedAt&apiKey=ef20d6ed14a14b329904621f3c98412b${id}`, request)
            .then((res) => res.json())
            .then((json) => {
                fetchApi_list();
                alert("record deleted successfully")
            })
            .catch((error) => console.error(error));
    };

    const edit_Api =(Api) =>{
        setnewdata(Api)
    }

const handleupdate =(id) =>{
    const request = {
        method: "PUT",
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify(newdata)
    };
    fetch(`https://64d461f2b592423e469410ba.mockapi.io/api/v1/Api/${id}`, request)
        .then((res) => res.json())
        .then((json) => {
            alert("Updated successfully");
            // setdata((prev)=>{
            //     prev.map((item)=>{
            //        if (item.id==json.id){
            //         item.task=newdata.task;
            //        }
            //        return item
            //     })
            //     return prev
            // }); 
            fetchApi_list() ;
            handlecancel()
        }).catch((error) => console.error(error));
}
    return (
        <>
            <div>Api</div>
            <input value={newdata.task} placeholder="Enter a name" onChange={(e) => setnewdata({ ...newdata, task: e.target.value })} />
         {   newdata.id ?    
                <>  <button onClick={() => handleupdate(newdata.id)}>Update</button>  
                <button onClick={() => handlecancel()}>Cancel</button></>:
                  <button onClick={() => handlenew()}>create new Api</button> 
}
            <ol>
                {data ? (
                    data.map((Api, index) => {
                        return (
                            <li key={`index ${index}`}>
                                <label style={{ color: Api.status ? 'green' : 'red' }}>
                                    {Api.task} <span>{Api.datetime}</span></label>
                                <button onClick={() => delete_Api(Api.id)}>Delete</button>
                                <button onClick={()=> edit_Api (Api)}>Edit</button>
                            </li>
                        )
                    })
                ) :
                    (
                        <li>No data Found</li>
                    )}
            </ol>
        </>
    )
}

export default Api;