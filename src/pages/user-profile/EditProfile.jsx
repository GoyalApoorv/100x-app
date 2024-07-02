import Button from "../../components/Button";
import ProfileAvatar from "../../assets/profile_avatar.png";
import BackArrow from "../../assets/back.svg";
import AddImageIcon from "../../assets/add-image.svg";
import CancelIcon from "../../assets/cancel-g.svg";
import Banner from "../../components/Banner";
import Fieldset from "../../components/Fieldset";
import { Link } from "react-router-dom";
import { URLs } from "../../constants";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z, ZodError } from "zod";

function EditProfile() {
  const { formData, setFormData } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState({
    name: null,
    bio: null,
    location: null,
    website: null,
  });
  const userData = formData;
  const navigate = useNavigate();

  const profileSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    bio: z.string().min(1, { message: "Bio is required" }),
    location: z.string().min(1, { message: "Location is required" }),
    website: z.string().url({ message: "Invalid URL format" }),
  });

  const [inputValues, setInputValues] = useState({
    name: userData.name,
    bio: userData.bio,
    location: userData.location,
    website: userData.website,
  });

  const handleInputChange = (field, value) => {
    setInputValues((c) => {
      const updatedValues = {
        ...c,
        [field]: value,
      };
      console.log("🎉updated form :", updatedValues);
      return updatedValues;
    });

    // Clear the error for the field when user starts typing
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: null,
    }));
  };

  const handleSubmit = () => {
    try {
      profileSchema.parse(inputValues); // Validate the input values against the schema
      setIsLoading(true);

      // Simulating an API call with a timeout
      setTimeout(() => {
        setFormData(inputValues);
        console.info("💸your submitted values:", inputValues);
        navigate(URLs.profile);
        setIsLoading(false);
      }, 300);
    } catch (error) {
      if (error instanceof ZodError) {
        console.error("Form validation error:", error.errors);

        // Handle validation errors
        const fieldErrors = {};
        error.errors.forEach((validationError) => {
          // Extract the field name from the error path
          const field = validationError.path[0];

          // Set the error for the specific field
          fieldErrors[field] = validationError.message;
        });

        setErrors((prevErrors) => ({
          ...prevErrors,
          ...fieldErrors,
        }));
      }
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="px-4"
    >
      <header className="flex flex-col items-start gap-3">
        <section className="flex items-center justify-between self-stretch py-3">
          <div className="flex items-center gap-5">
            <Link to={URLs.profile}>
              <img alt="back" src={BackArrow} />
            </Link>
            <p className="text-base font-bold leading-normal text-neutral-50">
              Edit profile
            </p>
          </div>

          <Button size="sm" type="submit" disabled={isLoading}>
            {isLoading ? "Saving..." : "Save"}
          </Button>
        </section>
        {/* Banner Image */}
        <div className="relative flex w-full">
          <Banner />
          <div className="absolute flex h-full w-full items-center justify-center gap-2">
            <img alt="add image" src={AddImageIcon} />
            <img alt="cancel" src={CancelIcon} />
          </div>
        </div>
      </header>
      <main className="relative">
        {/* Profile Icon */}
        <img
          alt="profile_avatar"
          className="absolute -top-12 left-1 h-4.2rem w-4.2rem rounded-7xl border-4 border-neutral-1000"
          src={ProfileAvatar}
        />

        <div className="relative flex flex-col items-center gap-5 self-stretch pt-5">
          <Fieldset
            text="Name"
            inputValue={inputValues.name}
            onInputChange={(value) => handleInputChange("name", value)}
            type="text"
            error={errors.name}
          />
          <Fieldset
            text="Bio"
            inputValue={inputValues.bio}
            onInputChange={(value) => handleInputChange("bio", value)}
            type="text"
            error={errors.bio}
          />
          <Fieldset
            text="Location"
            inputValue={inputValues.location}
            onInputChange={(value) => handleInputChange("location", value)}
            type="text"
            error={errors.location}
          />
          <Fieldset
            text="Website"
            inputValue={inputValues.website}
            onInputChange={(value) => handleInputChange("website", value)}
            type="text"
            error={errors.website}
          />
        </div>
      </main>
    </form>
  );
}

export default EditProfile;
