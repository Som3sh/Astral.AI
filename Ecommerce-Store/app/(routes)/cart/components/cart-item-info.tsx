import useCart from "@/hooks/use-cart";

interface CartItemInfoProps {
  product: Record<string, any>;
}

const CartItemInfo: React.FC<CartItemInfoProps> = ({ product }) => {
  const { items } = useCart();
  const cartItem = items.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div>
      <div className="flex justify-between">
        <p className=" text-sm font-semibold text-black">{product.name}</p>
        <p className=" text-sm font-semibold text-black">
          Quantity: {quantity}
        </p>
      </div>

      <div className="mt-1 flex text-sm">
        <p className="text-gray-500">{product.color}</p>
        <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
          {product.size}
        </p>
        <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
          {product.subcategory.name}
        </p>
      </div>
      <p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>
    </div>
  );
};

export default CartItemInfo;
