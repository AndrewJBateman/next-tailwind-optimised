import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div>
			<section className="container mx-auto p-10 md:p-20 transform duration-500">
				<article className="shadow-lg mx-auto relative max-w-sm">
					<img
						className="w-full h-auto"
						src="https://weandthecolor.com/wp-content/uploads/2012/03/Colorphobia-Illustration-by-Matheus-Lopes-34645646.jpg"
						alt=""
					/>
					<span className="absolute right-4 top-4 bg-gray-600 text-white rounded-md p-1 pl-4 pr-4 font-semibold">
						The Wizard
					</span>
					<div className="p-7 my-auto pb-10 ">
						<h1 className="text-2xl font-semibold text-gray-800">
							Masterpiece
						</h1>
						<p className="text-base text-gray-400 mt-2">
							Random text
						</p>
					</div>
				</article>
			</section>
		</div>
	);
}
