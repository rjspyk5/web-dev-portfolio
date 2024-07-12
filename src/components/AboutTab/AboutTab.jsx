import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export const AboutTab = () => {
  return (
    <div>
      <Tabs>
        <TabList>
          <div className="flex">
            <Tab>Title 1</Tab>
            <Tab>Title 2</Tab>
          </div>
        </TabList>

        <TabPanel>
          <h2>Test 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};
