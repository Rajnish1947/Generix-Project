import Link from "next/link";
import customers from "@/data/customers.json";

export default function CustomerStory({ params }) {
  const index = Number(params.slug);
  const customer = customers[index];

  if (!customer) return <div>Not Found</div>;

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      {/* back */}
      <Link
        href="/Customers"
        className="text-sm text-gray-500 hover:text-black mb-8 block"
      >
        ← All stories
      </Link>

      {/* title */}
      <div className="mb-12 max-w-3xl">
        <h1 className="text-4xl font-semibold leading-tight">
          {customer.name}
        </h1>

        <p className="text-lg text-gray-500 mt-4">
          {customer.description}
        </p>
      </div>

      {/* layout */}
      <div className="grid lg:grid-cols-3 gap-12">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-10">

          <img
            src={customer.image}
            alt={customer.name}
            className="rounded-2xl w-full"
          />

          <div className="space-y-6 text-gray-700 leading-relaxed">

            <p>{customer.story1}</p>

            <h2 className="text-2xl font-semibold">
              Improved output after migrating
            </h2>

            <p>{customer.story2}</p>

            <h3 className="text-xl font-semibold">
              Why this worked
            </h3>

            <p>{customer.story3}</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Saved 40–60 hours per month</li>
              <li>Docs stay synced with releases</li>
              <li>Removed manual publishing work</li>
              <li>Improved developer experience</li>
            </ul>

          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">

          <div className="border rounded-2xl p-6 bg-white">

            <h3 className="font-semibold mb-4">
              Company
            </h3>

            <img
              src={customer.logo}
              alt={customer.name}
              className="h-10 mb-4"
            />

            <p className="text-sm text-gray-500 mb-4">
              {customer.companyInfo}
            </p>

            <a
              href={customer.website}
              className="text-sm font-medium hover:underline"
            >
              Visit website →
            </a>

          </div>

        </div>
      </div>

      {/* RELATED STORIES */}
      <div className="mt-20">

        <h2 className="text-2xl font-semibold mb-6">
          Related customer stories
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {customers.slice(0,3).map((item,i)=>(
            <Link
              key={i}
              href={`/Customers/${i}`}
              className="group"
            >

              <div className="rounded-xl overflow-hidden mb-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full aspect-video object-cover group-hover:opacity-80 transition"
                />
              </div>

              <p className="text-gray-700 line-clamp-2">
                {item.description}
              </p>

              <span className="text-sm font-medium mt-2 inline-block group-hover:underline">
                Read story →
              </span>

            </Link>
          ))}

        </div>

      </div>

    </section>
  );
}