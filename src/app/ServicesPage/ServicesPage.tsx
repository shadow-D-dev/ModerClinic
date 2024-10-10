import ServiceComp from "./ServiceComp";
export default function ServicesPage() {
  return (
    <div className="h-[1000px] flex flex-col gap-20">
      <div className="flex justify-center align-middle text-5xl">
        our services
      </div>
      <div className="flex justify-evenly">
        <ServiceComp />
        <ServiceComp />
        <ServiceComp />
        <ServiceComp />
      </div>
      <div className="flex justify-center align-middle">
        <p className="text-5xl">we belive in using latest tech</p>
        <button className="border border-white rounded  w-[300px] h-[100px] text-lg">
          view all services
        </button>
      </div>
    </div>
  );
}
