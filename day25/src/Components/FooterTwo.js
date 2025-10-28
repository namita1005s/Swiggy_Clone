export default function FooterTwo() {
  return (
    <footer className="bg-[#f5f5f6] text-[#3d4152] font-sans">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 text-sm">

          {/* Logo */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-2">
            <img src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg" alt="Swiggy" className="w-24 mb-1" />
            <p className="text-xs text-[#686b78]">© 2025 Swiggy Limited</p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-1">
              <li>About Us</li>
              <li>Swiggy Corporate</li>
              <li>Careers</li>
              <li>Team</li>
              <li>Swiggy One</li>
              <li>Swiggy Instamart</li>
              <li>Swiggy Dineout</li>
              <li>Minis</li>
              <li>Pyng</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-2">Contact us</h4>
            <ul className="space-y-1">
              <li>Help & Support</li>
              <li>Partner With Us</li>
              <li>Ride With Us</li>
            </ul>
            <h4 className="font-semibold mt-4 mb-2">Legal</h4>
            <ul className="space-y-1">
              <li>Terms & Conditions</li>
              <li>Cookie Policy</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Available In */}
          <div>
            <h4 className="font-semibold mb-2">Available in:</h4>
            <ul className="space-y-1">
              <li>Bangalore</li>
              <li>Gurgaon</li>
              <li>Hyderabad</li>
              <li>Delhi</li>
              <li>Mumbai</li>
              <li>Pune</li>
            </ul>
            <select className="mt-2 border rounded px-2 py-1 text-sm">
              <option>685 cities</option>
            </select>
          </div>

          {/* Life at Swiggy */}
          <div>
            <h4 className="font-semibold mb-2">Life at Swiggy</h4>
            <ul className="space-y-1">
              <li>Explore With Swiggy</li>
              <li>Swiggy News</li>
              <li>Snackables</li>
            </ul>
          </div>

          {/* Social Links (Image placeholders) */}
          <div>
            <h4 className="font-semibold mb-2">Social Links</h4>
            <div className="flex gap-4 mt-2">
              {/* Replace # with image URLs for each icon */}
              <img src="https://media-assets.swiggy.com/portal/testing/seo-home/Linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
              <img src="https://media-assets.swiggy.com/portal/testing/seo-home/icon-instagram.svg" alt="Instagram" className="w-5 h-5" />
              <img src="https://media-assets.swiggy.com/portal/testing/seo-home/icon-facebook.svg" alt="Facebook" className="w-5 h-5" />
              <img src="https://media-assets.swiggy.com/portal/testing/seo-home/icon-pinterest.svg" alt="Pinterest" className="w-5 h-5" />
              <img src="https://media-assets.swiggy.com/portal/testing/seo-home/Twitter.svg" alt="Twitter" className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-300" />

        {/* App Download Section */}
        <div className="text-center">
          <p className="text-2xl font-extrabold mb-4">
            For better experience, download the Swiggy app now
          </p>
          <div className="flex justify-center gap-4">
            <a href="https://apps.apple.com/in/app/swiggy-food-grocery-delivery/id989540920" target="_blank" rel="noopener noreferrer">
              <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
                alt="App Store"
                className="h-[54px]"
              />
            </a>
            <a href="https://play.google.com/store/apps/details?id=in.swiggy.android&hl=en_IN" target="_blank" rel="noopener noreferrer">
              <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"
                alt="Play Store"
                className="h-[54px]"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
