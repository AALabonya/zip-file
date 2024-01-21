import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const AddCar = () => {
  const [features, setFeatures] = useState("Select Features");
  const [featuresShowMore, setFeaturesShowMore] = useState(false);

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [hasCrossLimit, setHasCrossLimit] = useState(false);
  //   const [imageUrls, setImageUrls] = useState([]);
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

  function handleFeatures(text) {
    if (features === "Select Features") {
      setFeatures(text);
    } else {
      setFeatures(features + "," + " " + text);
    }
  }

  async function handleAddCar(event) {
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

    const toastID = toast.loading("Uploading...", {
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
      const data = {
        features,
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
        .post("http://localhost:5000/add-car/v1", data)
        .then((data) => {
          if (data.data.insertedId) {
            toast.success("Car Successfully Added", {
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
      <h1 className="text-2xl text-center text-white mb-4">Add A New Car</h1>
      <Toaster />
      <form className="max-w-md mx-auto" onSubmit={handleAddCar}>
        <div className="relative z-0 w-full mb-5 group">
          <label htmlFor="helper-text" className="block mb-2 text-base font-medium text-white">Vehicle Name</label>
          <input type="text" name="name" id="helper-text" aria-describedby="helper-text-explanation" className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white" placeholder="Vehicle Name" />
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <label htmlFor="helper-text" className="block mb-2 text-base font-medium text-white">Year</label>
          <input type="number" name="year" id="helper-text" aria-describedby="helper-text-explanation" className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white" placeholder="Year" />

        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <label htmlFor="helper-text" className="block mb-2 text-base font-medium text-white">Mileage</label>
            <input type="number" name="mileage" id="helper-text" aria-describedby="helper-text-explanation" className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white" placeholder="Mileage" />


          </div>
          <div className="relative z-0 w-full mb-5 group">
          <label htmlFor="helper-text" className="block mb-2 text-base font-medium text-white">Price</label>
            <input
              type="number"
              name="price"
              id="floating_first_name"
              className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white"
              placeholder="Price "

            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
          <label htmlFor="helper-text" className="block mb-2 text-base font-medium text-white">Fuel type</label>
            <select
              type="text"
              name="fuelType"
              id="floating_first_name"
              className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white"
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
              type="text"
              name="condition"
              id="floating_first_name"
              className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white"
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
          <label htmlFor="helper-text" className="block mb-2 text-base font-medium text-white">Body Type</label>
            <select
              type="text"
              name="bodyType"
              id="floating_first_name"
              className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white"
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
          <label htmlFor="helper-text" className="block mb-2 text-base font-medium text-white">Transmission Type</label>
            <select
              type="text"
              name="transmissionType"
              id="floating_first_name"
              className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white"
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
          <label htmlFor="helper-text" className="block mb-2 text-base font-medium text-white"> Regional Spec</label>
            <select
              type="text"
              name="regionalSpec"
              id="floating_first_name"
              className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white"
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
          <label htmlFor="helper-text" className="block mb-2 text-base font-medium text-white">Steering Side</label>
            <select
              type="text"
              name="steeringSide"
              id="floating_first_name"
              className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white"
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

        <div className="mb-4">
        <label htmlFor="helper-text" className="block mb-2 text-base font-medium text-white">Features</label>
          <p className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white">{features}</p>
          <div className="mt-5 mb-9 flex gap-3 flex-wrap">
            <span
              className="text-white py-2 px-3 bg-[#241C2B] rounded cursor-pointer"
              onClick={() => handleFeatures("Climate Control")}
            >
              Climate Control
            </span>
            <span
              className="text-white py-2 px-3 bg-[#241C2B] rounded cursor-pointer"
              onClick={() => handleFeatures("Cooled Seats")}
            >
              Cooled Seats
            </span>
            <span
              className="text-white py-2 px-3 bg-[#241C2B] rounded cursor-pointer"
              onClick={() => handleFeatures("4 Wheel Drive")}
            >
              4 Wheel Drive
            </span>
            <span
              className="text-white py-2 px-3 bg-[#241C2B] rounded cursor-pointer"
              onClick={() => handleFeatures("Wheel Drive")}
            >
              4 Wheel Drive
            </span>
            <span
              className="text-white py-2 px-3 bg-[#241C2B] rounded cursor-pointer"
              onClick={() => handleFeatures("Air Conditioning")}
            >
              4 Air Conditioning
            </span>
            <span
              className="text-white py-2 px-3 bg-[#241C2B] rounded cursor-pointer"
              onClick={() => handleFeatures("Alarm/Anti-Theft System")}
            >
              Alarm/Anti-Theft System
            </span>

            {!featuresShowMore && (
              <p
                className="text-white py-2 px-3 bg-[#BFA37C] rounded cursor-pointer"
                onClick={() => setFeaturesShowMore(true)}
              >
                Show More
              </p>
            )}
          </div>

          {featuresShowMore && (
            <div className="flex-wrap flex gap-3">
              <span
                className="text-white py-2 px-3 bg-[#241C2B] rounded cursor-pointer"
                onClick={() => handleFeatures("Alarm/Anti-Theft System")}
              >
                Alarm/Anti-Theft System
              </span>
              <span
                className="text-white py-2 px-3 bg-[#241C2B] rounded cursor-pointer"
                onClick={() => handleFeatures("All Wheel Drive")}
              >
                All Wheel Drive
              </span>
              <span
                className="text-white py-2 px-3 bg-[#241C2B] rounded cursor-pointer"
                onClick={() => handleFeatures("All Wheel Steering")}
              >
                All Wheel Steering
              </span>
              <span
                className="text-white py-2 px-3 bg-[#241C2B] rounded cursor-pointer"
                onClick={() => handleFeatures("AM/FM Radio")}
              >
                AM/FM Radio
              </span>
              <span
                className="text-white py-2 px-3 bg-[#241C2B] rounded cursor-pointer"
                onClick={() => handleFeatures("Anti-Lock Brakes/ABS")}
              >
                Anti-Lock Brakes/ABS
              </span>
              <span
                className="text-white py-2 px-3 bg-[#241C2B] rounded cursor-pointer"
                onClick={() => handleFeatures("Aux Audio In")}
              >
                Aux Audio In
              </span>
              <span
                className="text-white py-2 px-3 bg-[#241C2B] rounded cursor-pointer"
                onClick={() => handleFeatures("Aux Audio In")}
              >
                Aux Audio In
              </span>
              <span
                className="text-white py-2 px-3 bg-[#241C2B] rounded cursor-pointer"
                onClick={() => handleFeatures("Bluetooth System")}
              >
                Bluetooth System
              </span>
              <span
                className="text-white py-2 px-3 bg-[#241C2B] rounded cursor-pointer"
                onClick={() => handleFeatures("Bluetooth System")}
              >
                Bluetooth System
              </span>
              <span
                className="text-white py-2 px-3 bg-[#241C2B] rounded cursor-pointer"
                onClick={() => handleFeatures("Brush Guard")}
              >
                Brush Guard
              </span>
              <span
                className="text-white py-2 px-3 bg-[#241C2B] rounded cursor-pointer"
                onClick={() => handleFeatures("Cassette Player")}
              >
                Cassette Player
              </span>
              <span
                className="text-white py-2 px-3 bg-[#241C2B] rounded cursor-pointer"
                onClick={() => handleFeatures("CD Player")}
              >
                CD Player
              </span>
              <span
                className="text-white py-2 px-3 bg-[#241C2B] rounded cursor-pointer"
                onClick={() => handleFeatures("Cruise Control")}
              >
                Cruise Control
              </span>
              <span
                className="text-white py-2 px-3 bg-[#241C2B] rounded cursor-pointer"
                onClick={() => handleFeatures("Dual Exhaust")}
              >
                Dual Exhaust
              </span>
              <span
                className="text-white py-2 px-3 bg-[#241C2B] rounded cursor-pointer"
                onClick={() => handleFeatures("Fog Lights")}
              >
                Fog Lights
              </span>
              <p
                className="text-white py-2 px-3 bg-[#BFA37C] rounded cursor-pointer"
                onClick={() => setFeaturesShowMore(false)}
              >
                Show Less
              </p>
            </div>
          )}
        </div>
        {/* upload photos */}
        <div className="max-w-lg mx-auto mb-4">
          <label
            className="block mb-2 text-sm text-white"
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
              className=" rounded-sm border border-gray-300 text-sm focus:ring-blue-500  block w-full p-2.5  bg-gray-700 dark:border-gray-600 placeholder-gray-400 text-white"
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
          className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-md text-sm w-full px-5 py-2.5 text-center"
        >
          Add Car
        </button>
      </form>
    </div>
  );
};

export default AddCar;
