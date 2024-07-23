import { Link } from "react-router-dom";
const Card = ({ item }) => {
  return (
    <>
      <article className="flex bg-white transition hover:shadow-xl">
        <div className="hidden sm:block sm:basis-56">
          <img
            alt=""
            src={item.title}
            className="aspect-square h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
            <h3 className="font-bold uppercase text-gray-900">{item.title}</h3>
            <h3>{item.id}</h3>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
              {item.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-1 p-4 text-xs text-gray-700">
            <span className="mr-2 rounded-full bg-yellow-200 px-2 py-1">
              category:{item.category}
            </span>
            <span className="mr-2 rounded-full bg-yellow-200 px-2 py-1">
              price:{item.price}€
            </span>
            <span className="mr-2 rounded-full bg-yellow-200 px-2 py-1">
              quantity:{item.quantity}/300
            </span>
          </div>

          <div className="sm:flex sm:items-end sm:justify-end">
            <Link
              to="/:id"
              className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
            >
              Read More
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default Card;
