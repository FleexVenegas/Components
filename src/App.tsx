import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/organisms/Layout/Layout";
import InputView from "./page/InputView/InputView";
import ViewMain from "./page/ViewMain/ViewMain";
import TextAreaView from "./page/TextAreaView/TextAreaView";
import ButtonView from "./page/ButtonView/ButtonView";

function App() {
    return (
        <>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<ViewMain />} />
                        <Route
                            path="/component/input"
                            element={<InputView />}
                        />
                        <Route
                            path="/component/text-area"
                            element={<TextAreaView />}
                        />
                        <Route
                            path="/component/button"
                            element={<ButtonView />}
                        />
                    </Routes>
                </Layout>
            </Router>
        </>
    );
}

export default App;
