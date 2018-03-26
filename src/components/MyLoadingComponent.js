import React from 'react';

const MyLoadingComponent = ({isLoading, error, pastDelay}) => {
    // 加载中
    if (isLoading) {
        return <div>Loading...</div>;
    } else if (error) {
        // 加载出错
        return <div>Sorry, there was a problem loading the page.</div>;
    } else if (pastDelay) {
        // 延迟停留中
        return <div>信息请求中...</div>;
    } else {
        return null;
    }
};
export default MyLoadingComponent;