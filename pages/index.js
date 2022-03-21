import Head from "next/head";
import NextImage from "next/image";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <section className="container p-10 mx-auto duration-500 transform md:p-20">
        <article className="relative max-w-sm mx-auto shadow-lg">
          <NextImage
            className=""
            width="400"
            height="300"
            src="https://source.unsplash.com/random/400x300"
            alt="random photo"
          />
          <span className="absolute p-1 pl-4 pr-4 font-semibold text-white bg-gray-600 rounded-md right-4 top-4">
            Unsplash Random Image
          </span>
          <div className="pb-10 my-auto p-7 ">
            <h1 className="text-2xl font-semibold text-gray-800">
              Quote of the Day
            </h1>
            <p className="mt-2 text-base text-gray-400"></p>
          </div>
        </article>
      </section>
    </>
  );
};

// Home.getInitialProps = async function() {
//   const res = await fetch('https://quotes.rest/qod');
//   const data = await res.json();
//   quoteData = data.contents.quotes;
//   console.log('data:', quoteData);

//   return {
//     props: {
//       quoteData
//     }
//   }
// }

export default Home;
