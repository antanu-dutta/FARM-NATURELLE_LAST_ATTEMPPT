import Heading from "../reusable components/Heading";
import PersonalForm from "./PersonalForm";
import CompanyForm from "./CompanyForm";

const BulkPurchaseForm = () => {
  const handleForm = (e) => {
    e.preventDefault();
  };
  return (
    <div className="py-10 ">
      <div className="w-[90%] bg-white mx-auto border border-primary rounded-xl p-16 text-center">
        <Heading className={"mb-4"}>Write to Us</Heading>
        <form onSubmit={handleForm}>
          <p className="text-primary text-3xl mb-8">Personal Details</p>
          <PersonalForm />
          <p className="text-primary text-3xl mb-8">About your company</p>
          <CompanyForm handleForm={handleForm} />
          <button className="bg-primary w-full text-white rounded py-4 font-bold">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default BulkPurchaseForm;
