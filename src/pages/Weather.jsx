import { Divider, Layout } from "antd";
import Filter from "../components/Filter";
import Details from "../components/Details";
import { FormDataProvider } from "../FormDataContext";
import History from "../components/History";

function Weather() {
  return (
    <FormDataProvider>
      <Layout>
        <h1>Today's Weather</h1>
        <Divider style={{ margin: 0, borderColor: "#000" }} />
        <Filter />
        <Details />
        <History />
      </Layout>
    </FormDataProvider>
  );
}

export default Weather;
