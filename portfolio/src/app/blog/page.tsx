// Interface para los atributos de un post
interface PostAttributes {
  Title: string;
  Content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

// Interface para un post completo
interface Post {
  id: number;
  attributes: PostAttributes;
}

// Interface para la respuesta completa de la API
interface ApiResponse {
  data: Post[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

import axios from "axios";
import { parsedEnv } from "../env";
import Link from "next/link";
import NavBar from "../components/NavBar";
import CoverParticles from "../components/CoverParticles";

export default async function Home() {
  const response = await axios.get<ApiResponse>(`${parsedEnv.API_URL}/blog-posts`);
  const posts = response.data.data; 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 md:p-8 bg-gradient-cover">
      <CoverParticles />
      <h1 className="text-4xl font-bold text-gray-100 my-2 w-full max-w-4xl p-6 bg-white bg-opacity-15 rounded-lg shadow-md mx-auto">Mi blog</h1>
      <div className="max-w-4xl w-full">
        {posts.map((post, index) => (
          <div key={index} className="my-8 w-full max-w-4xl p-6 bg-white bg-opacity-15 rounded-lg shadow-md mx-auto ">
            <h2 className="text-3xl font-bold text-gray-200">{post.attributes.Title}</h2>
            <p className="text-gray-100 text-xl">{post.attributes.Content}</p>
          </div>
        ))}
      </div>
      <NavBar />
    </div>
  );
}
