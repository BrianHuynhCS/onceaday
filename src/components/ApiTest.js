import React, {useState} from 'react';
import axios from 'axios';

function ApiTest() {
    const [response, setResponse] = useState('');

    const handleTestClick = async () => {
        try {
            const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
            const apiResponse = await axios.get(apiUrl);
            setResponse(JSON.stringify(apiResponse.data, null, 2));
        } catch (error) {
            console.log("Error Testing API", error)
        }
    };

    return (
        <div>
          <button onClick={handleTestClick}>Test API</button>
          <pre>{response}</pre>
        </div>
    );
}

export default ApiTest;