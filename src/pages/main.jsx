import { useState} from "react";
import {Link} from "react-router-dom";


const Main = ({children, PageName}) => {

     let [visibility , setVisibility] = useState(false)


    // const ChangeVisibility = ()=>{
    //     setVisibility(!visibility)
    // }

    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    return (
        <div >
            <div class="d-flex" id="wrapper" >
                <div class="border-end bg-white" id="sidebar-wrapper" >
                    <div class="sidebar-heading border-bottom bg-light" >Horror Inventory</div>
                    <div class="list-group list-group-flush" >


                            <Link to="/"
                                className="list-group-item list-group-item-action list-group-item-light p-3"
                                href="#">Introduce
                            </Link>

                        <Link to="/ImplementInventory"
                              className="list-group-item list-group-item-action list-group-item-light p-3"
                              href="#">Implement Inventory
                        </Link>

                        <Link to="/CreateItem"
                              className="list-group-item list-group-item-action list-group-item-light p-3"
                              href="#">Create Inventory Item
                        </Link>

                        <Link to="/CreateWorldItem"
                              className="list-group-item list-group-item-action list-group-item-light p-3"
                              href="#">Create World Item
                        </Link>

                        <Link to="/ItemStages"
                              className="list-group-item list-group-item-action list-group-item-light p-3"
                              href="#">Dynamic change of an item
                        </Link>

                        <Link to="/InteractComponents"
                              className="list-group-item list-group-item-action list-group-item-light p-3"
                              href="#">Interact Components
                        </Link>

                        <Link to="/CombineItems"
                              className="list-group-item list-group-item-action list-group-item-light p-3"
                              href="#">Combine Items
                        </Link>

                        <Link to="/Use"
                              className="list-group-item list-group-item-action list-group-item-light p-3"
                              href="#">Use Item
                        </Link>

                        <Link to="/SaveLoad"
                              className="list-group-item list-group-item-action list-group-item-light p-3"
                              href="#">Save / Load
                        </Link>

                        <Link to="/Settings"
                              className="list-group-item list-group-item-action list-group-item-light p-3"
                              href="#">Settings
                        </Link>

                        <Link to="/Functionsandevents"
                              className="list-group-item list-group-item-action list-group-item-light p-3"
                              href="#">Functions and events
                        </Link>







                    </div>
                </div>

                <div id="page-content-wrapper">

                    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                        <div class="container-fluid">
                            {/*<button onClick={ChangeVisibility} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"*/}
                            {/*        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>*/}
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                { visibility ?
                                <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                                    <li class="nav-item active"><a class="nav-link" href="#!">Home</a></li>
                                    <li class="nav-item"><a class="nav-link" href="#!">Link</a></li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item" href="#!">Action</a>
                                            <a class="dropdown-item" href="#!">Another action</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="#!">Something else here</a>
                                        </div>
                                    </li>
                                </ul>
                                    : <div>
                                        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                                            <li className="nav-item" style={{visibility: "hidden"}}><a className="nav-link" href="#!">Link</a></li>
                                            <li className="nav-item" style={{visibility: "hidden"}}><a className="nav-link" href="#!">Link</a></li>
                                            <li className="nav-item" style={{visibility: "hidden"}}><a className="nav-link" href="#!">Link</a></li>
                                            <li className="nav-item" style={{visibility: "hidden"}}><a className="nav-link" href="#!">Link</a></li>
                                            <li className="nav-item" style={{visibility: "hidden"}}><a className="nav-link" href="#!">Link</a></li>
                                            <li className="nav-item" style={{visibility: "hidden"}}><a className="nav-link" href="#!">Link</a></li>
                                            <li className="nav-item" style={{visibility: "hidden"}}><a className="nav-link" href="#!">Link</a></li>
                                            <li className="nav-item" style={{visibility: "hidden"}}><a className="nav-link" href="#!">Link</a></li>


                                        </ul></div>

                                }
                            </div>
                        </div>
                    </nav>



                    <div class="container-fluid" style={{marginBottom: "50px", fontSize: "1.2rem"}}>
                        <h1 class="mt-4">{PageName}</h1>
                        <br/>
                        {children}

                    </div>

                    <button  type="button" className="btn btn-light"  onClick={topFunction}
                             style={{ position: "relative",bottom:"0",right:"0", width:"100vw"} }><strong>Top</strong></button>
                </div>

            </div>
        </div>
    );
};

export default Main;