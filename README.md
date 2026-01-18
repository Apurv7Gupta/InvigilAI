# InvigilAI 👁️‍🗨️

InvigilAI is an AI-powered online examination monitoring system designed to ensure fair and secure remote assessments. It focuses on detecting suspicious activities during exams and maintaining exam integrity through smart monitoring.

## 🚀 Features
- AI-based exam monitoring
- Real-time activity tracking
- Secure authentication (Auth0)
- Clean and responsive UI
- Scalable frontend architecture

---
## 🖼️ Screenshots
### Identity Registration
![Identity Registration](public/shots/shot%201.png)

This image shows the process of registering an identity for secure access during exams.

### Detection in Action
![Detection in Action](public/shots/shot%202.png)

Here we see the real-time detection of suspicious activity during the exam. Our AI constantly monitors user behavior to ensure fair assessments.
---


## 🛠 Tech Stack
- React
- Tailwind CSS
- Auth0 (Authentication)
- Python
- YOLO
- PANNs
- MediaPipe
- SKlearn
- VGG2
- Docker
- FaceNet

## ⚙️ Setup & Run
```bash
npm install
npm run dev
```

## Backend Dir Tree
```bash
Backend/
├── docker-compose.yml
├── .gitignore
│
├── vision_service/
│   ├── main.py
│   ├── vision_module.py
│   ├── gaze_module.py
│   ├── weights/
│   │   └── best.pt 
│   ├── requirements_vision.txt 
│   └── Dockerfile.vision
│
├── identity_service/
│   ├── main.py
│   ├── identity_module.py
│   ├── enrollment_utils.py
│   ├── data/ 
│   │   ├── svm_model_facenet.pkl
│   │   └── label_encoder.pkl
│   ├── requirements_id.txt
│   └── Dockerfile.id
│
├── audio_service/
│   ├── main.py
│   ├── audio_module.py
│   ├── panns_data/
│   │   └── Cnn14_mAP=0.431.pth
│   ├── requirements_audio.txt 
│   └── Dockerfile.audio
│
└── gateway_fusion/
    ├── main.py                 
    ├── fusion_module.py        
    ├── requirements_gateway.txt
    └── Dockerfile.gateway
```
