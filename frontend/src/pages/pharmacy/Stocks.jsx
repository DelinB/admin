import React from "react";
import Table from "../../component/Table";
import TableHeader from "../../component/common/Table/TableHeader";
import { StocsTableHead, TableValue } from "../../utils/stock";
import useGet from "../../hooks/useGet"; // Import correctly
import usePost from "../../hooks/usePost";
import RightSideInputForm from "../../component/common/rightSideInputForm";
// import { useNavigate } from "react-router-dom";
const Stocks = () => {
  const { data, loading, error,refetch  } = useGet("http://localhost:5000/api/stocks"); // Fetch stock data
  const {postData} = usePost("http://localhost:5000/api/stocks")
// const navigate = useNavigate()
  const stockFields = [
    { name: "Product Code", path: "productCode" },
    { name: "Batch No.", path: "batchNo" },
    { name: "Brand Name", path: "brandName" },
    { name: "Generic Name", path: "genericName" },
    { name: "HSN Code", path: "hsnCode" },
    { name: "Stocked Date", path: "stockedDate" },
    { name: "Sale Price", path: "salePrice" }
  ];


  const actionData = [
    { name: "eye" },
    { name: "editpen" }
  ];




  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleFormSubmit = async (formData) => {
    const response = await postData(formData);
    if (response) {
      refetch(); // Refresh data
    }
  };
  

  // const handlenavigate = navigate("")

  return (
    <div className="p-4">
      {/* <button onClick={handlenavigate} >
        Add stock
      </button> */}
      <button>
      <RightSideInputForm fields={stockFields} onSubmit={handleFormSubmit}/>

      </button>
      <TableHeader />
      <Table StocsTableHead={StocsTableHead} TableValue={data} actionData={actionData} />
    </div>
  );
};

export default Stocks;
