"use client";

import { Navbar } from "flowbite-react";

export default function Nav() {
  return (
    <>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="/">
          <img
            src="/images/NW_Logo.png"
            className="mr-3 h-6 sm:h-9 p-1"
            alt="Networks Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="/contact-list" active={true}>
            <button
              type="button"
              class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Dashboard
            </button>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
