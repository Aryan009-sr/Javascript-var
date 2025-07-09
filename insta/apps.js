/**
 * Simulates the process of creating an Instagram post using Promises.
 * Each step is an asynchronous operation with a simulated delay.
 */

console.log("--- Starting Instagram Post Creation Process ---");

// Step 1: Select an image
function selectImage() {
  return new Promise((resolve, reject) => {
    console.log("Step 1: Selecting an image...");
    const imageSelectionTime = 4000; // 4 seconds
    setTimeout(() => {
      const imageSelected = true; // Simulate successful selection
      if (imageSelected) {
        const imageUrl = "https://example.com/selected-image.jpg";
        console.log(`Image selected: ${imageUrl} (took ${imageSelectionTime / 1000}s)`);
        resolve(imageUrl); // Resolve with the image URL
      } else {
        reject(new Error("Failed to select an image. Please try again."));
      }
    }, imageSelectionTime);
  });
}

// Step 2: Apply a filter to the image
function applyFilter(imageUrl) {
  return new Promise((resolve, reject) => {
    console.log(`Step 2: Applying filter to ${imageUrl}...`);
    const filterApplicationTime = 2000; // 2 seconds
    setTimeout(() => {
      const filterApplied = true; // Simulate successful filter application
      if (filterApplied) {
        const filteredImageUrl = imageUrl.replace(".jpg", "-filtered.jpg");
        console.log(`Filter applied. New image: ${filteredImageUrl} (took ${filterApplicationTime / 1000}s)`);
        resolve(filteredImageUrl); // Resolve with the filtered image URL
      } else {
        reject(new Error("Failed to apply filter. The image might be corrupted."));
      }
    }, filterApplicationTime);
  });
}

// Step 3: Add a caption to the image
function addCaption(filteredImageUrl, captionText) {
  return new Promise((resolve, reject) => {
    console.log(`Step 3: Adding caption "${captionText}" to ${filteredImageUrl}...`);
    const captionAdditionTime = 5000; // 5 seconds
    setTimeout(() => {
      const captionAdded = true; // Simulate successful caption addition
      if (captionAdded) {
        const imageWithCaption = {
          url: filteredImageUrl,
          caption: captionText,
          timestamp: new Date().toLocaleString(),
        };
        console.log(`Caption added. Image ready for upload. (took ${captionAdditionTime / 1000}s)`);
        resolve(imageWithCaption); // Resolve with an object containing image and caption
      } else {
        reject(new Error("Failed to add caption. Please check text length."));
      }
    }, captionAdditionTime);
  });
}

// Step 4: Upload the image
function uploadImage(imageWithCaption) {
  return new Promise((resolve, reject) => {
    console.log(`Step 4: Uploading image with caption "${imageWithCaption.caption}" to Instagram...`);
    const uploadTime = 3000; // 3 seconds
    setTimeout(() => {
      const uploadSuccessful = true; // Simulate successful upload
      if (uploadSuccessful) {
        const postId = Math.floor(Math.random() * 1000000); // Simulate a post ID
        console.log(`Image uploaded successfully! Post ID: ${postId} (took ${uploadTime / 1000}s)`);
        resolve({ postId: postId, details: imageWithCaption }); // Resolve with upload details
      } else {
        reject(new Error("Image upload failed. Check your internet connection."));
      }
    }, uploadTime);
  });
}

// --- Orchestrate the Instagram post process using Promise Chaining ---

// Start the process by selecting an image
selectImage()
  .then((imageUrl) => {
    // If image selection is successful, proceed to apply filter
    return applyFilter(imageUrl); // Return the promise from applyFilter
  })
  .then((filteredImageUrl) => {
    // If filter application is successful, proceed to add caption
    const userCaption = "Loving this new look! #filtered #instapost #mood";
    return addCaption(filteredImageUrl, userCaption); // Return the promise from addCaption
  })
  .then((imageWithCaption) => {
    // If caption addition is successful, proceed to upload the image
    return uploadImage(imageWithCaption); // Return the promise from uploadImage
  })
  .then((uploadDetails) => {
    // If upload is successful, the entire process is complete
    console.log("\n--- Instagram Post Successfully Created! ---");
    console.log("Post ID:", uploadDetails.postId);
    console.log("Original Image URL:", uploadDetails.details.url.replace("-filtered.jpg", ".jpg")); // Show original base URL
    console.log("Final Image URL:", uploadDetails.details.url);
    console.log("Caption:", uploadDetails.details.caption);
    console.log("Posted On:", uploadDetails.details.timestamp);
  })
  .catch((error) => {
    // If any step in the chain rejects, this catch block will handle it
    console.error("\n--- Instagram Post Creation Failed! ---");
    console.error("Error:", error.message);
    console.error("Please try again later or check your inputs.");
  })
  .finally(() => {
    console.log("\n--- End of Instagram Post Process Simulation ---");
  });