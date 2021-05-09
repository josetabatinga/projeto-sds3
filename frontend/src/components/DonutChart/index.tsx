import axios from "axios";
import Chart from "react-apexcharts";
import { SaleSum } from "types/sale";
import { BASE_URL } from "utils/requests";

type ChartData = {
    series: number[];
    labels: string[];
}

const DonutChart = () => {

    let chartData: ChartData = { labels: [], series: [] };

    axios.get(`${BASE_URL}/sales/amount`)
        .then(response => {
            const data = response.data as SaleSum[];
            const myLabels = data.map(x => x.sellerName);
            const mySeries = data.map(y => y.sum);

            chartData = { labels: myLabels, series: mySeries };

        });


    //    const mockData = {
    //        series: [477138, 499928, 444867, 220426, 473088],
    //        labels: ['Tabatinga', 'Ana Valéria', 'Airton Júnior', 'Hellen Vitória', 'Amanda Marreiro']


const options = {
    legend: {
        show: true
    }
}

return (
    <Chart
        options={{ ...options, labels: chartData.labels }}
        series={chartData.series}
        type="donut"
        height="200 "
    />
);
}

export default DonutChart;