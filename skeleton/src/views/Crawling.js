import React from "react";
import { Row } from "@enact/ui/Layout";
import { Panel, Header } from "@enact/sandstone/Panels";
import Crawtemplate from "../components/Crawling/Crawtemplate";
import Scroller from "@enact/ui/Scroller";
import { useState } from "react/cjs/react.development";

const Crawling = (props) => {
  return (
    <Row style={{ height: "100%", width: "100%", backgroundColor: "black" }}>
      <Panel>
        <Scroller>
          <Header
            onClose={() => {
              let path = props.page.path.slice();
              path.pop();
              path.push("calendar");
              props.movePage(path, { initialDate: props.page.args.targetDate });
            }}
          >
            <Crawtemplate
              events={props.events}
              setEvents={props.setEvents}
            ></Crawtemplate>
          </Header>
        </Scroller>
      </Panel>
    </Row>
  );
};

export default Crawling;
