import ChartOne from "./ChartOne"
import ChartThree from "./ChartThree"
import ChartTwo from "./ChartTwo"

const Chart = () => {
    return (
        <div className="overflow-x-hidden overflow-y-auto w-full max-w-[80%] mx-auto h-[800px]">
            <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5 min-w-[1024px]">
                <ChartOne />
                <ChartTwo />
                <ChartThree />
            </div>
        </div>
    );
};

export default Chart;
