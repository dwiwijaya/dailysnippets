import React from 'react'

const ContentOfTheDay = ({ data, isLoading, isError }) => {
    if (isLoading) return <div className="text-lg font-medium">Loading...</div>;
    if (isError) return <div className="text-lg font-semibold text-red-400">Error fetching data</div>;

    const firstItem = data[0];
    const value = Object.values(firstItem)[0];

    return <div className="text-lg font-medium">{value}</div>;
};

export default ContentOfTheDay