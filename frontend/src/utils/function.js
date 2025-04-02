export const getStatusColor = (status) => {
  let bgColor = "";
  let color = "";

  switch (status?.toLowercase()) {
    case "fail":
    case "rejected":
    case "unpaid":
      bgColor = "#FEEAEC";
      color = "#E72546";
      break;
    case "allocated":
      bgColor = "#00BE5F";
      color = "#CCFFDD";
      break;
    case "active":
      bgColor = "#D3EAFE";
      color = "#0073E5";
      break;
  }
  return { bgColor, color };
};
