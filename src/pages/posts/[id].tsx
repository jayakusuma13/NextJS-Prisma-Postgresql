import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import getdata from "../api/posts/getdata";
import { PrismaClient } from "@prisma/client";
import Layout from "../../layout/layout";

export async function getStaticPaths() {
    const res = await fetch(`http://localhost:3000/api/posts/getdata`);
    const posts = await res.json();

    const paths = posts.map((post) => ({
        params: { id: post.id.toString() },
      }))
    
      return { paths, fallback: false }
  }

export async function getStaticProps({params}) {
  const res = await fetch(`http://localhost:3000/api/posts/${params.id}`);
  const post = await res.json();
  return {
    props: {
        post,
    }
  };
}

const Home: NextPage = ({post}) => {

  return (
    <Layout>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          {post.title}
          </h1>
          
          <div className="flex justify-center">
          
            <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg" key={post.id}>
              <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
              <div className="p-6 flex flex-col justify-start">
                <h5 className="text-gray-900 text-xl font-medium mb-2">{post.title}</h5>
                <p className="text-gray-700 text-base mb-4">
                  {post.body}
                </p>
                <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
              </div>
            </div>
            
          </div>

        </div>
      </main>
    </Layout>
  );
};

export default Home;