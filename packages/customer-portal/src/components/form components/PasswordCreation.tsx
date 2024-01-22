import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword } from "@/features/user/user-slice";
import { updateFormName } from "@/features/select-form/selectForm-slice";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";

// Define your initial values
const initialValues = {
  password: "",
  passwordCheck: "",
};

const SAVE_PASSWORD_MUTATION = gql`
  mutation SavePassword($passwordInput: Password!, $userId: Float!) {
    savePassword(passwordInput: $passwordInput, userId: $userId) {
      email
    }
  }
`;

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
  passwordCheck: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
});
function PasswordCreation() {
  const [savePassword, { loading, error, data }] = useMutation(
    SAVE_PASSWORD_MUTATION
  );
  let { userId } = useSelector((state: any) => state.user);
  console.log("userId ", userId);
  // Log the GraphQL query
  // console.log("GraphQL Query:", SAVE_PASSWORD_MUTATION?.loc?.source?.body);
  const dispatch = useDispatch();

  const handleSubmit = async (value: any) => {
    console.log(value.password);

    try {
      const response = await savePassword({
        variables: {
          passwordInput: {
            password: value.password,
            confirmPassword: value.passwordCheck,
          },
          userId: userId, // Replace with the actual user ID
        },
      });

      console.log("Password saved:", response);
    } catch (error) {
      console.error("Error saving password:", error);
    }
    console.log(value);
    // dispatch(updatePassword(value.password))
    dispatch(updateFormName("registration"));
  };

  return (
    <div className="h-3/4 bg-white py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-300 to-primary-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Create Password</h1>
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ setFieldValue, isSubmitting }) => (
                <Form>
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 lg:w-64">
                    <div className="relative my-4">
                      <Field
                        autoComplete="off"
                        name="password"
                        type="password"
                        className="peer placeholder-transparent h-10 w-full py-2 border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-primary-500"
                        placeholder="Email address"
                        // onChange = {(e: React.ChangeEvent<HTMLInputElement>) => setFieldValue(email, e.target.value) }
                        // value={email}
                      />
                      <label
                        htmlFor="password"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Enter Password
                      </label>
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-500 text-xs"
                      />
                    </div>
                    <div className="relative my-4">
                      <Field
                        autoComplete="off"
                        name="passwordCheck"
                        type="password"
                        className="peer placeholder-transparent h-10 w-full border-b-2 py-2 border-gray-300 text-gray-900 focus:outline-none focus:border-primary-500"
                        placeholder="Password"
                        // value={password}
                        // onChange = {(e: React.ChangeEvent<HTMLInputElement>) => setFieldValue(password, e.target.value) }
                      />
                      <label
                        htmlFor="passwordCheck"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Re-enter Password
                      </label>
                      <ErrorMessage
                        name="passwordCheck"
                        component="div"
                        className="text-red-500 text-xs"
                      />
                    </div>
                    <div className="relative">
                      <button
                        type="submit"
                        className="bg-primary-500 hover:bg-fuchsia-800 text-white rounded-md px-2 py-1"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Create Password"}
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordCreation;
