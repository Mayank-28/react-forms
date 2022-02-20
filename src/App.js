import SimpleForm from "./SimpleForm/simple-form";
import FormValidationOnSubmit from "./SimpleForm/formValidation";
import FormValidationOnBlurr from "./SimpleForm/formValidation1";
import FormValidationOnChange from "./SimpleForm/formValidation2";
function App() {
  return (
 <div>
   <h3 >Forms in React</h3>
   <SimpleForm/>
   <FormValidationOnSubmit />
   <FormValidationOnBlurr />
   <FormValidationOnChange />
   <h2>Combining all validations in one</h2>
 </div>
  );
}

export default App;
