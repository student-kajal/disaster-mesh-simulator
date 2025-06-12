# 🛰️ Disaster Mesh Relay Simulator

A **React-based simulation tool** for visualizing communication networks in disaster scenarios like floods, earthquakes, or internet blackouts. It models peer-to-peer device messaging over a dynamic grid using BFS/Dijkstra algorithms.

---

## 🚀 Features

- 📡 Add, move, and delete devices on a virtual grid
- 📤 Send emergency messages between devices
- 🔁 Simulate message routing using BFS/Dijkstra
- ⏱️ View hop counts and estimated delivery time
- 📊 Live simulation stats and controls
- 💾 Local storage for device data

---

## 🧑‍💻 Tech Stack

- **Framework:** React JS
- **Styling:** Tailwind CSS / index.css
- **Algorithms:** BFS, Dijkstra
- **State:** Custom React Hooks
- **Utilities:** `localStorage` management, graph utils

---

## 📁 Folder Structure

/src
/components
Grid.jsx # Grid/Map visualization
Device.jsx # Device node component
Controls.jsx # Simulation controls
SimulationResults.jsx # Stats display
/utils
simulation.js # BFS/Dijkstra pathfinding logic
storage.js # localStorage helper functions
/hooks
useSimulation.js # Custom React hook for managing simulation state
App.js # Root component
index.css # Stylesheet (Tailwind or custom CSS)
---

## 📦 Setup Instructions

```bash
git clone https://github.com/your-username/disaster-mesh-simulator.git
cd disaster-mesh-simulator
npm install
npm start

The app will run locally at: http://localhost:3000

🙌 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

---

## 🚀 Coming Soon

This is the basic working version (Phase 1). A more advanced Phase 2 with real-time communication, backend logic, and disaster types will be released soon in a separate repository.
