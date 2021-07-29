
//BlurHash is a compact representation of a placeholder for an image.

// so basically to do this   BlurHash takes an image, and gives you a short string 
//(only 20-30 characters!) that represents the placeholder for this image. You do this on the backend
// of your service, and store the string along with the image. When you send data to your client,
// you send both the URL to the image, and the BlurHash string. Your client then takes the string, 
//and decodes it into an image that it shows while the real image is loading over the network. The string is 
//short enough that it comfortably fits into whatever data format you use. For instance, it can
// easily be added as a field in a JSON object.

export const repositories = [
  {
    title: "Jbeech.tech",
    description: "The code for this website",
    cover: '',
    technologies: ["Next.js", "chakraUi","HTML"],
    url: "https://github.com/Mothergoose31/p4",
    live: "",
    blurHash: "L25#he^nryxc^-w$V{V_56bqx[M{",
    stars: "1",
    fork: "0"
  },
  
  
];
