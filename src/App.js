import './App.css';

import Main from "./pages/main";
import {BrowserRouter, Route, Routes, Navigate}  from 'react-router-dom'
import ImplementInventory from "./pages/ImplementInventory";
import CreateItem from "./pages/CreateItem";
import CreateWorldItem from "./pages/CreateWorldItem";
import ItemStages from "./pages/ItemStages";
import InteractComponents from "./pages/InteractComponents";
import SaveLoad from "./pages/SaveLoad";
import CombineItems from "./pages/CombineItems";
import Settings from "./pages/Settings";
import Functionsandevents from "./pages/Functionsandevents";
import Use from "./pages/Use";
import Introduce from "./pages/Introduce";

function App() {
  return (
    <div>



        <BrowserRouter>

            <Routes>
                <Route path="/" element={ <Main PageName={"Introduce"}><Introduce/></Main>} />
                <Route path="/ImplementInventory" element={ <Main PageName={"Implement Inventory"} ><ImplementInventory/></Main>} />
                <Route path="/CreateItem" element={ <Main PageName={"Create Item"}><CreateItem/></Main>} />
                <Route path="/CreateWorldItem" element={ <Main PageName={"Create World Item"}><CreateWorldItem/></Main>} />
                <Route path="/ItemStages" element={ <Main PageName={"Dynamic change of an item"}><ItemStages/></Main>} />
                <Route path="/InteractComponents" element={ <Main PageName={"Interact Components"}><InteractComponents/></Main>} />
                <Route path="/CombineItems" element={ <Main PageName={"Combine Items"}><CombineItems/></Main>} />
                <Route path="/SaveLoad" element={ <Main PageName={"Save and Load"}><SaveLoad/></Main>} />
                <Route path="/Settings" element={ <Main PageName={"Settings"}><Settings/></Main>} />
                <Route path="/Functionsandevents" element={ <Main PageName={"Functions and events"}><Functionsandevents/></Main>} />
                <Route path="/Use" element={ <Main PageName={"Use Item"}><Use/></Main>} />




                <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
        </BrowserRouter>
</div>
  );
}

export default App;
