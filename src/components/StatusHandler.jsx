import React from 'react'

const StatusHandler = ({ isLoading, isError }) => {
    if (isLoading) return <div className="text-lg font-medium">Loading...</div>;
    if (isError) return <div className="text-lg font-semibold text-red-400">Error fetching data</div>;
};

export default StatusHandler