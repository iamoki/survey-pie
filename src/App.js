import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import CompletionPage from './pages/CompletionPage';
import SurveyPage from './pages/SurveyPage';

function App() {
  return (
    <AppWrapper>
      <Box>
        <Routes>
          <Route path="/done" element={<CompletionPage />} />
          <Route path="/survey/:surveyId" element={<SurveyPage />}>
            <Route path=":step" element={<SurveyPage />} />
          </Route>
        </Routes>
      </Box>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background: #e5e5e5;
`;

const Box = styled.div`
  display: flex;
  width: 700px;
  min-height: 500px;
  padding: 60px;
  background: #fff;
  border-radius: 16px;
  box-sizing: border-box;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.07);
`;

export default App;
