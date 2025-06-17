# 🌐 Disaster Mesh Relay Simulator

**Live Demo:** [https://disaster-mesh-simulator.onrender.com](https://disaster-mesh-simulator.onrender.com)  
**Repository:** [github.com/student-kajal/disaster-mesh-simulator](https://github.com/student-kajal/disaster-mesh-simulator)

---

## 📌 Overview

**Disaster Mesh Relay Simulator** is a web-based system that models how devices can communicate in disaster zones without internet access. It simulates emergency message relaying between nearby devices using graph algorithms like **BFS** and **Dijkstra**, helping visualize message flow in a mesh network.

---

## 🎯 Problem Statement

In disaster scenarios such as earthquakes or floods, internet infrastructure may go down, leaving people without communication. This simulator explores how **peer-to-peer communication** can still happen via nearby devices forming an **offline mesh network**.

---

## 🚀 Features

- 📍 Add and position devices (nodes) manually on a grid  
- 🔗 Create connections (edges) between devices  
- 🧠 Simulate message routing using **BFS/Dijkstra**  
- 🛰️ Visualize message path, hop count, and delivery time  
- ⏱️ Implement **TTL (Time-To-Live)** to simulate message expiry  
- 💾 Save/load data locally using `localStorage`  

---

## 🛠 Tech Stack

- **Frontend:** React.js  
- **Styling:** CSS  
- **Algorithms:** BFS, Dijkstra (custom or via `graphlib`)  
- **Storage:** Browser `localStorage`  

---

## 🧠 Key Concepts Demonstrated

- Graph theory in real-world emergency systems  
- Data visualization using React  
- Offline-first system modeling  
- User-friendly simulation UI  

---

## 🧩 Future Scope – Phase 2: Mobile Mesh App

As part of the future roadmap, this simulator will be extended into a real-world mobile application using **React Native**, with planned features such as:

- Offline mesh networking via **Bluetooth/WiFi Direct**  
- Automatic message routing with TTL and re-routing  
- Offline logging using SQLite  
- Admin dashboard for centralized alert tracking  
- GPS & voice-to-text integration for alerts  

---

## 💻 Run Locally
<code>
```bash
git clone https://github.com/student-kajal/disaster-mesh-simulator.git
cd disaster-mesh-simulator
npm install
npm run dev ```</code>
Then open http://localhost:3000 in your browser.

## 📸 Screenshots :
<img width="678" alt="image" src="https://github.com/user-attachments/assets/a4cb4b16-486a-4118-ad84-8d12384c8eea" />
👩‍💻 Developed By
Kajal
B.Tech Final Year | MERN Stack Developer | DSA Enthusiast
📜 License
This project is licensed under the MIT License.


