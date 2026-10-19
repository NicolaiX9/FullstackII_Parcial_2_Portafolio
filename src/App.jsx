import React from 'react';
import { ConfigProvider, theme } from 'antd';
import { TabsStructure } from './components/organisms/TabsStructure.jsx';
import { DefaultFooter } from './components/atoms/DefaultFooter.jsx';

function App() {
    return (
        <ConfigProvider
            theme={{
                algorithm: theme.darkAlgorithm,
            }}
        >
            <TabsStructure />
            <DefaultFooter />
        </ConfigProvider>
    );
}

export default App;