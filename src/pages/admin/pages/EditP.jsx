import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const EditP = () => {
  const data = useLoaderData();
  const navigate = useNavigate();

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [hasCrossLimit, setHasCrossLimit] = useState(false);
  const imageUrls = [];

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    // Limit the number of selected files to 12
    if (files.length > 12) {
      setHasCrossLimit(true);
      return;
    }
    setHasCrossLimit(false);
    setSelectedFiles(files);

    // Generate image previews
    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews(previews);
  };

  // remove images
  const handleRemoveImage = (index) => {
    const updatedPreviews = [...imagePreviews];
    updatedPreviews.splice(index, 1);
    setImagePreviews(updatedPreviews);

    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
  };

  async function handleEditPortfolio(event) {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const year = form.year.value;
    const mileage = form.mileage.value;
    const price = form.price.value;
    const fuelType = form.fuelType.value;
    const bodyType = form.bodyType.value;
    const condition = form.condition.value;
    const transmissionType = form.transmissionType.value;
    const regionalSpec = form.regionalSpec.value;
    const steeringSide = form.steeringSide.value;
    const photo = form.photo.files[0];

    // imgbb hosting
    const imgHostingKey = "7d6d3fe4f8d147ae7682008df18ec8db";

    const image = new FormData();
    image.append("image", photo);

    const toastID = toast.loading("Updating...", {
      style: {
        borderRadius: "5px",
        background: "#333",
        color: "#fff",
      },
    });

    try {
      const promises = selectedFiles.map(async (file) => {
        const formData = new FormData();
        formData.append("image", file);

        const response = await axios.post(
          `https://api.imgbb.com/1/upload?key=${imgHostingKey}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        console.log(response);
        return response.data.data.display_url;
      });

      // Wait for all promises to resolve
      const imageUrls = await Promise.all(promises);
      console.log(imageUrls);
      const uData = {
        title,
        fuelType,
        year,
        mileage,
        price,
        bodyType,
        condition,
        transmissionType,
        regionalSpec,
        steeringSide,
        photo: imageUrls,
      };

      axios
        .patch(`http://localhost:5000/edit-portfolio/v1/${data._id}`, uData)
        .then((data) => {
          if (data.data.modifiedCount > 0) {
            toast.success("Portfolio Successfully Updated", {
              id: toastID,
              style: {
                borderRadius: "5px",
                background: "#333",
                color: "#fff",
              },
            });

            form.reset();
            setSelectedFiles([]);
            setImagePreviews([]);
          }
          navigate("/admin/dashboard");
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  }

  return (
    <div>
      <div>
        <h1 className="text-2xl text-center text-white mb-4">
          Edit Vehicle Info
        </h1>
        <Toaster />
        <form className="max-w-md mx-auto" onSubmit={handleEditPortfolio}>
          <div className="relative z-0 w-full mb-5 group">
            <input
              defaultValue={data?.title}
              type="text"
              name="title"
              id="floating_email"
              className="block text-white py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Vehicle Name
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              defaultValue={data?.year}
              type="number"
              name="year"
              id="floating_repeat_password"
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_repeat_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Year
            </label>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                defaultValue={data?.mileage}
                type="number"
                name="mileage"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Mileage
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                defaultValue={data?.price}
                type="number"
                name="price"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Price
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <select
                defaultValue={data?.fuelType}
                type="text"
                name="fuelType"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 text-gray-500 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              >
                <option value="" className="" disabled selected>
                  Fuel type
                </option>
                <option value="Diesel" className="text-black">
                  Diesel
                </option>
                <option value="Petrol" className="text-black">
                  Petrol
                </option>
                <option value="Hybrid" className="text-black">
                  Hybrid
                </option>
                <option value="Electric" className="text-black">
                  Electric
                </option>
              </select>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <select
                defaultValue={data.condition}
                type="text"
                name="condition"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 text-gray-500 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              >
                <option value="" className="" disabled selected>
                  Condition
                </option>
                <option value="Excellent" className="text-black">
                  Excellent
                </option>
                <option value="Good" className="text-black">
                  Good
                </option>
                <option value="Fair" className="text-black">
                  Fair
                </option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <select
                defaultValue={data.bodyType}
                type="text"
                name="bodyType"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 text-gray-500 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              >
                <option value="" className="" disabled selected>
                  Body Type
                </option>
                <option value="SUV Coupe Sedan" className="text-black">
                  SUV Coupe Sedan
                </option>
                <option value="Crossover" className="text-black">
                  Crossover
                </option>
                <option
                  value="Hard Top Convertible Pick Up Truck"
                  className="text-black"
                >
                  Hard Top Convertible Pick Up Truck
                </option>
                <option value="Hatchback" className="text-black">
                  Hatchback
                </option>
                <option value=" Soft Top Convertible" className="text-black">
                  Soft Top Convertible
                </option>
                <option value="Sports Car Van" className="text-black">
                  Sports Car Van
                </option>
                <option value="Wagon" className="text-black">
                  Wagon
                </option>
                <option value="Utility Truck" className="text-black">
                  Utility Truck
                </option>
                <option value=" Other" className="text-black">
                  Other
                </option>
              </select>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <select
                defaultValue={data.transmissionType}
                type="text"
                name="transmissionType"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 text-gray-500 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              >
                <option value="" className="" disabled selected>
                  Transmission Type
                </option>
                <option value="Manual Transmission" className="text-black">
                  Manual Transmission
                </option>
                <option value="Automatic Transmission" className="text-black">
                  Automatic Transmission
                </option>
              </select>
            </div>
          </div>

          {/* New */}
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <select
                defaultValue={data.regionalSpec}
                type="text"
                name="regionalSpec"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 text-gray-500 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              >
                <option value="" className="" disabled selected>
                  Regional Spec
                </option>
                <option value="GCC Specs" className="text-black">
                  GCC Specs
                </option>
                <option value="American Specs" className="text-black">
                  American Specs
                </option>
                <option value="Canadian Specs" className="text-black">
                  Canadian Specs
                </option>
                <option value="European Specs" className="text-black">
                  European Specs
                </option>
                <option value=" Japanese Specs" className="text-black">
                  Japanese Specs
                </option>
                <option value="Korean Specs" className="text-black">
                  Korean Specs
                </option>
                <option value="Chinese Specs" className="text-black">
                  Chinese Specs
                </option>
                <option value=" Other" className="text-black">
                  Other
                </option>
              </select>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <select
                defaultValue={data.steeringSide}
                type="text"
                name="steeringSide"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 text-gray-500 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              >
                <option value="" className="" disabled selected>
                  Steering Side
                </option>
                <option value="Left Hand" className="text-black">
                  Left Hand
                </option>
                <option value="Right Hand" className="text-black">
                  Right Hand
                </option>
              </select>
            </div>
          </div>

          {/* upload photos */}
          <div className="max-w-lg mx-auto mb-4">
            <label
              className="block mb-2 text-sm text-gray-600"
              htmlFor="user_avatar"
            >
              Upload file
            </label>
            <div className="flex">
              <input
                type="file"
                multiple
                onChange={handleFileChange}
                accept="image/*"
                id="user_avatar"
                name="photo"
                className="block w-full text-sm text-gray-900 rounded-md cursor-pointer dark:text-gray-400 focus:outline-none bg-gray-700"
                aria-describedby="user_avatar_help"
                required
              />
            </div>
            {/* if cross the limitation show error message */}
            {hasCrossLimit && (
              <p className="text-red-600 mt-1">
                *** You cannot upload more than 12 files.
              </p>
            )}
            {/* preview photos */}
            <div className="flex flex-wrap mt-4 gap-6">
              {imagePreviews.map((preview, index) => (
                <div key={index}>
                  <div className="flex relative">
                    <div className="bg-gray-200 rounded-lg ">
                      <img
                        src={preview}
                        alt={`Preview ${index}`}
                        className="h-20 w-20"
                      />
                    </div>
                    <button
                      onClick={() => handleRemoveImage(index)}
                      className="bg-[#241C2B]  text-white text-xl rounded-full h-7 w-7 absolute -top-3 -right-2"
                    >
                      x
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Edit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditP;
