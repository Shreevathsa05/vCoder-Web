import React from 'react';

const VCODE_CLI = () => {
  return (
    <div
      className="min-h-[95vh] flex justify-center items-center py-10"
      style={{
        backgroundImage: 'url(/image.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div
        className="backdrop-blur-md rounded-xl p-6 w-[90vw] max-w-3xl border shadow-lg space-y-3"
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          borderColor: "rgba(255,255,255,0.3)",
          color: "#f1f1f1",
        }}
      >
        <h1 className="text-3xl font-bold text-orange-400">vcoder-cli</h1>

        <p className="text-lg text-pink-200">
          ⚡ vcoder-cli is an AI-powered CLI tool to build websites directly into your desired folder with a simple command.
        </p>

        <h2 className="text-2xl font-semibold text-orange-300 mt-4">🚀 Features</h2>
        <ul className="list-disc list-inside space-y-1 text-pink-100">
          <li>Build websites from natural language descriptions</li>
          <li>Generate clean HTML, CSS, JS files in your specified directory</li>
          <li>Uses Gemini AI for code generation</li>
          <li>Simple CLI usage via npx or global install</li>
        </ul>

        <h2 className="text-2xl font-semibold text-orange-300 mt-4">📦 Installation</h2>
        <h3 className="text-xl font-semibold text-pink-200">Using npx</h3>
        <p className="text-sm text-gray-300">IMPORTANT Do not skip</p>

        <pre className="bg-gray-800 rounded p-3 overflow-x-auto text-green-300">
export API_KEY="YOUR_API_KEY"
        </pre>

        <p className="text-pink-100">Get your first website built in seconds:</p>

        <pre className="bg-gray-800 rounded p-3 overflow-x-auto text-green-300">
npx vcoder-cli --folder ./ --description "Build a Stylish Todo App with array CRUD"
        </pre>

        <p className="text-center text-pink-200 font-bold">OR</p>

        <pre className="bg-gray-800 rounded p-3 overflow-x-auto text-green-300">
npx vcoder-cli --folder {"{folder_location}"} --description {"{ Idea of a website }"}
        </pre>

        <p className="text-pink-100">For using it globally around your directories:</p>

        <pre className="bg-gray-800 rounded p-3 overflow-x-auto text-green-300">
npm install -g vcoder-cli
        </pre>

        <pre className="bg-gray-800 rounded p-3 overflow-x-auto text-green-300">
vcoder-cli --folder ./ --description "Build a SaaS landing page"
        </pre>

        <h3 className="text-xl font-semibold text-orange-300 mt-4">Options</h3>
        <table className="w-full text-sm text-left text-gray-300">
          <thead className="text-xs uppercase bg-gray-700 text-gray-300">
            <tr>
              <th className="px-2 py-1">Option</th>
              <th className="px-2 py-1">Description</th>
              <th className="px-2 py-1">Required</th>
            </tr>
          </thead>
          <tbody className="bg-gray-800">
            <tr>
              <td className="px-2 py-1">--folder</td>
              <td className="px-2 py-1">Folder location to build website</td>
              <td className="px-2 py-1">✅ Yes</td>
            </tr>
            <tr>
              <td className="px-2 py-1">--description</td>
              <td className="px-2 py-1">Description of website to generate</td>
              <td className="px-2 py-1">✅ Yes</td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-2xl font-semibold text-orange-300 mt-4">🔧 Development</h2>
        <p className="text-pink-100">Clone the repo:</p>

        <pre className="bg-gray-800 rounded p-3 overflow-x-auto text-green-300">
git clone https://github.com/Shreevathsa05/vCoder-cli.git
cd vCoder-backend
        </pre>

        <h2 className="text-2xl font-semibold text-orange-300 mt-4">🌐 Repository</h2>
        <pre className="bg-gray-800 rounded p-3 overflow-x-auto text-green-300">
https://github.com/Shreevathsa05/vCoder-cli.git
        </pre>

        <p className="text-pink-200 mt-4">Made by Shreevathsa05</p>
        <p className="text-pink-200">Contact - bhatshreevathsa17@gmail.com</p>
      </div>
    </div>
  );
};

export default VCODE_CLI;