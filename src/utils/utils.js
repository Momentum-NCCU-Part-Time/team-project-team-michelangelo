import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";

// Initialize the Charts Embed SDK with the base URL
const sdk = new ChartsEmbedSDK({
  baseURL: "https://charts.mongodb.com/charts-habit-tracker-rkcfu/public/dashboards/",
});

// Function to render the dashboard
export const renderDashboard = async () => {
  // Specify the dashboard options
  const dashboardOptions = {
    dashboardId: "63cab595-3b49-4aca-97c2-d7014bc059c3",
  };

  // Create the dashboard instance
  const dashboard = sdk.createDashboard(dashboardOptions);

  try {
    // Get the element where the dashboard will be rendered
    const dashboardElement = document.getElementById("dashboard");

    // Render the dashboard inside the specified element
    await dashboard.render(dashboardElement);
  } catch (error) {
    console.error("Error rendering dashboard:", error);
  }
};