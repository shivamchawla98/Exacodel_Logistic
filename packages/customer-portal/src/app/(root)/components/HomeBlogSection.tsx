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
        <BlogCard id={1} imageUrl={"https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"} datetime={"2020-03-16"} date={"Mar 16, 2020"} href={"#"} title={"Boost your conversion rate"} />
        <BlogCard id={1} imageUrl={"https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"} datetime={"2020-03-16"} date={"Mar 16, 2020"} href={"#"} title={"Boost your conversion rate"} />
        <BlogCard id={1} imageUrl={"https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"} datetime={"2020-03-16"} date={"Mar 16, 2020"} href={"#"} title={"Boost your conversion rate"} />
      </div>
      </div>
    </div>
  )
}

export default HomeBlogSection