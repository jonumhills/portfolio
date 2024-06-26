import "./App.css";
import resume from "./Manoj_Grad_Resume.pdf";
import pCryptoAnalysis from "./assets/CryptoAnalysis.PNG";
import pFlowerDex from "./assets/FlowerdexProj.png";
import pOCR from "./assets/OCRProject.png";
import pDaro from "./assets/DaroProj.png";
import Carousel from "./carousel";
import Github from "./Profiles/Github";
import Instagram from "./Profiles/Instagram";
import Linkedin from "./Profiles/Linkedin";

const App = () => {
  const openResume = () => {
    window.open(resume);
  };

  // Project Details Image and Description

  const projectImages = [
    {
      href: "https://github.com/jonumhills/cryptoAnalysis",
      src: pCryptoAnalysis,
      title: "CryptoAnalysis",
      description:
        "Web application that enhances the WazirX trading platform by providing users with detailed analysis of their cryptocurrency investments. It fetches live prices from a public API and compares them with the user's WazirX investment data, showing the coins invested in, purchase date, price, and current profit or loss status.",
    },
    {
      href: "https://github.com/ETHDenver-2024/Daro-fe",
      src: pDaro,
      title: "DARO",
      description:
        "Daro integrates NFT technology into social media, empowering users to claim ownership of their content through non-fungible tokens (NFTs). By minting each post as an NFT, Daro addresses content ownership issues on traditional platforms, allowing creators to secure their intellectual property and monetize their creations directly.",
    },
    {
      href: "https://github.com/jonumhills/FlowerDex",
      src: pFlowerDex,
      title: "Flowerdex",
      description:
        "Web application that identifies flowers from user-uploaded images, providing details like scientific name, medicinal properties, and endangered status. It leverages the DenseNet-121 convolutional neural network model for accurate image recognition and scrapes the IUCN website for updated information on conservation statuses.",
    },
    {
      href: "https://github.com/jonumhills/OCR_Card_Details",
      src: pOCR,
      title: "KYC Extractor",
      description:
        "Implemented a proof of concept (POC) to instantly capture essential details from KYC documents (Driving License, Voter ID, Passport) and store them in a relational database. Utilized OpenCV for grayscaling and noise reduction in images and Pytesseract to extract embedded text. This solution streamlines the process of extracting and storing critical information from KYC documents efficiently.",
    },
  ];

  return (
    <>
      <div className="App">
        <div className="container mx-auto  w-1/2 p-2 md:p-4">
          <div className="bg-white shadow-md rounded-lg p-6 md:p-10 lg:p-12">
            <span className="flex items-center justify-between ">
              <span className="font-serif text-2xl md:text-2xl lg:text-2xl font-bold mb-4 text-white bg-red-700 hover:bg-gray-200 hover:rounded-sm hover:text-red-700">
                Manoj Srinivasa!{" "}
              </span>

              <span className="ml-2 inline-flex">
                <Github />
                <Instagram />
                <Linkedin />
                <button
                  type="button"
                  className="flex items-start font-sans ml-1 px-3 py-2 text-xs font-medium
     text-center text-gray-400 bg-gray-100 rounded-lg
      hover:bg-gray-300 hover:text-red-700
       "
                  onClick={openResume}
                >
                  Resume
                </button>
              </span>
            </span>

            <p className="font-serif text-base  md:text-lg text-black mt-4">
              Hi, I'm Manoj Srinivasa, your go-to backend guy and cloud
              architect. With over 3 years of experience in Backend Development,
              I've designed APIs and specialize in high-level and low-level
              system design. I am proficient in transforming applications into
              microservices by containerizing them using Docker. I can handle
              test suite design (unit, integration, & end-end) and create test
              workflows under continuous integration and deployment (CI/CD). At
              <a
                href="https://www.solarwinds.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-700"
              >
                {" "}
                Solarwinds{" "}
              </a>
              , I was part of <i>Obersvability</i> Product team creating gRPC
              APIs and designing streaming workflows to stream monitoring data
              from AWS and Azure. Presently, I am completing my master's in
              computer science at George Washington University.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto  w-1/2 p-2 md:p-4">
        <div className="bg-white shadow-md rounded-lg p-6 md:p-10 lg:p-12">
          <div className="container mx-auto">
            <div className="overflow-x-auto">
              <span className="font-serif text-2xl md:text-2xl lg:text-2xl font-bold mb-4 text-white bg-red-700 hover:bg-red-100 hover:text-red-700">
                {" "}
                Skills
              </span>
              <table className="mx-auto w-full max-w-4xl overflow-hidden text-sm m-1 text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <tbody>
                  <tr className="odd:bg-white even:bg-gray-100 even:dark:bg-gray-800 border-b">
                    <td className="px-6 py-1 whitespace-no-wrap border-b border-gray-300">
                      CI/CD
                    </td>
                    <td className="px-6 py-1 whitespace-no-wrap border-b border-gray-300">
                      CircleCI, GitHub Actions
                    </td>
                  </tr>
                  <tr className="odd:bg-white even:bg-gray-100 border-b">
                    <td className="px-6 py-1 whitespace-no-wrap border-b border-gray-300">
                      Languages
                    </td>
                    <td className="px-6 py-1 whitespace-no-wrap border-b border-gray-300">
                      Java, JavaScript, Python
                    </td>
                  </tr>
                  <tr className="odd:bg-white even:bg-gray-100 border-b">
                    <td className="px-6 py-1 whitespace-no-wrap border-b border-gray-300">
                      Cloud
                    </td>
                    <td className="px-6 py-1 whitespace-no-wrap border-b border-gray-300">
                      AWS, Azure
                    </td>
                  </tr>
                  <tr className="odd:bg-white even:bg-gray-100 border-b">
                    <td className="px-6 py-1 whitespace-no-wrap border-b border-gray-300">
                      Database
                    </td>
                    <td className="px-6 py-1 whitespace-no-wrap border-b border-gray-300">
                      MySQL, Redis, ClickHouse
                    </td>
                  </tr>
                  <tr className="odd:bg-white even:bg-gray-100 border-b">
                    <td className="px-6 py-1 whitespace-no-wrap border-b border-gray-300">
                      API's
                    </td>
                    <td className="px-6 py-1 whitespace-no-wrap border-b border-gray-300">
                      gRPC, GraphQL, REST
                    </td>
                  </tr>
                  <tr className="odd:bg-white even:bg-gray-100 border-b">
                    <td className="px-6 py-1 whitespace-no-wrap border-b border-gray-300">
                      Framework/Tools
                    </td>
                    <td className="px-6 py-1 whitespace-no-wrap border-b border-gray-300">
                      Git, Intellij, K9S, BloomRPC, Shell, Docker, Dropwizard,
                      Kafka
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto  w-1/2 p-2 md:p-4">
        <div className="bg-white shadow-md rounded-lg p-6 md:p-10 lg:p-12">
          <span className="font-serif text-2xl md:text-2xl lg:text-2xl font-bold mb-4 text-white bg-red-700 hover:bg-gray-200 hover:rounded-sm hover:text-red-700">
            Projects{" "}
          </span>
          <Carousel projects={projectImages} />
          <div className="flex justify-end items-center mt-4">
            <span className="font-serif ml-auto inline-flex mt-2 md:mt-0 md:ml-2">
              Find more at
              <Github />
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto  w-1/2 p-2 md:p-4">
        <div className="bg-white shadow-md rounded-lg p-6 md:p-10 lg:p-12">
          <span className="font-serif text-2xl md:text-2xl lg:text-2xl font-bold mb-4 text-white bg-red-700 hover:bg-gray-200 hover:rounded-sm hover:text-red-700">
            Profiles Elsewhere
          </span>
          <div className="font-serif ">
            <a
              href="https://medium.com/@thanumanu84"
              target="_blank"
              rel="noopener noreferrer"
            >
              @medium
            </a>{" "}
            <br />
            <a
              href="https://stackoverflow.com/users/16083983/manoj-s"
              target="_blank"
              rel="noopener noreferrer"
            >
              @stackoverflow
            </a>
            <br />
            <a
              href="https://x.com/Jonumhills_"
              target="_blank"
              rel="noopener noreferrer"
            >
              @Twitter
            </a>
            <br />
            <a
              href="https://stackoverflow.com/users/16083983/manoj-s"
              target="_blank"
              rel="noopener noreferrer"
            >
              @stackoverflow
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
