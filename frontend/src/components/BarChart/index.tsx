import Chart from "react-apexcharts";

const BarChart = () => {

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };

    const mockData = {
        labels: {
            categories: ['Tabatinga', 'Ana Valéria', 'Airton Júnior', 'Hellen Vitória', 'Amanda Marreiro']
        },
        series: [
            {
                name: "% Sucesso",
                data: [43.6, 67.1, 67.7, 45.6, 71.1]
            }
        ]
    };

    return (
        <Chart
            options = {{...options, xaxis: mockData.labels, }}
            series = {mockData.series}
            type = "bar"
            height = "200"
        />
    )
}

export default BarChart;