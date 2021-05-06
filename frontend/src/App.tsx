import BarChart from "components/BarChart";
import DataTable from "components/Datatable";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="container">

        <h1 className="text-primary py-3">Dashboard de Vendas</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de Sucesso</h5>
            <div>
              <BarChart />
            </div>
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de Sucesso</h5>
            <div>
              <DonutChart />
            </div>
          </div>
        </div>
      </div>

      <div className="py-3">
        <h2 className="text-primary">Todas Vendas</h2>
      </div>

      <DataTable />

      <Footer />
    </>
  );
}

export default App;
