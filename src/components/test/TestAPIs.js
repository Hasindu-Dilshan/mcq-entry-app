import { useEffect } from 'react';
import { getAllSyllabi } from '../../helpers/user-agent';

const TestAPIs = () => {

    useEffect(() => {
        async function showSyllabi() { console.log(await getAllSyllabi()) };

        showSyllabi();
    });

    return(
        <>
            <h1>Test APIs</h1>
            <h3>Get all users</h3>

            <button>Send Request</button>
        </>
    );
}

export default TestAPIs;