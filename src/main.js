import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import chartsEmbedDom from '@mongodb-js/charts-embed-dom'

import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom"

const sdk = new ChartsEmbedSDK({baseURL:"https://charts.mongodb.com/charts-habit-tracker-rkcfu/public/dashboards/63cab595-3b49-4aca-97c2-d7014bc059c3"});

const dashboardOptions = {
dashboardId:"63cab595-3b49-4aca-97c2-d7014bc059c3"
};

const dashboard = sdk.createDashboard(dashboardOptions); 

export const renderDashboard = async () => {
    //RENDER DASHBOARD HERE
    const dashboardElement = document.getElementById("dashboard");
    await dashboard.render(dashboardElement);

};

const app = createApp(App)
app.use(router)
app.mount('#app')