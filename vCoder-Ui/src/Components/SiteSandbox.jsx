import { useState } from "react";

export default function SiteGenerator() {
  const [loading, setLoading] = useState(false);
  const [components, setComponents] = useState(null);
  const [tab, setTab] = useState("preview");
  const [description, setDescription] = useState("");

  const apiUrl = import.meta.env.VITE_API_URL;

  const generateSite = async () => {
    setLoading(true);
    setComponents(null);

    try {
      const res = await fetch(`${apiUrl}/generate?description=${description}`);
      const data = await res.json();

      if (data.success) {
        setComponents(data.components);
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (err) {
      console.error(err);
      alert("API error");
    } finally {
      setLoading(false);
    }
  };

  const handleExport = () => {
    const fullCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    ${components.css}
  </style>
</head>
<body>
  ${components.html}
  <script>
    ${components.js}
  </script>
</body>
</html>`;

    const blob = new Blob([fullCode], { type: "text/html;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "website.html";
    link.click();
  };

  const generateFullHtml = () => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    ${components.css}
  </style>
</head>
<body>
  ${components.html}
  <script>
    ${components.js}
  </script>
</body>
</html>`;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">vCode</h1>

      {/* Input Section */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Describe your website..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border rounded p-2"
        />
      </div>

      {/* Generate Button */}
      <button
        onClick={generateSite}
        disabled={loading || !description}
        className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50 hover:bg-blue-700 transition-colors"
      >
        {loading ? "Generating..." : "Generate Website"}
      </button>

      {/* Results Section */}
      {components && (
        <div className="mt-6">
          {/* Tab Navigation */}
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setTab("preview")}
              className={`px-4 py-2 rounded transition-colors ${
                tab === "preview" 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              Preview
            </button>
            <button
              onClick={() => setTab("code")}
              className={`px-4 py-2 rounded transition-colors ${
                tab === "code" 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              Code
            </button>
            <button
              onClick={handleExport}
              className="ml-auto px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
            >
              Export
            </button>
          </div>

          {/* Preview Tab */}
          {tab === "preview" && (
            <iframe 
              srcDoc={generateFullHtml()}
              sandbox="allow-scripts"
              className="w-full h-[500px] border rounded shadow-sm"
            />
          )}

          {/* Code Tab */}
          {tab === "code" && (
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm shadow-sm">
              <code>{generateFullHtml()}</code>
            </pre>
          )}
        </div>
      )}
    </div>
  );
}