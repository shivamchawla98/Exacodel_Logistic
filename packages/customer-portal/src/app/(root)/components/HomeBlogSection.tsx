import BlogCard from "@/components/cards/BlogCard"

function HomeBlogSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">From the blog</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Learn how to grow your business with our expert advice.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <BlogCard id={1} imageUrl={"https://img.freepik.com/free-photo/large-cargo-ship-with-containers-port-generative-ai_188544-8158.jpg?t=st=1694089465~exp=1694090065~hmac=eceb8a68b1881f75b79c18ad5c3606a468beb973d30a1122d78e97051f55cbfc"} datetime={"2020-03-16"} date={"Mar 16, 2020"} href={"./blogs"} title={"How to get the most out of global logistics"} />
        <BlogCard id={1} imageUrl={"https://img.freepik.com/free-vector/hand-drawn-fla…national-trade_23-2149154534.jpg?size=626&ext=jpg"} datetime={"2020-03-16"} date={"Mar 16, 2020"} href={"./blogs"} title={"How to Prepare for Global Logistics in 2022"} />
        <BlogCard id={1} imageUrl={"https://img.freepik.com/free-photo/warehouse-managers-walking-through-large-distribution-center_342744-1545.jpg?w=740&t=st=1694089510~exp=1694090110~hmac=6238202642e85a69c0c9f1bbb2f13e6a711be508ef74da0565af2a1e17bdb6d2"} datetime={"2020-03-16"} date={"Mar 16, 2020"} href={"./blogs"} title={"Trends shaping the global supply chain"} />
      </div>
      </div>
    </div>
  )
}

export default HomeBlogSection