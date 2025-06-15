# 🏥 Medifort 4.0 — The Smart Hospital Assistant

An AI + Blockchain-powered hospital management suite that revolutionizes how hospitals handle queues, emergencies, collaboration, and waste — all in one place.  

---

## 🚀 Features

### 🎥 Smart Queue Monitoring (OpenCV + Python)
- Real-time people detection using OpenCV  
- Dynamically estimates wait time based on crowd count  
- Displayed on a live dashboard with a clean UI  

---

### 🧠 Doctor Collaboration Suite (GenAI + Web SDKs)
- Chat system for doctors with integrated GenAI APIs  
- Upload patient reports and get instant summaries  
- Enhances medical decision-making and teamwork  

---

### ♻️ Medical Waste Audit (Blockchain + MetaMask)
- Staff fill a digital form and sign using MetaMask  
- Logs are recorded on-chain using Ethereum Smart Contracts  
- Generates a tamper-proof verification transcript  

---

### 🚨 Smart SOS System (Voice-Activated)
- Triggered by saying **“emergency emergency”** or via app button  
- Sends real-time alerts via WebSockets + SMS APIs  
- Designed for fast internal response and accountability  

---

## 🧰 Tech Stack

| Layer          | Technologies Used                                |
|----------------|--------------------------------------------------|
| 👁️‍🗨️ Detection   | Python, OpenCV                                    |
| 🌐 Web         | React, HTML, CSS, JavaScript, TypeScript         |
| 🧠 AI/ML       | GenAI APIs (OpenAI), Python                      |
| 🔗 Blockchain  | Solidity, MetaMask, Ethereum Smart Contracts     |
| ☁️ Backend     | Flask, Node.js                                   |
| 🚀 Deployment  | Vercel                                           |

---

## ⚙️ Installation Guide (Demo Setup)

```bash
# Clone the repository
git clone https://github.com/your-username/medifort-4.0.git
cd medifort-4.0

# Install Python dependencies
cd backend
pip install -r requirements.txt

# Run Flask backend
python app.py
