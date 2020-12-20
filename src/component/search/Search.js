import React, { useState} from 'react'
import './Search.css'
import { Form} from 'react-bootstrap'

const Search = () => {

    const [query, setQuery] = useState('');
    
    const [photos, setPhotos] = useState([]);
    
    
    const searchPhotos = async (e) => {
        e.preventDefault();
        setQuery('');
                
        const url = `https://api.unsplash.com/search/photos/?client_id=GzBskxl0x_IB-DGtwtnSomX-FTQzU_woucwvDZjsrdk&query=${query}`;
        
        try {
            const res = await fetch(url);
            const data  = await res.json();
            console.log(data);
            setPhotos(data.results);
            alert('Check console for results');
        }catch(err){
            console.error(err);
        }
    }
    return (
        <div className="mySearch"> 
            <Form onSubmit ={searchPhotos}>
                <input type="text" placeholder="Search..." className="searchbar mx-2" value={query} onChange={(e) => setQuery(e.target.value)} />
            </Form>
            {
                photos.map(photo =>(
                    <div key={photo.id} photo={photo}></div>
                ))
            }   
        </div>
    )
}

export default Search
