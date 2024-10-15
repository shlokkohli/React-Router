import React, { useEffect, useState } from 'react';

function Github() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/shlokkohli')
            .then((response) => response.json())
            .then(res => {
                setData(res);
            })
    }, []);

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            Github Followers of {data.login} are {data.followers}
            <img className='h-20 w-20' src={data.avatar_url} alt="Git Picture" />
        </div>
    );
}

export default Github;
