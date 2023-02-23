import { Route, Routes } from "react-router-dom";
import EditForm from "./components/EditForm/EditForm";
import Layout from "./components/Layout/Layout";
import Quotes from "./components/Quotes/Quotes";
import Main from "./containers/Main/Main";
import SubmitForm from "./containers/SubmitForm/SubmitForm";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path={'/quotes'} element={<Main/>}>
            <Route path={'/quotes/:pagename'} element={<Quotes/>}/>
            <Route path={'/quotes/:pagename/:quoteId'} element={<EditForm/>}/>
          </Route>
          <Route path={'/submit'} element={<SubmitForm/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
