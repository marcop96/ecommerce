import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
export default function OpenDrawerIcon() {
  return (
    <div className="fixed bottom-14 right-14 z-40 ">
      <ShoppingBasketOutlinedIcon
        className="bg-orange-600 rounded-full p-3 absolute  hover:text-white"
        style={{ fontSize: "3em" }}
      />
    </div>
  );
}
