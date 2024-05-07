import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { Category } from "../../types/categories";

export const ArrowButton = ({
  show,
  item,
}: {
  show: boolean;
  item: Category;
}) => {
  return (
    <>
      {show && item.subcategory.length > 0 && <MdArrowDropUp />}
      {!show && item.subcategory.length > 0 && <MdArrowDropDown />}
    </>
  );
};
