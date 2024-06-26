// pages/about.tsx
import React from 'react';
import Head from 'next/head';
import Navbar from '../src/components/Navbar'; // Adjust the path as per your project structure
import Footer from '../src/components/Footer'; // Adjust the path as per your project structure
import { Disclosure } from '@headlessui/react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

const AboutPage = () => {
  return (
    <div>
      <Head>
        <title>About Us - Your Company</title>
        <meta name="description" content="Learn about our company and what we do." />
      </Head>

      <Navbar />

      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">About Us</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Company</h2>
          <p className="text-lg text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur lectus quis pretium. Vestibulum nec aliquet tortor.
            Vivamus suscipit dui sit amet nisl ullamcorper, eget faucibus purus ultricies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-2">John Doe</h3>
              <p className="text-gray-700">CEO & Founder</p>
            </div>
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
              <p className="text-gray-700">Lead Developer</p>
            </div>
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Michael Brown</h3>
              <p className="text-gray-700">Designer</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-2">SEO Optimization</h3>
              <p className="text-gray-700">Vestibulum nec aliquet tortor. Vivamus suscipit dui sit amet nisl ullamcorper.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">FAQ</h2>
          <div className="divide-y divide-gray-200">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between items-center w-full py-2">
                    <span className="text-lg font-semibold">What are your working hours?</span>
                    {open ? (
                      <BiChevronUp className="text-lg" />
                    ) : (
                      <BiChevronDown className="text-lg" />
                    )}
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 py-2 text-gray-700">
                    Our working hours are from Monday to Friday, 9:00 AM to 5:00 PM.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between items-center w-full py-2">
                    <span className="text-lg font-semibold">Do you offer support?</span>
                    {open ? (
                      <BiChevronUp className="text-lg" />
                    ) : (
                      <BiChevronDown className="text-lg" />
                    )}
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 py-2 text-gray-700">
                    Yes, we provide 24/7 support via email and phone.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
