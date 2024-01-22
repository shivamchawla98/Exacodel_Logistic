import BlogCard from "@/components/cards/BlogCard";

const blogs = [
  {
    id: 1,
    imageUrl:
      "https://img.freepik.com/free-photo/large-cargo-ship-with-containers-port-generative-ai_188544-8158.jpg?t=st=1694089465~exp=1694090065~hmac=eceb8a68b1881f75b79c18ad5c3606a468beb973d30a1122d78e97051f55cbfc",
    datetime: "2020-03-16",
    date: "Mar 16, 2020",
    title: "How to Get the Most Out of Global Logistics",
  },
  {
    id: 2,
    imageUrl:
      "https://img.freepik.com/free-vector/hand-drawn-fla…national-trade_23-2149154534.jpg?size=626&ext=jpg",
    datetime: "2020-03-16",
    date: "Mar 16, 2020",
    title: "How to Prepare for Global Logistics in 2022",
  },
  {
    id: 3,
    imageUrl:
      "https://img.freepik.com/free-photo/warehouse-managers-walking-through-large-distribution-center_342744-1545.jpg?w=740&t=st=1694089510~exp=1694090110~hmac=6238202642e85a69c0c9f1bbb2f13e6a711be508ef74da0565af2a1e17bdb6d2",
    datetime: "2020-03-16",
    date: "Mar 16, 2020",
    title: "Trends Shaping the Global Supply Chain",
  },
];

function HomeBlogSection() {
  return (
    <div className="bg-white py-12 sm:py-16 md:py-20 lg:py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
            From the Blog
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore our expert advice to grow your business.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 mb-20 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} href="./blogs" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeBlogSection;
