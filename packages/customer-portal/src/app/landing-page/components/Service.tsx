import ServicesCard from "./ServicesCard"

function Service() {
  return (
    <section className="">
        <div className=" mx-auto flex justify-evenly md:m-7 lg:m-9 flex-wrap">

        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
        </div>
    </section>
  )
}

export default Service