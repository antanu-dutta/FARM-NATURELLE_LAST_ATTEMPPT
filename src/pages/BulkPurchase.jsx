import BulkPurchaseHeader from "../components/BulkPurchaseHeader";
import BulkPurchaseContent from "../components/BulkPurchaseContent";
import BulkPurchaseForm from "../components/BulkPurchaseForm";

const BulkPurchase = () => {
  return (
    <div className="pt-[130px]">
      <BulkPurchaseHeader />
      <div className="bg-[#f5f6f0]">
        <BulkPurchaseContent />
        <BulkPurchaseForm />
      </div>
    </div>
  );
};

export default BulkPurchase;
