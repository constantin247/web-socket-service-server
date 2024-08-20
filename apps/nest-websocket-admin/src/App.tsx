import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { InterviewStageList } from "./interviewStage/InterviewStageList";
import { InterviewStageCreate } from "./interviewStage/InterviewStageCreate";
import { InterviewStageEdit } from "./interviewStage/InterviewStageEdit";
import { InterviewStageShow } from "./interviewStage/InterviewStageShow";
import { InterviewList } from "./interview/InterviewList";
import { InterviewCreate } from "./interview/InterviewCreate";
import { InterviewEdit } from "./interview/InterviewEdit";
import { InterviewShow } from "./interview/InterviewShow";
import { DynamicTemplateList } from "./dynamicTemplate/DynamicTemplateList";
import { DynamicTemplateCreate } from "./dynamicTemplate/DynamicTemplateCreate";
import { DynamicTemplateEdit } from "./dynamicTemplate/DynamicTemplateEdit";
import { DynamicTemplateShow } from "./dynamicTemplate/DynamicTemplateShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"nest-websocket"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="InterviewStage"
          list={InterviewStageList}
          edit={InterviewStageEdit}
          create={InterviewStageCreate}
          show={InterviewStageShow}
        />
        <Resource
          name="Interview"
          list={InterviewList}
          edit={InterviewEdit}
          create={InterviewCreate}
          show={InterviewShow}
        />
        <Resource
          name="DynamicTemplate"
          list={DynamicTemplateList}
          edit={DynamicTemplateEdit}
          create={DynamicTemplateCreate}
          show={DynamicTemplateShow}
        />
      </Admin>
    </div>
  );
};

export default App;
