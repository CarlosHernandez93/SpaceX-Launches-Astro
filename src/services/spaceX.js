export const getLatestLaunchesById = async (id) => {
    const response = await fetch(`https://api.spacexdata.com/v5/launches/${id}`)

    const data = await response.json()
    return data
}

export const getLatestLaunches = async () => {
    const response = await fetch('https://api.spacexdata.com/v5/launches/query', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query:{},
            options:{
                sort: {
                    data_unix: 'asc'
                },
                limit: 12
            },
        })
    })

    const data = await response.json()
    const docsLauches = data.docs
    return docsLauches
}
