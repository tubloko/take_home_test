import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { columns } from "./constants";
import { fetchTaxes, startFetchTaxes } from './redux/actions/taxesActionCreator';
import { selectCurrentTaxes } from "./redux/selectors/selectors";
import { Table, PaginationController, SearchFilterForm, ToggleThemeButton, Form } from "./components";
import "./styles/_app.scss";

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectCurrentTaxes);

  useEffect(() => {
    dispatch(startFetchTaxes());
    dispatch(fetchTaxes());
  }, []);

  return (
    <div className="app">
      <div className="level">
        <div>
          <h1 className="title">Dark Mode Challenge</h1>
        </div>
        <ToggleThemeButton />
      </div>
      <div className="columns">
        <div className="column">
          <p>
            Lollipop powder powder. Cotton candy caramels chupa chups halvah
            muffin caramels apple pie topping cake. Topping chocolate bar pastry
            chocolate cake. Cupcake tart jujubes dragée jelly-o icing sugar
            plum. Chocolate bar lollipop candy canes. Biscuit croissant apple
            pie pudding caramels wafer tart tootsie roll macaroon. Croissant
            tiramisu chocolate bar carrot cake lemon drops halvah.
          </p>
        </div>
        <div className="column">
          <p>
            Marshmallow tiramisu liquorice bear claw chocolate bar bear claw
            tart. Muffin chupa chups pie. Brownie apple pie topping lemon drops
            marzipan toffee. Pudding macaroon icing ice cream bonbon cake tart.
            Pudding sugar plum chocolate cake cake biscuit pastry pastry
            chocolate bar tart. Lemon drops dessert gummies icing.
          </p>
        </div>
      </div>
      <div className="container">
        <h2 className="subtitle">Filter by</h2>
      </div>
      <SearchFilterForm />
      <div className="container level columns is-variable is-4" />
      <div className="level">
        <Table columns={columns} rows={data} />
      </div>
      <PaginationController />
      <Form />
    </div>
  );
}

export default App;
