import { ButtonProps } from "@/types/type";

const getBgVariantStyle = (variant: ButtonProps["bgVariant"]) => {
  switch (variant) {
    case "secondary":
      return "bg-slate-50";
    case "danger":
      return "bg-red-500";
    case "success":
      return "bg-green-500";
    case "outline":
      return "bg-transparent border-slate-50 border-[2px]";
    default:
      //primary background color
      return "bg-slate-200";
  }
};

export default getBgVariantStyle;
