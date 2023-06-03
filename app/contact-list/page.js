"use client";

import Link from "next/link";
import { Alert } from "flowbite-react";
import { Dropdown } from "flowbite-react";

export default function FirstPost() {
  return (
    <>
      <div className="flex flex-grow flex-col justify-center items-center">
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <table className="contacts w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">
                    Date Added
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3 ml-1"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 320 512"
                      >
                        <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                      </svg>
                    </a>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  Contact Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Company Name
                </th>
                <th scope="col" className="px-6 py-3">
                  E-mail
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">
                    Progress Tracker
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3 ml-1"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 320 512"
                      >
                        <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                      </svg>
                    </a>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">
                    Follow Up
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3 ml-1"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 320 512"
                      >
                        <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                      </svg>
                    </a>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-blue-200 cursor-pointer">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap dark:text-white"
                >
                  05/20/2023
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Bob Boberson
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Apple
                </th>
                <td className="px-6 py-4">
                  <a
                    href=""
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    email@email.com
                  </a>
                </td>
                <td className="px-6 py-4">
                  <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div class="bg-green-600 h-2.5 rounded-full"></div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span class="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                    Due
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Edit
                  </button>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-blue-200 cursor-pointer">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap dark:text-white"
                >
                  05/20/2023
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  John Smith
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Microsoft
                </th>
                <td className="px-6 py-4">
                  <a
                    href=""
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    email@email.com
                  </a>
                </td>
                <td className="px-6 py-4">
                  <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div class="bg-green-600 h-2.5 rounded-full"></div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span class="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                    Due
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Edit
                  </button>
                </td>
              </tr>
              <tr className="bg-white dark:bg-gray-800 hover:bg-blue-200 cursor-pointer">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap dark:text-white"
                >
                  05/20/2023
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Bill Patterson
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Google
                </th>
                <td className="px-6 py-4">
                  <a
                    href=""
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    email@email.com
                  </a>
                </td>
                <td className="px-6 py-4">
                  <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div class="bg-green-600 h-2.5 rounded-full"></div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span class="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                    Due
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
