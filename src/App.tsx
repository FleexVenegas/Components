import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/organisms/Layout/Layout";
import InputView from "./page/InputView/InputView";
import ViewMain from "./page/ViewMain/ViewMain";
import TextAreaView from "./page/TextAreaView/TextAreaView";
import ButtonView from "./page/ButtonView/ButtonView";
import SelectView from "./page/SelectView/SelectView";
import InputPasswordView from "./page/InputPasswordView/InputPasswordView";

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
                        <Route
                            path="/component/select"
                            element={<SelectView />}
                        />
                        <Route
                            path="/component/input-password"
                            element={<InputPasswordView />}
                        />
                    </Routes>
                </Layout>
            </Router>
        </>
    );
}

export default App;
