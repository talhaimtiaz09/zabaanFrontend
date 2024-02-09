import { BlobServiceClient } from "@azure/storage-blob";


const connectionString = "DefaultEndpointsProtocol=https;AccountName=zabaanstorage;AccountKey=VH+rpPVRaShIKzBjH/RwO0mEGIUBe/Zcosoo0Hr+XTFB0QnIf/jYVFNBfWNV/JpKA67gP4R4bbNZ+AStazPVSQ==;EndpointSuffix=core.windows.net"; // Or use SAS token instead
const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);



async function getVideoUrl(containerName, videoName) {
  const containerClient = blobServiceClient.getContainerClient(containerName);
  const blobClient = containerClient.getBlockBlobClient(videoName);
  return await blobClient.url;
}

const containerName = "videoscontainer";
const videoName = "first_test_video.mp4";
const videoUrl = await getVideoUrl(containerName, videoName);

console.log('url test: ',videoUrl);
