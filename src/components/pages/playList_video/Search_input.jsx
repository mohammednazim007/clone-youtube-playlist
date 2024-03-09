import { Label, TextInput } from "keep-react";
import { ArrowSquareRight } from "phosphor-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const Search_input_component = ({ inputHandlebar }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  // reset input url field
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ urlField: "" });
    }
  }, [isSubmitSuccessful]);

  return (
    <div>
      <form className="py-10" onSubmit={handleSubmit(inputHandlebar)}>
        {/* search input field */}
        <div className="md:w-1/2 mx-auto md:px-5 relative">
          <Label
            htmlFor="#id-7"
            value="Enter Youtube Playlist URL"
            color="success"
          />

          <TextInput
            id="#id-7"
            placeholder="Enter your URL"
            color="success"
            sizing="md"
            type="text"
            withBg={true}
            addon={<span>http://</span>}
            addonPosition="left"
            {...register("urlField", { required: true })}
          />
          
          {/* error handle */}
          {errors.urlField && errors.urlField?.type === "required" && (
            <Label
              className="text-[#EE79A5] font-bold"
              htmlFor="#id-7"
              value="The input field is required"
              color="success"
            />
          )}

          {/* submit button */}
          <button
            type="submit"
            className="absolute top-[1.0rem] right-[-2.5rem] "
          >
            <ArrowSquareRight size={60} color="#7ED992" weight="fill" />
          </button>
        </div>
      </form>
    </div>
  );
};
export default Search_input_component;
