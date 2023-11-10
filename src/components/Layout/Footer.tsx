
export default function  Footer(){
  return (
    <footer className="bg-orange-700 text-white py-6">
      <div className="container mx-auto flex items-center justify-evenly  ">
        <div className="flex flex-col space-y-4">
          <h2 className="text-xl font-bold">Company Name</h2>
          <p>123 E-commerce Street</p>
          <p>City, State, 12345</p>
          <a href="mailto:info@company.com">Email: info@company.com</a>
        </div>
        <div className="flex space-x-6">
          <div>
            <h3 className="text-lg font-semibold">Information</h3>
            <ul className="mt-2 space-y-2 text-black">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div>
 
          </div>
        </div>
      </div>
      <div className="text-center text-sm mt-4">
        &copy; {new Date().getFullYear()} Marco Shop All Rights Reserved.
      </div>
    </footer>
  );
} 
