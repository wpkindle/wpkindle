import { Product } from "@/types";
import ProductCard from "./product-card";

const ProductList = ({ title, data }: { title: string; data: Product[] }) => {
  return (
    <div className="px-3 py-4">
      <div className="container sm:p-3 p-0">
        <h2 className="flex gap-2 items-center px-3 py-1 w-max text-2xl font-extrabold text-center text-gray-900 dark:text-white lg:text-3xl rounded-t-lg border-r border-l border-t border-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0,0,256,256"
          >
            <g
              fill="#16aa74"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
            >
              <g transform="scale(9.84615,9.84615)">
                <path d="M13.03125,0c-7.14844,0 -12.96875,5.82031 -12.96875,12.96875c0,7.14844 5.82031,12.96875 12.96875,12.96875c7.14844,0 12.96875,-5.82031 12.96875,-12.96875c0,-7.14844 -5.82031,-12.96875 -12.96875,-12.96875zM13.03125,0.59375c6.82031,0 12.375,5.55469 12.375,12.375c0,6.82031 -5.55469,12.375 -12.375,12.375c-6.82031,0 -12.375,-5.55469 -12.375,-12.375c0,-6.82031 5.55469,-12.375 12.375,-12.375zM13.03125,1.84375c-3.88672,0 -7.29297,1.98047 -9.28125,5c0.26172,0.00781 0.50781,0.03125 0.71875,0.03125c1.16406,0 2.96875,-0.15625 2.96875,-0.15625c0.59766,-0.03516 0.66016,0.86719 0.0625,0.9375c0,0 -0.61328,0.05859 -1.28125,0.09375l4.0625,12.03125l2.4375,-7.28125l-1.75,-4.75c-0.59766,-0.03516 -1.15625,-0.09375 -1.15625,-0.09375c-0.60156,-0.03516 -0.53516,-0.97266 0.0625,-0.9375c0,0 1.84375,0.15625 2.9375,0.15625c1.16406,0 2.96875,-0.15625 2.96875,-0.15625c0.60156,-0.03516 0.66016,0.86719 0.0625,0.9375c0,0 -0.61328,0.05859 -1.28125,0.09375l4.03125,11.9375l1.09375,-3.6875c0.5625,-1.44531 0.84375,-2.64062 0.84375,-3.59375c0,-1.375 -0.48047,-2.32422 -0.90625,-3.0625c-0.5625,-0.91797 -1.09375,-1.70703 -1.09375,-2.625c0,-1.01953 0.78125,-1.96875 1.875,-1.96875c0.05078,0 0.10547,-0.00391 0.15625,0c-1.98047,-1.8125 -4.63672,-2.90625 -7.53125,-2.90625zM22.78125,7.625c0.05078,0.35547 0.09375,0.74609 0.09375,1.15625c0,1.12891 -0.21094,2.38281 -0.84375,3.96875l-3.40625,9.8125c3.30469,-1.92969 5.53125,-5.49219 5.53125,-9.59375c0,-1.93359 -0.50781,-3.76172 -1.375,-5.34375zM2.875,8.4375c-0.61719,1.38281 -0.96875,2.91797 -0.96875,4.53125c0,4.40234 2.57031,8.19531 6.28125,10zM13.21875,13.9375l-3.3125,9.6875c0.99609,0.29297 2.03125,0.46875 3.125,0.46875c1.29297,0 2.53125,-0.25 3.6875,-0.65625c-0.02734,-0.04687 -0.03906,-0.07031 -0.0625,-0.125z"></path>
              </g>
            </g>
          </svg>
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-green-600 from-blue-400">
            {title}
          </span>
        </h2>
        {data.length > 0 ? (
          <div className="p-4 rounded-lg rounded-tl-none border border-gray-300 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.map((product: Product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        ) : (
          <div>
            <p>No product found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
