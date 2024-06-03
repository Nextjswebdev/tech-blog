'use client'

const Footer = () => {
  return (
    <footer className="flex justify-center items-center bg-gray-100 py-4">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-2xl text-[#600707] text-center py-4 rounded-lg mx-4 lg:px-8">
        <p className="text-lg font-bold italic">
          If you're enjoying my article, please share your thoughts with me!
        </p>
        <p className="text-sm mt-2">
          You can reach me at <a href="mailto:hell@gmail.com" className="text-blue-500">hell@gmail.com</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
