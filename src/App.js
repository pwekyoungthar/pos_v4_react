import { useState } from "react";
import ReacDOM from "react-dom";
import Header from "./Components/Layout/Header/Header";
import Helper from "./Components/Layout/Helper/Helper";
import ItemsList from "./Components/Items/ItemsList";
import Cart from "./Components/Cart/Cart";
import Categories from "./Components/Layout/Category/Categories";
import CartProvider from "./store/CartProvider";
import Backdrop from "./Components/UI/Backdrop";
import ModalBox from "./Components/UI/ModalBox";

import "./App.css";
import Total from "./Components/Layout/Total/Total";

function App() {
  const [selectCategory, setSelectCategory] = useState("All");
  const [shwoModal, setShowModal] = useState(false);
  const [searchItem, setSearchItem] = useState("All");
  const selectCategoryHandler = (select_cat) => {
    setSelectCategory(select_cat);
  };
  const shwoModalHandler = () => {
    setShowModal(true);
  };
  const hideModalHandler = () => {
    setShowModal(false);
  };
  const modalElement = document.getElementById("modal");
  const searchItemHandler = (searchName) => {
    setSearchItem(searchName.target.value);
  };
  return (
    <CartProvider>
      {shwoModal &&
        ReacDOM.createPortal(
          <Backdrop onHideModal={hideModalHandler} />,
          modalElement
        )}
      {shwoModal && ReacDOM.createPortal(<ModalBox />, modalElement)}

      <Header />
      <Helper onSeachItem={searchItemHandler} />
      <main className="main">
        <ItemsList select_cat={selectCategory} searchItemVal={searchItem} />
        <Cart />
        <Categories onSelectCatHandler={selectCategoryHandler} />
        <Total onShowModal={shwoModalHandler} />
      </main>
    </CartProvider>
  );
}

export default App;
