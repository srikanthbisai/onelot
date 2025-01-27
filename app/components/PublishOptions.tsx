export const PublishOptions = () => {
    return (
      <div className="absolute w-72 border border-gray-300 top-[60%] -right-20 transform -translate-y-1/2 bg-white shadow-lg p-4 rounded-lg z-20">
        <h3 className="text-lg font-bold mb-2">Publish to</h3>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <input type="checkbox" id="facebook-page" />
            <label htmlFor="facebook-page" className="text-sm">
              Facebook Page
            </label>
          </li>
          <li className="flex items-center gap-2">
            <input type="checkbox" id="facebook-group" />
            <label htmlFor="facebook-group" className="text-sm">
              Facebook Group
            </label>
          </li>
          <li className="flex items-center gap-2">
            <input type="checkbox" id="facebook-marketplace" />
            <label htmlFor="facebook-marketplace" className="text-sm">
              Facebook Marketplace
            </label>
          </li>
          <li className="flex items-center gap-2">
            <input type="checkbox" id="instagram" />
            <label htmlFor="instagram" className="text-sm">
              Instagram
            </label>
          </li>
          <div className="w-full border text-center p-2">Select All</div>
        </ul>
        <button className="mt-4 bg-purple-800 text-white px-4 py-2 rounded-lg w-full">
          Publish
        </button>
      </div>
    );
  };