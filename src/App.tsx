import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/organisms/Layout/Layout";
import InputView from "./page/InputView/InputView";
import ViewMain from "./page/ViewMain/ViewMain";

function App() {
    return (
        <>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<ViewMain />} />
                        <Route path="/input" element={<InputView />} />
                    </Routes>
                </Layout>
            </Router>
        </>
    );
}

export default App;
