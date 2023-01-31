import './App.css'

import Content from './Content/Content';
import TopBar from './TopBar/TopBar';
import Sidebar from './Sidebar/Sidebar';

function App() {
  return (
    <main>
      <Sidebar />
      <TopBar />
      <Content />
    </main>
  );
}

export default App;