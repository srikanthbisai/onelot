import Car from "./Car"

function Main() {
  return (
    <div className="w-full mx-auto">
      <div className="text-center w-3/4 mx-auto py-10 items-center justify-center">
        <h1 className="text-4xl font-bold">Grow your dealership with working capital loans and digital tools from OneLot</h1>
        <p className="lg:w-2/3 text-xl text-wrap mt-6 mx-auto">We enable dealers to buy more cars through our working capital loan solutions and sell cars more efficiently through our Dealership Management System with its inventory management, marketing solutions and market insights.</p>
        <button className="bg-purple-800 text-white py-2 px-4 rounded-md mt-4 max-sm:mb-10">Inquire now</button>
      </div>

      <div className="mt-20 lg:w-3/4 mx-auto">
        <Car/>
      </div>

      <h6 className="lg:mt-20 text-center">Regulated By</h6>
      <div className="flex justify-center items-center">
        <img src="crystal.png" alt="" />
      </div>
    </div>
  )
}

export default Main
